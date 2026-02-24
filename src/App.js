import React from 'react';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Dashboard />
        </div>
      </main>
    </div>
  );
}

export default App;