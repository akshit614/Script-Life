
# 📝 ScriptLife — A Blog Uploading & Reading Platform

ScriptLife is a modern full-stack web application for uploading, reading, and managing blogs. Built with Cloudflare Workers for lightning-fast backend performance and React + TypeScript + Tailwind for a responsive and user-friendly frontend, uses custom-deployed npm packages for clean code reuse.



## ✨ Features

- 🌐 Fully responsive blog platform
- ✍️ Create, read, and update blogs
- 🔐 User authentication (signup & signin)
- 📦 Reusable packages via npm
- 📚 Backend schema validation using Zod
- ⚡ Superfast backend with Cloudflare Workers and Hono.js
- 🗃️ PostgreSQL database using Neon & Prisma ORM
- ✔  Middlewares for auhtorization using jwt tokens
---

## 🚀 Live Deployment

- **Frontend**: [Vercel](https://vercel.com/)
- **Backend**: [Cloudflare Workers](https://workers.cloudflare.com/)

---

## 🛠️ Tech Stack

### 🔧 Backend
- **Cloudflare Workers**: Serverless backend hosting
- **Hono.js**: Lightweight Express-like framework (Cloudflare-compatible)
- **Prisma ORM**: Type-safe database client
- **Neon PostgreSQL**: Serverless database

### 🎨 Frontend
- **React + TypeScript**: Component-based architecture with type safety
- **Tailwind CSS**: Utility-first styling
- **Zod**: Input validation via shared schemas

### 📦 Packages
- **Custom NPM Modules**: For sharing Zod schemas and utilities across projects

---

## 🧠 Backend Overview

The backend is built using **Hono.js**, a minimalist web framework that works seamlessly with **Cloudflare Workers** (since Express.js is not supported). The logic is divided into two primary routers:

### 🧑‍💻 User Routes

- `POST /signup` — Create a new user
- `POST /signin` — Authenticate an existing user

### 📚 Blog Routes

- `GET /bulk` — Fetch all blogs
- `GET /blog/:id` — Fetch a specific blog by ID
- `POST /new` — Create a new blog post
- `PUT /update` — Update an existing blog post

**Database**: The backend uses **Prisma** for ORM and **Neon PostgreSQL** for data persistence.  
**Validation**: Inputs for blog creation and authentication are validated using **Zod schemas**.

---

## 🖥️ Frontend Overview

The frontend is crafted using **React + TypeScript** and styled with **Tailwind CSS**. It consumes the backend API and uses the shared npm package for input validation.

### Frontend Routes

- `/blogs` — All blogs page
- `/blog/:id` — Single blog view
- `/publish` — Create a new blog post
- `/signin` — Sign-in page
- `/signup` — Sign-up page

**Features**:
- Fully responsive layout (mobile + desktop)
- Form validation using shared Zod schemas
- Smooth navigation and form handling
- SHows time to read for blogs
---

## 📦 NPM Packages

This project includes a custom **common** folder that contains:

- **Zod Schemas** for:
  - Blog input validation
  - Signup/signin input validation

These packages are published to **npm** and consumed in both frontend and backend, ensuring **schema consistency** and **code reusability**.

---

## 🧪 How to Run Locally

### 🐙 Clone the repository

```bash
git clone https://github.com/akshit614/Script-Life.git
cd ScriptLife
```

### 📦 Install dependencies

- Backend:

```bash
cd backend
npm install
npx prisma generate
```

- Frontend:

```bash
cd frontend
npm install
```

- Common (npm package):

```bash
cd common
npm install
```

### 🔧 Environment Setup

Create `.env` files for backend and frontend with appropriate secrets (DB URL, etc.).
