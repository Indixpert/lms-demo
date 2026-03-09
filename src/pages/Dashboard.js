import React from 'react';
import CourseCard from '../components/courses/CourseCard';
import Card from '../components/common/Card';
import { courses, announcements } from '../data/dummyData';

const Dashboard = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">My Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Announcements</h2>
        <Card>
          <ul className="divide-y divide-gray-200">
            {announcements.map(announcement => (
              <li key={announcement.id} className="p-4 text-gray-600">
                {announcement.text}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
