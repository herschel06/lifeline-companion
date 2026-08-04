import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";

const eslintConfig = [
  { ignores: [".next/**", "next-env.d.ts"] },
  ...nextCoreWebVitals,
  ...nextTypescript,
  eslintPluginPrettier,
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
];

export default eslintConfig;
