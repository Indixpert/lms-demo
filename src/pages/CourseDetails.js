import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { courses } from '../data/dummyData';
import Card from '../components/common/Card';

const CourseDetails = () => {
  const { courseId } = useParams();
  const course = courses.find(c => c.id === parseInt(courseId));

  if (!course) {
    return (
      <div className="text-center">
        <h2 className="text-2xl font-bold">Course not found</h2>
        <Link to="/" className="text-indigo-600 hover:underline mt-4 inline-block">
          &larr; Back to Dashboard
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6">
        <Link to="/" className="text-indigo-600 hover:underline">
          &larr; Back to Dashboard
        </Link>
      </div>
      
      <Card>
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img className="h-48 w-full object-cover md:w-48" src={course.thumbnail} alt={course.title} />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Course Details</div>
            <h1 className="block mt-1 text-3xl leading-tight font-medium text-black">{course.title}</h1>
            <p className="mt-2 text-gray-500">By {course.instructor}</p>
            <p className="mt-4 text-gray-600">{course.description}</p>
          </div>
        </div>
      </Card>

      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Course Content</h2>
        <div className="space-y-4">
          {course.modules.map((module, index) => (
            <Card key={module.id}>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800">Module {index + 1}: {module.title}</h3>
                <ul className="mt-3 divide-y divide-gray-200">
                  {module.lessons.map(lesson => (
                    <li key={lesson.id} className="py-3 flex justify-between items-center">
                      <span className="text-gray-700">{lesson.title}</span>
                      <span className="text-sm text-gray-500">{lesson.duration}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
