export const courses = [
  {
    id: 1,
    title: 'Introduction to React',
    description: 'Learn the fundamentals of React, including components, state, and props.',
    instructor: 'John Doe',
    progress: 75,
    modules: [
      { id: 1, title: 'Module 1: Getting Started', completed: true },
      { id: 2, title: 'Module 2: Components and Props', completed: true },
      { id: 3, title: 'Module 3: State and Lifecycle', completed: true },
      { id: 4, title: 'Module 4: Handling Events', completed: false },
    ]
  },
  {
    id: 2,
    title: 'Advanced Tailwind CSS',
    description: 'Master Tailwind CSS by creating complex, responsive layouts.',
    instructor: 'Jane Smith',
    progress: 40,
    modules: [
      { id: 1, title: 'Module 1: Configuration', completed: true },
      { id: 2, title: 'Module 2: Utility-First Principles', completed: true },
      { id: 3, title: 'Module 3: Responsive Design', completed: false },
      { id: 4, title: 'Module 4: Customization', completed: false },
    ]
  },
  {
    id: 3,
    title: 'JavaScript for Beginners',
    description: 'A comprehensive guide to modern JavaScript from scratch.',
    instructor: 'Peter Jones',
    progress: 100,
    modules: [
      { id: 1, title: 'Module 1: Variables and Data Types', completed: true },
      { id: 2, title: 'Module 2: Functions and Scope', completed: true },
      { id: 3, title: 'Module 3: Arrays and Objects', completed: true },
      { id: 4, title: 'Module 4: DOM Manipulation', completed: true },
    ]
  }
];