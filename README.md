<div align="center">

# 🚀 CodeCanvas | TypeScript Learning Hub

[![TypeScript](https://img.shields.io/badge/TypeScript-5.3.3-blue?logo=typescript&logoColor=white&style=for-the-badge)](https://www.typescriptlang.org/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white&style=for-the-badge)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white&style=for-the-badge)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black&style=for-the-badge)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Git](https://img.shields.io/badge/Git-F05032?logo=git&logoColor=white&style=for-the-badge)](https://git-scm.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge)](http://makeapullrequest.com)

[![Live Demo](https://img.shields.io/badge/Live_Demo-View_Project-2ea44f?style=for-the-badge&logo=github-pages)](https://yourusername.github.io/codecanvas)
[![Code Size](https://img.shields.io/github/languages/code-size/yourusername/codecanvas?style=for-the-badge)](https://github.com/yourusername/codecanvas)
[![Last Commit](https://img.shields.io/github/last-commit/yourusername/codecanvas?style=for-the-badge)](https://github.com/yourusername/codecanvas)

</div>

---

## 📋 **Table of Contents**
- [✨ Overview](#-overview)
- [🎯 Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [📁 Project Structure](#-project-structure)
- [🚀 Getting Started](#-getting-started)
- [⌨️ Keyboard Shortcuts](#️-keyboard-shortcuts)
- [🎨 Color Palette](#-color-palette)
- [🤝 Contributing](#-contributing)
- [📞 Connect With Me](#-connect-with-me)
- [📄 License](#-license)

---

## ✨ **Overview**

**CodeCanvas** is a modern, TypeScript-powered learning dashboard designed to showcase web development skills and best practices. This project demonstrates the power of **TypeScript**, **modular architecture**, and **interactive UI components** in a real-world application.

> 🎯 **Purpose**: A comprehensive learning environment that combines theory with practice, featuring dark mode, toast notifications, form validation, and smooth animations — all built with type-safe TypeScript.

---

## 🎯 **Features**

| Feature | Description | Status |
|---------|-------------|--------|
| 🌓 **Dark/Light Mode** | Persistent theme switching with localStorage | ✅ Complete |
| 📢 **Toast Notifications** | Beautiful, auto-dismissing popup messages | ✅ Complete |
| 📝 **Form Validation** | Type-safe form handling with error messages | ✅ Complete |
| ⌨️ **Keyboard Shortcuts** | Alt+T, Alt+H for quick actions | ✅ Complete |
| 📊 **Interactive Tables** | Clickable rows with feedback | ✅ Complete |
| 📂 **Expandable Sections** | Collapsible details with animations | ✅ Complete |
| 🎨 **Modern UI** | Gradient backgrounds, shadows, hover effects | ✅ Complete |
| 📱 **Responsive Design** | Mobile-first approach | ✅ Complete |
| 🔗 **Smooth Scrolling** | Animated navigation links | ✅ Complete |
| 💾 **Local Storage** | Persistent theme preferences | ✅ Complete |

---

## 🛠️ **Tech Stack**

<div align="center">

| Technology | Version | Purpose |
|------------|---------|---------|
| ![TypeScript](https://img.shields.io/badge/TypeScript-5.3.3-3178C6?logo=typescript) | 5.3.3 | Core language with static typing |
| ![HTML5](https://img.shields.io/badge/HTML5-Latest-E34F26?logo=html5) | HTML5 | Semantic markup structure |
| ![CSS3](https://img.shields.io/badge/CSS3-Latest-1572B6?logo=css3) | CSS3 | Styling, animations, responsive |
| ![Node.js](https://img.shields.io/badge/Node.js-20.x-339933?logo=nodedotjs) | 20.x | Development environment |
| ![npm](https://img.shields.io/badge/npm-10.x-CB3837?logo=npm) | 10.x | Package management |

</div>

---

## 📁 **Project Structure**
```
codecanvas-learning-lab/
│── dist/
│   ├── main.js
│   ├── main.js.map
│   ├── main.d.ts
│   ├── main.d.ts.map
│   ├── types/
│   └── utils/
│
│── src/
│   ├── index.html
│   ├── main.ts
│   ├── style.css
│   │
│   ├── types/
│   │   └── interfaces.ts
│   │
│   └── utils/
│       ├── form.ts
│       ├── theme.ts
│       ├── toast.ts
│       └── scroll.ts
│
│── package.json
│── package-lock.json
│── tsconfig.json
│── .gitignore
```


---

## 🚀 **Getting Started**

Follow these steps to run the project locally:

### **Prerequisites**
- [Node.js](https://nodejs.org/) (v20 or higher)
- [npm](https://www.npmjs.com/) (v10 or higher)
- [Git](https://git-scm.com/)

### **Installation**

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/codecanvas.git

# 2. Navigate to project directory
cd codecanvas

# 3. Install dependencies
npm install

# 4. Compile TypeScript
npm run build

# 5. Watch mode (auto-compile on changes)
npm run watch

# 6. Open with live server
npx live-server src
```
## 📜 Available Scripts

| Script           | Description                              |
|------------------|------------------------------------------|
| npm run build    | Compiles TypeScript to JavaScript        |
| npm run watch    | Watches for changes and auto-compiles    |
| npm run dev      | Starts live server                       |
| npm run clean    | Removes dist folder                      |

-----


## ⌨️ Keyboard Shortcuts

| Shortcut   | Action                     |
|------------|----------------------------|
| Alt + T    | Toggle Dark/Light mode     |
| Alt + H    | Scroll to top             |
| Esc        | Close toast notification   |

------
## 🎨 Color Palette

| Role      | Light Mode | Dark Mode |
|-----------|------------|-----------|
| Primary   | #007acc    | #4aa3df   |
| Background| #f4f6f8    | #0f0f1a   |
| Card      | #ffffff    | #1e1e2e   |
| Success   | #4CAF50    | #6fbf6f   |
| Error     | #f44336    | #f6685e   |
| Warning   | #ff9800    | #ffb74d   |
| Info      | #2196F3    | #64b5f6   |
----------


## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
```bash
git checkout -b feature/amazing-feature

git commit -m "Add amazing feature"
```
```
git push origin feature/amazing-feature
```

## 📞 Connect With Me

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/YasirAwan4831)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/yasirawan4831)
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://x.com/YasirAwan4831)
[![Portfolio](https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://yasirawaninfo.vercel.app/)
[![Email](https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:my3154831409@gmail.com)


## ⭐ Show Your Support

If you found this project helpful, please give it a ⭐ on GitHub and share it with others!

<p align="center">
Made with  by Muhammad Yasir  

[![GitHub Stars](https://img.shields.io/github/stars/YasirAwan4831/codecanvas?style=social)](https://github.com/YasirAwan4831/codecanvas/stargazers)
[![GitHub Followers](https://img.shields.io/github/followers/YasirAwan4831?style=social)](https://github.com/YasirAwan4831)
</p>