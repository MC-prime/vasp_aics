import React from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  status: string;
  category: string;
  startDate: string;
  endDate: string | null;
  technologies: string[];
  sellingPrice: string;
  views: number;
  likes: number;
  investors: number;
}

interface ProjectsSectionProps {
  projects: Project[];
  setProjects: React.Dispatch<React.SetStateAction<Project[]>>;
  handleProjectStatusChange: (projectId: number, newStatus: string) => void;
}

export default function ProjectsSection({
  projects,
  setProjects,
  handleProjectStatusChange
}: ProjectsSectionProps) {
  return (
    <div className="max-w-6xl">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900">My Projects</h3>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
            + Add New Project
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-xl font-semibold text-gray-900">{project.title}</h4>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                  project.status === 'Ongoing' ? 'bg-blue-100 text-blue-800' :
                  project.status === 'Pending' ? 'bg-orange-100 text-orange-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {project.status}
                </span>
              </div>

              <p className="text-gray-600 mb-4">{project.description}</p>

              <div className="space-y-2 mb-4">
                <p className="text-sm text-gray-500">
                  <span className="font-medium">Category:</span> {project.category}
                </p>
                <p className="text-sm text-gray-500">
                  <span className="font-medium">Start Date:</span> {project.startDate}
                </p>
                {project.endDate && (
                  <p className="text-sm text-gray-500">
                    <span className="font-medium">End Date:</span> {project.endDate}
                  </p>
                )}
                <p className="text-sm text-gray-500">
                  <span className="font-medium">Selling Price:</span> <span className="font-semibold text-indigo-600">{project.sellingPrice}</span>
                </p>
              </div>

              <div className="mb-4">
                <p className="text-sm font-medium text-gray-700 mb-2">Technologies:</p>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-2">
                <button className="flex-1 bg-indigo-600 text-white py-2 px-3 rounded text-sm hover:bg-indigo-700 transition-colors">
                  Edit
                </button>
                <button className="flex-1 bg-gray-600 text-white py-2 px-3 rounded text-sm hover:bg-gray-700 transition-colors">
                  Delete
                </button>
              </div>

              {/* Status Change Dropdown */}
              <div className="mt-3">
                <select
                  value={project.status}
                  onChange={(e) => handleProjectStatusChange(project.id, e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="Starting">Starting</option>
                  <option value="Ongoing">Ongoing</option>
                  <option value="Pending">Pending</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
