const eslintConfig = [
  {
    rules: {
      // Disable all rules
      "no-unused-vars": "off",
      "no-console": "off",
      // Add other rules here as needed
    },
  },
  {
    extends: ["next/core-web-vitals"],
  },
];

export default eslintConfig;
