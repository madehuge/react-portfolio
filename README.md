# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## 🧱 Tech Stack & Purpose

| Tool / Library     | Version Used         | Purpose / Why It's Used                                                                 |
|--------------------|----------------------|------------------------------------------------------------------------------------------|
| **React**          | 19 (RC / Latest)     | Core UI library for building modern SPA with components and hooks                       |
| **Vite**           | Latest               | Fast build tool and dev server for blazing-fast hot module replacement (HMR)            |
| **Zustand**        | Latest               | Lightweight state management without boilerplate, great for scalable global state       |
| **React Query**    | Latest               | Handles API caching, background refetching, error & loading states (async state tool)   |
| **Axios**          | Latest               | Promise-based HTTP client for calling REST APIs easily with interceptors and configs    |
| **Node.js**        | 22                   | JavaScript runtime used for development and toolchain execution                         |
| **npm**            | 10.x (Latest)        | Node package manager used to install and manage all dependencies                        |
| **ESLint**         | With Custom Rules    | Helps maintain code quality and consistency using linting rules                         |
| **Vite Plugin React** | @vitejs/plugin-react | Integrates React with Vite and enables Fast Refresh via Babel or SWC                   |

> 📌 This stack is selected to ensure optimal performance, developer experience, and scalability for modern web applications.
