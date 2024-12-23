import React from 'react';
import { PROJECTS } from '../constants';

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-16'>
      <h2 className='my-20 text-center text-4xl  text-white'>Projects</h2>
      <div className='space-y-12'>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className='flex flex-wrap items-start gap-8 lg:justify-center'
          >
            {/* Project Image */}
            <div className='w-full lg:w-1/4'>
                <img
                  className='text-white mb-6 rounded'
                  src={project.image}
                  width={350}
                  height={350}
                  alt={project.title}
                />
            </div>

            {/* Project Details */}
            <div className='w-full max-w-xl lg:w-3/4'>
              <h6 className='mb-2  font-semibold text-white'>
                {project.title}
              </h6>
              <ul className='mb-4 list-disc text-neutral-300'>
                {project.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <div className='flex flex-wrap gap-2'>
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className='mr-2 rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-purple-700 shadow-md'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
