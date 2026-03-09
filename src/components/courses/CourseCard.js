import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../common/Card';

const CourseCard = ({ course }) => {
  return (
    <Link to={`/courses/${course.id}`}>
      <Card className="hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
        <img className="h-40 w-full object-cover" src={course.thumbnail} alt={course.title} />
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{course.title}</h3>
          <p className="text-gray-600 text-sm mb-4">By {course.instructor}</p>
          <div className="mt-auto">
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-indigo-600 h-2.5 rounded-full" 
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>
            <p className="text-right text-sm text-gray-500 mt-2">{course.progress}% Complete</p>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default CourseCard;
