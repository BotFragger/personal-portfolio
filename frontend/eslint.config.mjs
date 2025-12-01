// import { defineConfig, globalIgnores } from "eslint/config";
// import nextVitals from "eslint-config-next/core-web-vitals";
// import nextTs from "eslint-config-next/typescript";

// const eslintConfig = defineConfig([
//   ...nextVitals,
//   ...nextTs,
//   // Override default ignores of eslint-config-next.
//   globalIgnores([
//     // Default ignores of eslint-config-next:
//     ".next/**",
//     "out/**",
//     "build/**",
//     "next-env.d.ts",
//   ]),
// ]);

// export default eslintConfig;

// eslint.config.mjs
import next from 'eslint-config-next';

export default [
  {
    ignores: ['node_modules/**', '.next/**'],
  },

  next(),

  {
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      'no-console': 'warn',
      'react/no-unescaped-entities': 'off',
      '@next/next/no-html-link-for-pages': 'off',
      '@next/next/no-img-element': 'off',
      'react-hooks/exhaustive-deps': 'off',
    },
  },
];

