# 🛠️ Installation & Setup Guide

This guide helps developers and non-technical users set up and run the project locally.

---

## ✅ Prerequisites

Make sure the following tools are installed:

| Tool                       | Version | Download Link                                                  |                                            |
| -------------------------- | ------- | -------------------------------------------------------------- | ------------------------------------------ |
| Node.js                    | v22.x.x |                                                                | [https://nodejs.org/](https://nodejs.org/) |
| npm (Node Package Manager) | v10.x.x | Comes bundled with Node.js                                     |                                            |
| Git (optional)             | Latest  | [https://git-scm.com/downloads](https://git-scm.com/downloads) |                                            |

You can verify installations by running:

```bash
node -v
npm -v
git --version  # Optional
```

---

## 🔢 Installation Steps

### 🥇 Step 1: Clone the Repository

Open your terminal and run:

```bash
git clone https://github.com/your-username/your-project.git
cd your-project
```

---

### 🥈 Step 2: Install Dependencies

Install all required packages:

```bash
npm install
```

---

### 🥉 Step 3: Start the Development Server

Run the development server:

```bash
npm run dev
```

Now open your browser and visit:

```
http://localhost:5173
```

---

### 🏗️ Step 4: Build for Production

Generate an optimized production build:

```bash
npm run build
```

The output will be in the `dist/` directory.

---

### 👀 Step 5: Preview the Production Build

Test the production build locally:

```bash
npm run preview
```

---

### 🧹 Step 6: Lint the Code

Ensure code quality by running:

```bash
npm run lint
```

---

✅ You’re all set! Happy Coding 💻
