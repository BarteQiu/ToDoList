# 📝 Advanced Todo Application

A highly interactive, performant, and beautifully designed Todo application built using **React**, **TypeScript**, and **Tailwind CSS**. This project demonstrates scalable state management, strict type safety, real-time filtering, data persistence, and inline task architecture.

---

## ✨ Features

* **⚡ CRUD Operations:** Add, complete, inline-edit, and delete tasks seamlessly.
* **💾 LocalStorage Persistence:** Tasks are automatically synchronized with the browser's local storage using React hooks (`useEffect`).
* **🔍 Real-Time Search & Debounce-ready:** Instant multi-character search functionality filtering through task bodies.
* **🏷️ Categorization & Tags:** Group tasks by context (`Work`, `Home`, `All`).
* **🔥 Priority-Based Sorting:** Custom algorithmic sorting where tasks are arranged automatically based on weight values (`High` > `Mid` > `Low`).
* **🔀 Layout Toggling:** Switch dynamically between list view (`flex`) and card view (`grid`) with full state support.

---

## 🛠️ Tech Stack & Architecture

* **Frontend Library:** React (Functional Components & Hooks)
* **Type Safety:** TypeScript (Strict interface definitions for data models and component props)
* **Styling:** Tailwind CSS
* **Icons:** React Icons (`io5`)

### Key Code Architecture Highlights
* **State-driven Conditional Rendering:** Handles modal UI logic for task creation and contextual state changes for inline modifications.
* **Strict Typing:** Custom interfaces defining the strict schema of `Task` types, eliminating the use of `any`.
* **Algorithmic Weighting:** Uses a structured lookup object (`piorityWeight`) to handle the sorting arrays before mapping data to the UI.

```typescript
interface Task {
  id: number;
  text: string;
  isCompleted: boolean;
  piority: "Low" | "Mid" | "High";
  tags: "All" | "Work" | "Home";
}
