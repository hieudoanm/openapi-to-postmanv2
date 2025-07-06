# 📤 [OpenAPI to PostmanV2](https://openapi-to-postmanv2.vercel.app/)

A simple and efficient tool to convert your OpenAPI (Swagger) specifications to [Postman Collection v2.1](https://schema.postman.com/collection/v2.1.0/collection.json) format — directly in the browser.

## 📚 Table of Contents

- [📤 OpenAPI to PostmanV2](#-openapi-to-postmanv2)
  - [📚 Table of Contents](#-table-of-contents)
  - [✨ Features](#-features)
  - [🚀 Getting Started](#-getting-started)
    - [🔧 1. Clone the repository](#-1-clone-the-repository)
    - [📦 2. Install dependencies](#-2-install-dependencies)
    - [⚙️ 3. Install Tauri CLI (optional)](#️-3-install-tauri-cli-optional)
    - [💻 4. Start the development server](#-4-start-the-development-server)
  - [🧰 Tech Stack](#-tech-stack)
  - [🗂 File Upload \& Conversion](#-file-upload--conversion)
  - [📦 Build for Production](#-build-for-production)
  - [🛠️ Build Desktop App with Tauri](#️-build-desktop-app-with-tauri)
  - [📄 License](#-license)
  - [🙌 Acknowledgements](#-acknowledgements)

## ✨ Features

- 🧩 Supports both **YAML** and **JSON** OpenAPI formats
- 🖥️ Client-side only — no backend needed
- 📤 Upload `.yaml`, `.yml`, or `.json` files
- 📥 Download converted Postman Collection v2.1 JSON
- 🚫 No external API calls — safe and private

## 🚀 Getting Started

### 🔧 1. Clone the repository

```bash
git clone git@github.com:hieudoanm/markup.git
cd openapi-to-postmanv2
```

### 📦 2. Install dependencies

```bash
pnpm install
```

### ⚙️ 3. Install Tauri CLI (optional)

```bash
cargo install tauri-cli
```

You also need to have Rust installed.

### 💻 4. Start the development server

```bash
pnpm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

## 🧰 Tech Stack

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [`openapi-to-postmanv2`](https://github.com/postmanlabs/openapi-to-postman) (via browser-compatible wrapper)
- [Tauri](https://v2.tauri.app/) — lightweight desktop app framework for Rust + frontend

## 🗂 File Upload & Conversion

- Files are parsed in-browser using [`js-yaml`](https://github.com/nodeca/js-yaml) and validated against the OpenAPI schema.
- The conversion process uses a bundled version of `openapi-to-postmanv2`, adapted to run in the browser.
- Output is downloadable as a `.postman_collection.json` file.

## 📦 Build for Production

```bash
pnpm run build
```

Then run:

```bash
pnpm run start
```

## 🛠️ Build Desktop App with Tauri

After installing Tauri CLI and Rust:

```bash
pnpm tauri build
```

This will generate native executables for Windows, macOS, or Linux, depending on your OS.

You can also run the desktop app in development mode:

```bash
pnpm tauri dev
```

## 📄 License

This project is licensed under the **GNU General Public License v3.0**.
You may copy, distribute, and modify the software as long as you track changes/dates in source files.
Any derivative work must also be licensed under GPL-3.0.

See the full license text in the [LICENSE](./LICENSE) file or visit:

[https://www.gnu.org/licenses/gpl-3.0.html](https://www.gnu.org/licenses/gpl-3.0.html)

## 🙌 Acknowledgements

- [Postman Labs](https://github.com/postmanlabs) for the `openapi-to-postmanv2` core logic
- [js-yaml](https://github.com/nodeca/js-yaml)
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Tauri](https://v2.tauri.app/)
