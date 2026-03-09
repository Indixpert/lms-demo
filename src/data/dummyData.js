export const user = {
  name: 'Alex Johnson',
  email: 'alex.j@example.com',
  avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
};

export const courses = [
  {
    id: 1,
    title: 'Introduction to React Hooks',
    instructor: 'Sarah Lee',
    progress: 75,
    thumbnail: 'https://via.placeholder.com/400x200/818cf8/ffffff?text=React',
    description: 'Master the fundamentals of React Hooks to manage state and side effects in your functional components.',
    modules: [
      { id: 1, title: 'Module 1: Introduction to Hooks', lessons: [{id: 1, title: 'What are Hooks?', duration: '10min'}, {id: 2, title: 'useState Hook', duration: '15min'}] },
      { id: 2, title: 'Module 2: Effect and Context', lessons: [{id: 1, title: 'useEffect Hook', duration: '20min'}, {id: 2, title: 'useContext Hook', duration: '18min'}] }
    ]
  },
  {
    id: 2,
    title: 'Advanced Tailwind CSS Techniques',
    instructor: 'Mike Chen',
    progress: 40,
    thumbnail: 'https://via.placeholder.com/400x200/34d399/ffffff?text=Tailwind',
    description: 'Dive deep into Tailwind CSS configuration, plugins, and performance optimization for large-scale applications.',
    modules: [
      { id: 1, title: 'Module 1: Theming and Configuration', lessons: [{id: 1, title: 'Customizing Theme', duration: '25min'}, {id: 2, title: 'JIT Compiler', duration: '15min'}] },
      { id: 2, title: 'Module 2: Advanced Techniques', lessons: [{id: 1, title: 'Building Plugins', duration: '30min'}, {id: 2, title: 'Performance Optimization', duration: '22min'}] }
    ]
  },
  {
    id: 3,
    title: 'Modern JavaScript (ES6+)',
    instructor: 'David Green',
    progress: 95,
    thumbnail: 'https://via.placeholder.com/400x200/fbbF24/000000?text=JS',
    description: 'Explore the powerful features of modern JavaScript, including async/await, destructuring, and modules.',
    modules: [
      { id: 1, title: 'Module 1: Core Concepts', lessons: [{id: 1, title: 'let, const, and var', duration: '12min'}, {id: 2, title: 'Arrow Functions', duration: '15min'}] },
      { id: 2, title: 'Module 2: Asynchronous JavaScript', lessons: [{id: 1, title: 'Promises', duration: '25min'}, {id: 2, title: 'Async/Await', duration: '20min'}] },
      { id: 3, title: 'Module 3: ES Modules', lessons: [{id: 1, title: 'Import/Export Syntax', duration: '18min'}] }
    ]
  }
];

export const announcements = [
    { id: 1, text: 'Platform update scheduled for Friday at 10 PM PST.'},
    { id: 2, text: 'Welcome to the new and improved LMS dashboard!'},
    { id: 3, text: 'New Course: "State Management with Redux" is now live.'},
];
