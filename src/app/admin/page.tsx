'use client';

import { useState } from 'react';
import Navigation from '../../components/Navigation';

export default function AdminDashboard() {
  // State management for different sections
  const [activeSection, setActiveSection] = useState('overview');

  // System statistics
  const [stats] = useState({
    totalUsers: 1250,
    totalStudents: 850,
    totalInvestors: 400,
    totalProjects: 320,
    activeProjects: 180,
    completedProjects: 95,
    totalInvestments: 45,
    totalInvestmentAmount: '$2.5M',
    pendingApprovals: 12,
    systemUptime: '99.9%'
  });

  // Recent activities
  const [recentActivities] = useState([
    {
      id: 1,
      type: 'user_registration',
      message: 'New student registered: John Doe',
      timestamp: '2 minutes ago',
      status: 'success'
    },
    {
      id: 2,
      type: 'project_submission',
      message: 'New project submitted: AI Learning Assistant',
      timestamp: '15 minutes ago',
      status: 'pending'
    },
    {
      id: 3,
      type: 'investment',
      message: 'Investment made: $25,000 in VR Medical Platform',
      timestamp: '1 hour ago',
      status: 'success'
    },
    {
      id: 4,
      type: 'user_verification',
      message: 'Investor verification completed: Jane Smith',
      timestamp: '2 hours ago',
      status: 'success'
    }
  ]);

  // Users data
  const [users] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@university.edu',
      type: 'Student',
      status: 'Active',
      registrationDate: '2024-01-15',
      lastLogin: '2024-04-10',
      projects: 3
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@techventures.com',
      type: 'Investor',
      status: 'Active',
      registrationDate: '2024-01-10',
      lastLogin: '2024-04-09',
      investments: 5
    },
    {
      id: 3,
      name: 'Mike Chen',
      email: 'mike.chen@cryptouni.edu',
      type: 'Student',
      status: 'Pending',
      registrationDate: '2024-04-08',
      lastLogin: 'Never',
      projects: 0
    }
  ]);

  // Projects data
  const [projects] = useState([
    {
      id: 1,
      title: 'AI-Powered Learning Assistant',
      student: 'John Doe',
      status: 'Approved',
      category: 'Education Technology',
      submissionDate: '2024-03-15',
      fundingGoal: '$75,000',
      currentFunding: '$45,000',
      investors: 3
    },
    {
      id: 2,
      title: 'Blockchain Voting System',
      student: 'Mike Chen',
      status: 'Pending Review',
      category: 'Blockchain',
      submissionDate: '2024-04-08',
      fundingGoal: '$100,000',
      currentFunding: '$0',
      investors: 0
    },
    {
      id: 3,
      title: 'VR Medical Training Platform',
      student: 'Dr. Emily Wilson',
      status: 'Approved',
      category: 'Healthcare Technology',
      submissionDate: '2024-02-20',
      fundingGoal: '$150,000',
      currentFunding: '$75,000',
      investors: 2
    }
  ]);

  // Handle user status change
  const handleUserStatusChange = (userId: number, newStatus: string) => {
    console.log(`User ${userId} status changed to ${newStatus}`);
    // Add logic to handle user status change
  };

  // Handle project approval
  const handleProjectApproval = (projectId: number, approved: boolean) => {
    console.log(`Project ${projectId} ${approved ? 'approved' : 'rejected'}`);
    // Add logic to handle project approval
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navigation userType="admin" />
      
      {/* Section Navigation */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveSection('overview')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                activeSection === 'overview'
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveSection('users')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                activeSection === 'users'
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Users
            </button>
            <button
              onClick={() => setActiveSection('projects')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                activeSection === 'projects'
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => setActiveSection('investments')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                activeSection === 'investments'
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Investments
            </button>
            <button
              onClick={() => setActiveSection('settings')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                activeSection === 'settings'
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Settings
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Overview Section */}
        {activeSection === 'overview' && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">System Overview</h2>
            
            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-indigo-100">
                    <svg className="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">Total Users</p>
                    <p className="text-2xl font-semibold text-gray-900">{stats.totalUsers}</p>
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
                    <p className="text-sm font-medium text-gray-500">Total Projects</p>
                    <p className="text-2xl font-semibold text-gray-900">{stats.totalProjects}</p>
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
                    <p className="text-sm font-medium text-gray-500">Total Investments</p>
                    <p className="text-2xl font-semibold text-gray-900">{stats.totalInvestmentAmount}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-red-100">
                    <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">Pending Approvals</p>
                    <p className="text-2xl font-semibold text-gray-900">{stats.pendingApprovals}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activities */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activities</h3>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <div className={`w-3 h-3 rounded-full mr-3 ${
                        activity.status === 'success' ? 'bg-green-500' : 'bg-yellow-500'
                      }`}></div>
                      <p className="text-gray-900">{activity.message}</p>
                    </div>
                    <p className="text-sm text-gray-500">{activity.timestamp}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Users Section */}
        {activeSection === 'users' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-gray-900">User Management</h2>
              <div className="flex space-x-4">
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                  Export Users
                </button>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                  Add User
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      User
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Registration Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Last Login
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{user.name}</div>
                          <div className="text-sm text-gray-500">{user.email}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          user.type === 'Student' 
                            ? 'bg-blue-100 text-blue-800' 
                            : 'bg-green-100 text-green-800'
                        }`}>
                          {user.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          user.status === 'Active' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {user.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {user.registrationDate}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {user.lastLogin}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button className="text-indigo-600 hover:text-indigo-900">
                            Edit
                          </button>
                          <button 
                            onClick={() => handleUserStatusChange(user.id, user.status === 'Active' ? 'Suspended' : 'Active')}
                            className="text-yellow-600 hover:text-yellow-900"
                          >
                            {user.status === 'Active' ? 'Suspend' : 'Activate'}
                          </button>
                          <button className="text-red-600 hover:text-red-900">
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Projects Section */}
        {activeSection === 'projects' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-gray-900">Project Management</h2>
              <div className="flex space-x-4">
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                  Export Projects
                </button>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                  Add Project
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Project
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Student
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Funding
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {projects.map((project) => (
                    <tr key={project.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{project.title}</div>
                          <div className="text-sm text-gray-500">Submitted: {project.submissionDate}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {project.student}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          project.status === 'Approved' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {project.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {project.category}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {project.currentFunding} / {project.fundingGoal}
                        </div>
                        <div className="text-sm text-gray-500">
                          {project.investors} investors
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button className="text-indigo-600 hover:text-indigo-900">
                            View
                          </button>
                          {project.status === 'Pending Review' && (
                            <>
                              <button 
                                onClick={() => handleProjectApproval(project.id, true)}
                                className="text-green-600 hover:text-green-900"
                              >
                                Approve
                              </button>
                              <button 
                                onClick={() => handleProjectApproval(project.id, false)}
                                className="text-red-600 hover:text-red-900"
                              >
                                Reject
                              </button>
                            </>
                          )}
                          <button className="text-red-600 hover:text-red-900">
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Investments Section */}
        {activeSection === 'investments' && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Investment Management</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Investment Statistics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Investments</span>
                    <span className="font-semibold text-gray-900">{stats.totalInvestments}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Amount</span>
                    <span className="font-semibold text-gray-900">{stats.totalInvestmentAmount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Average Investment</span>
                    <span className="font-semibold text-gray-900">$55,556</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Success Rate</span>
                    <span className="font-semibold text-gray-900">78%</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Investments</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">AI Learning Assistant</p>
                      <p className="text-sm text-gray-500">by John Doe</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">$25,000</p>
                      <p className="text-sm text-gray-500">2 days ago</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">VR Medical Platform</p>
                      <p className="text-sm text-gray-500">by Dr. Emily Wilson</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">$50,000</p>
                      <p className="text-sm text-gray-500">1 week ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Settings Section */}
        {activeSection === 'settings' && (
          <div className="max-w-4xl">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">System Settings</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">General Settings</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Site Name
                      </label>
                      <input
                        type="text"
                        defaultValue="VASP - Venture & Student Platform"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Site Description
                      </label>
                      <textarea
                        rows={3}
                        defaultValue="Connecting innovative students with forward-thinking investors"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">User Registration</h3>
                  <div className="space-y-3">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-3" defaultChecked />
                      <span>Allow student registration</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-3" defaultChecked />
                      <span>Allow investor registration</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-3" />
                      <span>Require email verification</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-3" />
                      <span>Require admin approval for new users</span>
                    </label>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Settings</h3>
                  <div className="space-y-3">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-3" defaultChecked />
                      <span>Allow project submissions</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-3" defaultChecked />
                      <span>Require project approval before public listing</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-3" />
                      <span>Allow anonymous project viewing</span>
                    </label>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">System Maintenance</h3>
                  <div className="space-y-3">
                    <button className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition-colors">
                      Clear Cache
                    </button>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      Backup Database
                    </button>
                    <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                      System Restart
                    </button>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                    Save Settings
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
