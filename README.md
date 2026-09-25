# 🚀 DevStack

DevStack is a modern React-based technology stack builder where users can explore different technologies and add their favorite technologies to their own stack.

## 🌐 Live Project

[Live Demo](#)

## 📌 About The Project

DevStack helps developers explore popular technologies from different categories such as Frontend, Backend, Database, Language, Styling, DevOps, and Tools.

Users can view technology details, add technologies to their stack, remove individual technologies, and clear the entire stack.

## 🛠️ Technologies Used

- ⚛️ React
- 📘 TypeScript
- 🎨 Tailwind CSS
- ⚡ Vite
- 🧩 React Icons
- 🔔 React Toastify
- 📦 JSON Data
- 🧠 React Hooks
- 🐙 Git & GitHub

## ✨ Features

### 1. 🔍 Explore Technologies

Users can explore different technologies with useful information such as:

- Technology name
- Category
- Description
- Rating
- Difficulty
- Badge
- Technology icon

### 2. ➕ Build Your Own Stack

Users can click **Add to Stack** to add a technology to their personal stack.

Already selected technologies cannot be added again.

### 3. 🗑️ Manage Your Stack

Users can:

- Remove a single technology
- Remove all technologies
- See the number of selected technologies
- See an empty-stack message when no technology is selected

## 📂 Project Structure

```text
src/
├── components/
│   ├── Nav.tsx
│   ├── Banner.tsx
│   ├── Footer.tsx
│   └── Technologies/
│       ├── TechList.tsx
│       ├── AvailableTechs.tsx
│       └── YourStack.tsx
│
├── Types/
│   └── Technology Type.ts
│
├── App.tsx
├── main.tsx
└── index.css

public/
└── data.json


1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript/TypeScript.

2. What is the difference between props and state?

Props are data passed from a parent component to a child component.

3. What does the useState hook do, and where did you use it in this project?

useState is used to store data that can change and cause the UI to update.

4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect is used to perform side effects in React, such as fetching data, working with APIs, timers, or browser events.

5. Why does every item in a .map() list need a unique key prop?

React uses the key to identify each item in a list.

It helps React understand which item was added, removed, or changed.

6. What is conditional rendering?

Conditional rendering means showing different UI depending on a condition.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child using props.

