'use client';

import { useState } from 'react';
import Navigation from '../../components/Navigation';

export default function StudentDashboard() {
  // State management for different sections
  const [activeSection, setActiveSection] = useState('overview');
  const [isEditingProfile, setIsEditingProfile] = useState(false);

  // Student profile data
  const [profileData, setProfileData] = useState({
    studentId: 'STU001',
    name: 'John Doe',
    schoolName: 'University of Technology',
    fieldOfStudy: 'Computer Science',
    email: 'john.doe@university.edu',
    phone: '+1 (555) 123-4567',
    bio: 'Passionate computer science student with a focus on AI and machine learning.',
    skills: ['JavaScript', 'Python', 'React', 'Node.js', 'Machine Learning'],
    graduationYear: '2025'
  });

  // Student projects data with pricing in XAF
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'AI-Powered Learning Assistant',
      description: 'An intelligent tutoring system that adapts to individual learning styles',
      status: 'Completed',
      category: 'Education Technology',
      startDate: '2024-01-15',
      endDate: '2024-03-20',
      technologies: ['Python', 'TensorFlow', 'React', 'Node.js'],
      sellingPrice: '2,500,000 XAF',
      views: 1200,
      likes: 45,
      investors: 3
    },
    {
      id: 2,
      title: 'Sustainable Energy Tracker',
      description: 'IoT device for monitoring and optimizing home energy consumption',
      status: 'Ongoing',
      category: 'Green Technology',
      startDate: '2024-02-01',
      endDate: null,
      technologies: ['Arduino', 'C++', 'IoT', 'Data Analytics'],
      sellingPrice: '1,800,000 XAF',
      views: 890,
      likes: 32,
      investors: 1
    },
    {
      id: 3,
      title: 'Blockchain Voting System',
      description: 'Secure and transparent voting platform using blockchain technology',
      status: 'Pending',
      category: 'Blockchain',
      startDate: '2024-04-01',
      endDate: null,
      technologies: ['Solidity', 'Web3.js', 'React', 'Ethereum'],
      sellingPrice: '3,200,000 XAF',
      views: 650,
      likes: 28,
      investors: 0
    }
  ]);

  // Opportunities data
  const [opportunities] = useState([
    {
      id: 1,
      title: 'AI Startup Investment Opportunity',
      description: 'Looking for innovative AI projects with commercial potential',
      investor: 'TechVentures Inc.',
      amount: '$50,000 - $100,000',
      deadline: '2024-06-15',
      status: 'pending'
    },
    {
      id: 2,
      title: 'Green Technology Funding',
      description: 'Supporting sustainable technology solutions',
      investor: 'EcoFund Capital',
      amount: '$25,000 - $75,000',
      deadline: '2024-05-30',
      status: 'pending'
    }
  ]);

  // Discussions data
  const [discussions] = useState([
    {
      id: 1,
      title: 'Best Practices for AI Project Development',
      author: 'Dr. Sarah Johnson',
      replies: 12,
      lastActivity: '2 hours ago',
      category: 'AI/ML'
    },
    {
      id: 2,
      title: 'Funding Strategies for Student Startups',
      author: 'Mike Chen',
      replies: 8,
      lastActivity: '1 day ago',
      category: 'Funding'
    }
  ]);

  // Handle profile update
  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditingProfile(false);
    console.log('Profile updated:', profileData);
  };

  // Handle project status change
  const handleProjectStatusChange = (projectId: number, newStatus: string) => {
    setProjects(projects.map(project => 
      project.id === projectId ? { ...project, status: newStatus } : project
    ));
  };

  // Handle opportunity response
  const handleOpportunityResponse = (opportunityId: number, response: 'accept' | 'refuse') => {
    console.log(`Opportunity ${opportunityId} ${response}d`);
    // Add logic to handle opportunity response
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navigation userType="student" />
      
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg mt-16">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-indigo-600 mb-8">VASP Student</h2>
          
          {/* Navigation Menu */}
          <nav className="space-y-2">
            <button
              onClick={() => setActiveSection('overview')}
              className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                activeSection === 'overview'
                  ? 'bg-indigo-100 text-indigo-700 font-medium'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              📊 Overview
            </button>
            <button
              onClick={() => setActiveSection('profile')}
              className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                activeSection === 'profile'
                  ? 'bg-indigo-100 text-indigo-700 font-medium'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              👤 Profile Settings
            </button>
            <button
              onClick={() => setActiveSection('projects')}
              className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                activeSection === 'projects'
                  ? 'bg-indigo-100 text-indigo-700 font-medium'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              📁 Projects
            </button>
            <button
              onClick={() => setActiveSection('opportunities')}
              className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                activeSection === 'opportunities'
                  ? 'bg-indigo-100 text-indigo-700 font-medium'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              💼 View Opportunities
            </button>
            <button
              onClick={() => setActiveSection('discussions')}
              className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                activeSection === 'discussions'
                  ? 'bg-indigo-100 text-indigo-700 font-medium'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              💬 Discussions
            </button>
            <button
              onClick={() => setActiveSection('settings')}
              className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                activeSection === 'settings'
                  ? 'bg-indigo-100 text-indigo-700 font-medium'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              ⚙️ General Settings
            </button>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8 mt-16">
        {/* Overview Section */}
        {activeSection === 'overview' && (
          <div className="max-w-6xl">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Dashboard Overview</h3>
              
              {/* Statistics Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center">
                    <div className="p-3 rounded-full bg-indigo-100">
                      <svg className="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-500">Total Projects</p>
                      <p className="text-2xl font-semibold text-gray-900">{projects.length}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center">
                    <div className="p-3 rounded-full bg-green-100">
                      <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-500">Completed Projects</p>
                      <p className="text-2xl font-semibold text-gray-900">
                        {projects.filter(p => p.status === 'Completed').length}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center">
                    <div className="p-3 rounded-full bg-yellow-100">
                      <svg className="h-6 w-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-500">Total Value</p>
                      <p className="text-2xl font-semibold text-gray-900">
                        {projects.reduce((sum, p) => sum + parseInt(p.sellingPrice.replace(/[^0-9]/g, '')), 0).toLocaleString()} XAF
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center">
                    <div className="p-3 rounded-full bg-blue-100">
                      <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-500">Total Views</p>
                      <p className="text-2xl font-semibold text-gray-900">
                        {projects.reduce((sum, p) => sum + p.views, 0).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h4>
                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-3"></div>
                    <div className="flex-1">
                      <p className="text-gray-900">AI-Powered Learning Assistant project completed</p>
                      <p className="text-sm text-gray-500">2 days ago</p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <div className="w-3 h-3 rounded-full bg-blue-500 mr-3"></div>
                    <div className="flex-1">
                      <p className="text-gray-900">New investment opportunity received</p>
                      <p className="text-sm text-gray-500">1 week ago</p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <div className="w-3 h-3 rounded-full bg-yellow-500 mr-3"></div>
                    <div className="flex-1">
                      <p className="text-gray-900">Blockchain Voting System project submitted for review</p>
                      <p className="text-sm text-gray-500">2 weeks ago</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <button
                    onClick={() => setActiveSection('projects')}
                    className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-indigo-500 hover:bg-indigo-50 transition-colors text-center"
                  >
                    <div className="text-2xl mb-2">➕</div>
                    <p className="text-gray-700 font-medium">Add New Project</p>
                  </button>
                  <button
                    onClick={() => setActiveSection('opportunities')}
                    className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-indigo-500 hover:bg-indigo-50 transition-colors text-center"
                  >
                    <div className="text-2xl mb-2">💼</div>
                    <p className="text-gray-700 font-medium">View Opportunities</p>
                  </button>
                  <button
                    onClick={() => setActiveSection('discussions')}
                    className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-indigo-500 hover:bg-indigo-50 transition-colors text-center"
                  >
                    <div className="text-2xl mb-2">💬</div>
                    <p className="text-gray-700 font-medium">Join Discussions</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Profile Settings Section */}
        {activeSection === 'profile' && (
          <div className="max-w-4xl">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Profile Settings</h3>
                <button
                  onClick={() => setIsEditingProfile(!isEditingProfile)}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  {isEditingProfile ? 'Cancel' : 'Edit Profile'}
                </button>
              </div>

              {isEditingProfile ? (
                // Edit Profile Form
                <form onSubmit={handleProfileUpdate} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Student ID
                      </label>
                      <input
                        type="text"
                        value={profileData.studentId}
                        onChange={(e) => setProfileData({...profileData, studentId: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={profileData.name}
                        onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        School Name
                      </label>
                      <input
                        type="text"
                        value={profileData.schoolName}
                        onChange={(e) => setProfileData({...profileData, schoolName: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Field of Study
                      </label>
                      <input
                        type="text"
                        value={profileData.fieldOfStudy}
                        onChange={(e) => setProfileData({...profileData, fieldOfStudy: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        value={profileData.email}
                        onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={profileData.phone}
                        onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Graduation Year
                      </label>
                      <input
                        type="number"
                        value={profileData.graduationYear}
                        onChange={(e) => setProfileData({...profileData, graduationYear: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Bio
                    </label>
                    <textarea
                      value={profileData.bio}
                      onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Skills (comma-separated)
                    </label>
                    <input
                      type="text"
                      value={profileData.skills.join(', ')}
                      onChange={(e) => setProfileData({...profileData, skills: e.target.value.split(', ').filter(s => s.trim())})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="JavaScript, Python, React, Node.js"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    Save Changes
                  </button>
                </form>
              ) : (
                // View Profile
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-500">Student ID</label>
                      <p className="text-lg text-gray-900">{profileData.studentId}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-500">Full Name</label>
                      <p className="text-lg text-gray-900">{profileData.name}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-500">School Name</label>
                      <p className="text-lg text-gray-900">{profileData.schoolName}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-500">Field of Study</label>
                      <p className="text-lg text-gray-900">{profileData.fieldOfStudy}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-500">Email</label>
                      <p className="text-lg text-gray-900">{profileData.email}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-500">Phone</label>
                      <p className="text-lg text-gray-900">{profileData.phone}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-500">Graduation Year</label>
                      <p className="text-lg text-gray-900">{profileData.graduationYear}</p>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500">Bio</label>
                    <p className="text-lg text-gray-900">{profileData.bio}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500">Skills</label>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {profileData.skills.map((skill, index) => (
                        <span key={index} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Projects Section */}
        {activeSection === 'projects' && (
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
        )}

        {/* Opportunities Section */}
        {activeSection === 'opportunities' && (
          <div className="max-w-4xl">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Available Opportunities</h3>
              
              <div className="space-y-6">
                {opportunities.map((opportunity) => (
                  <div key={opportunity.id} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-xl font-semibold text-gray-900">{opportunity.title}</h4>
                      <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                        {opportunity.status}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{opportunity.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div>
                        <p className="text-sm font-medium text-gray-500">Investor</p>
                        <p className="text-gray-900">{opportunity.investor}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Amount</p>
                        <p className="text-gray-900">{opportunity.amount}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Deadline</p>
                        <p className="text-gray-900">{opportunity.deadline}</p>
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <button
                        onClick={() => handleOpportunityResponse(opportunity.id, 'accept')}
                        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                      >
                        Accept
                      </button>
                      <button
                        onClick={() => handleOpportunityResponse(opportunity.id, 'refuse')}
                        className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                      >
                        Refuse
                      </button>
                      <button className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Discussions Section */}
        {activeSection === 'discussions' && (
          <div className="max-w-4xl">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Discussions</h3>
              
              <div className="space-y-4">
                {discussions.map((discussion) => (
                  <div key={discussion.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">{discussion.title}</h4>
                      <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm">
                        {discussion.category}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <p>By {discussion.author}</p>
                      <div className="flex space-x-4">
                        <span>{discussion.replies} replies</span>
                        <span>{discussion.lastActivity}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* General Settings Section */}
        {activeSection === 'settings' && (
          <div className="max-w-4xl">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">General Settings</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Notifications</h4>
                  <div className="space-y-3">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-3" defaultChecked />
                      <span>Email notifications for new opportunities</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-3" defaultChecked />
                      <span>Email notifications for discussion updates</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-3" />
                      <span>SMS notifications for urgent updates</span>
                    </label>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Privacy</h4>
                  <div className="space-y-3">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-3" defaultChecked />
                      <span>Make profile visible to investors</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-3" defaultChecked />
                      <span>Show projects in public listings</span>
                    </label>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Account</h4>
                  <div className="space-y-3">
                    <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                      Change Password
                    </button>
                    <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                      Delete Account
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
