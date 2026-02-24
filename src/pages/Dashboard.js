import React from 'react';
import { courses } from '../data/courses';
import CourseCard from '../components/CourseCard';

const Dashboard = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">My Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;