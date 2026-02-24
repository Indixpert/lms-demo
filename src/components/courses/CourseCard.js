import React from 'react';
import Card from '../common/Card';

const ProgressBar = ({ progress }) => (
  <div>
    <div className="flex justify-between mb-1">
      <span className="text-base font-medium text-indigo-700">Progress</span>
      <span className="text-sm font-medium text-indigo-700">{progress}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
    </div>
  </div>
);

const CourseCard = ({ course }) => {
  return (
    <Card className="hover:shadow-xl transition-shadow duration-300">
      <img src={course.thumbnail} alt={course.title} className="h-48 w-full object-cover" />
      <div className="p-6">
        <h4 className="text-lg font-semibold text-gray-900 mb-1 truncate">{course.title}</h4>
        <p className="text-sm text-gray-600 mb-4">By {course.instructor}</p>
        <ProgressBar progress={course.progress} />
        <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition">
          Continue
        </button>
      </div>
    </Card>
  );
};

export default CourseCard;