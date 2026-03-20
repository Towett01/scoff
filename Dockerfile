# ── Stage 1: Builder ──────────────────────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy dependency files first (better layer caching)
COPY package.json pnpm-lock.yaml ./

# Install ALL dependencies (including dev) needed for build
RUN pnpm install --frozen-lockfile

# Copy the rest of the project
COPY . .

# Increase memory limit for build — prevents OOM crash mid-build
ENV NODE_OPTIONS="--max_old_space_size=2048"

# Build the Next.js app
RUN pnpm build

# ── Stage 2: Production Runner ────────────────────────────────────────────────
FROM node:20-alpine AS runner

# Production environment
ENV NODE_ENV=production
ENV PORT=3000

# FIX: Bind to 0.0.0.0 so reverse proxies (nginx, Traefik, etc.) can reach the app
# Without this Next.js binds to 127.0.0.1 inside the container → 502
ENV HOSTNAME="0.0.0.0"

WORKDIR /app

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy dependency files
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/pnpm-lock.yaml ./pnpm-lock.yaml

# Install ONLY production dependencies — keeps image lean
RUN pnpm install --frozen-lockfile --prod

# Copy built app output
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/next.config.ts ./next.config.ts

# Health check — ensures container is ready before proxy routes traffic to it
# Prevents 502 on cold starts
HEALTHCHECK --interval=15s --timeout=5s --start-period=30s --retries=3 \
  CMD wget -qO- http://localhost:3000/ || exit 1

# Expose port
EXPOSE 3000

# Start Next.js
CMD ["pnpm", "start"]