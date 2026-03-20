# 1. Use Node.js base image
FROM node:18-alpine AS builder

# 2. Set working directory
WORKDIR /app

# 3. Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# 4. Copy project files
COPY . .

ENV NODE_OPTIONS="--max_old_space_size=1024"


# 5. Install dependencies
RUN pnpm install
RUN free -m || cat /proc/meminfo

# 6. Build Next.js app
RUN pnpm build

# --------------------------
# 7. Set up production image
FROM node:18-alpine AS runner

# Set environment
ENV NODE_ENV=production
ENV PORT=3000

# Set working directory
WORKDIR /app

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy only necessary files from builder


COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.ts ./next.config.ts

# Expose port
EXPOSE 3000

# Start Next.js server
CMD ["pnpm", "start"]
