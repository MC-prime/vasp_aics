'use client';

import { useState } from 'react';
import Navigation from '../../components/Navigation';

export default function InvestorDashboard() {
  // State management for different sections
  const [activeSection, setActiveSection] = useState('discovery');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Investor profile data
  const [profileData, setProfileData] = useState({
    name: 'Jane Smith',
    company: 'TechVentures Inc.',
    email: 'jane.smith@techventures.com',
    phone: '+1 (555) 987-6543',
    bio: 'Venture capitalist with 10+ years of experience in technology investments.',
    investmentFocus: ['AI/ML', 'Green Technology', 'Blockchain', 'EdTech'],
    totalInvestments: 25,
    totalAmount: '$2.5M'
  });

  // Projects data for discovery and investment with XAF pricing
  const [projects] = useState([
    {
      id: 1,
      title: 'AI-Powered Learning Assistant',
      description: 'An intelligent tutoring system that adapts to individual learning styles',
      student: 'John Doe',
      school: 'University of Technology',
      category: 'Education Technology',
      status: 'Completed',
      fundingGoal: '45,000,000 XAF',
      currentFunding: '27,000,000 XAF',
      sellingPrice: '2,500,000 XAF',
      investors: 3,
      technologies: ['Python', 'TensorFlow', 'React', 'Node.js'],
      timeline: '6 months',
      marketSize: '1,500,000,000,000 XAF',
      competitiveAdvantage: 'Advanced AI algorithms with 95% accuracy rate'
    },
    {
      id: 2,
      title: 'Sustainable Energy Tracker',
      description: 'IoT device for monitoring and optimizing home energy consumption',
      student: 'Sarah Johnson',
      school: 'Green Tech University',
      category: 'Green Technology',
      status: 'Ongoing',
      fundingGoal: '30,000,000 XAF',
      currentFunding: '12,000,000 XAF',
      sellingPrice: '1,800,000 XAF',
      investors: 1,
      technologies: ['Arduino', 'C++', 'IoT', 'Data Analytics'],
      timeline: '4 months',
      marketSize: '1,080,000,000,000 XAF',
      competitiveAdvantage: 'Real-time energy optimization with 30% savings'
    },
    {
      id: 3,
      title: 'Blockchain Voting System',
      description: 'Secure and transparent voting platform using blockchain technology',
      student: 'Mike Chen',
      school: 'Crypto University',
      category: 'Blockchain',
      status: 'Starting',
      fundingGoal: '60,000,000 XAF',
      currentFunding: '0 XAF',
      sellingPrice: '3,200,000 XAF',
      investors: 0,
      technologies: ['Solidity', 'Web3.js', 'React', 'Ethereum'],
      timeline: '8 months',
      marketSize: '300,000,000,000 XAF',
      competitiveAdvantage: 'First fully decentralized voting solution'
    },
    {
      id: 4,
      title: 'VR Medical Training Platform',
      description: 'Virtual reality platform for medical students to practice surgeries',
      student: 'Dr. Emily Wilson',
      school: 'Medical University',
      category: 'Healthcare Technology',
      status: 'Ongoing',
      fundingGoal: '90,000,000 XAF',
      currentFunding: '45,000,000 XAF',
      sellingPrice: '4,500,000 XAF',
      investors: 2,
      technologies: ['Unity', 'C#', 'VR', 'Machine Learning'],
      timeline: '12 months',
      marketSize: '1,920,000,000,000 XAF',
      competitiveAdvantage: 'Haptic feedback technology for realistic training'
    }
  ]);

  // Investment portfolio with XAF currency
  const [portfolio] = useState([
    {
      id: 1,
      projectTitle: 'AI-Powered Learning Assistant',
      student: 'John Doe',
      investmentAmount: '15,000,000 XAF',
      investmentDate: '2024-01-15',
      currentValue: '21,000,000 XAF',
      return: '+40%',
      status: 'Active'
    },
    {
      id: 2,
      projectTitle: 'VR Medical Training Platform',
      student: 'Dr. Emily Wilson',
      investmentAmount: '30,000,000 XAF',
      investmentDate: '2024-02-01',
      currentValue: '36,000,000 XAF',
      return: '+20%',
      status: 'Active'
    }
  ]);

  // Filter projects based on search and category
  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.student.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Handle investment action
  const handleInvestment = (projectId: number) => {
    console.log(`Investing in project ${projectId}`);
    // Add investment logic here
  };

  // Handle project purchase action
  const handlePurchase = (projectId: number) => {
    console.log(`Purchasing project ${projectId}`);
    // Add purchase logic here
  };

  // Handle project details view
  const handleViewDetails = (projectId: number) => {
    console.log(`Viewing details for project ${projectId}`);
    // Add project details logic here
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navigation userType="investor" />
      
      {/* Search Bar */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-center">
            <div className="w-full max-w-2xl">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search projects, students, or technologies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Navigation */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveSection('discovery')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                activeSection === 'discovery'
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Discovery
            </button>
            <button
              onClick={() => setActiveSection('projects')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                activeSection === 'projects'
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Project List
            </button>
            <button
              onClick={() => setActiveSection('invest')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                activeSection === 'invest'
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Invest
            </button>
            <button
              onClick={() => setActiveSection('profile')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                activeSection === 'profile'
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Profile
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
        {/* Discovery Section */}
        {activeSection === 'discovery' && (
          <div>
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Discover Projects</h2>
              
              {/* Category Filter */}
              <div className="flex space-x-4 mb-6">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === 'all'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  All Categories
                </button>
                {['Education Technology', 'Green Technology', 'Blockchain', 'Healthcare Technology'].map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <div key={project.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                      project.status === 'Ongoing' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-4">{project.description}</p>

                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-gray-500">
                      <span className="font-medium">Student:</span> {project.student}
                    </p>
                    <p className="text-sm text-gray-500">
                      <span className="font-medium">School:</span> {project.school}
                    </p>
                    <p className="text-sm text-gray-500">
                      <span className="font-medium">Category:</span> {project.category}
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-500">Funding Goal</p>
                        <p className="font-semibold text-gray-900">{project.fundingGoal}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Current Funding</p>
                        <p className="font-semibold text-gray-900">{project.currentFunding}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Investors</p>
                        <p className="font-semibold text-gray-900">{project.investors}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Timeline</p>
                        <p className="font-semibold text-gray-900">{project.timeline}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleViewDetails(project.id)}
                        className="flex-1 bg-indigo-600 text-white py-2 px-3 rounded text-sm hover:bg-indigo-700 transition-colors"
                      >
                        View Details
                      </button>
                      <button
                        onClick={() => handleInvestment(project.id)}
                        className="flex-1 bg-green-600 text-white py-2 px-3 rounded text-sm hover:bg-green-700 transition-colors"
                      >
                        Invest
                      </button>
                    </div>
                    <button
                      onClick={() => handlePurchase(project.id)}
                      className="w-full bg-purple-600 text-white py-2 px-3 rounded text-sm hover:bg-purple-700 transition-colors"
                    >
                      Buy Complete Project - {project.sellingPrice}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Project List Section */}
        {activeSection === 'projects' && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">All Projects</h2>
            
            {/* Projects grouped by category */}
            {['Education Technology', 'Green Technology', 'Blockchain', 'Healthcare Technology'].map((category) => {
              const categoryProjects = projects.filter(project => project.category === category);
              if (categoryProjects.length === 0) return null;

              return (
                <div key={category} className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{category}</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                    {categoryProjects.map((project) => (
                      <div key={project.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h4>
                        <p className="text-gray-600 mb-4">{project.description}</p>
                        
                        <div className="space-y-2 mb-4">
                          <p className="text-sm text-gray-500">
                            <span className="font-medium">Student:</span> {project.student}
                          </p>
                          <p className="text-sm text-gray-500">
                            <span className="font-medium">Status:</span> {project.status}
                          </p>
                          <p className="text-sm text-gray-500">
                            <span className="font-medium">Funding:</span> {project.currentFunding} / {project.fundingGoal}
                          </p>
                        </div>

                        <button
                          onClick={() => handleViewDetails(project.id)}
                          className="w-full bg-indigo-600 text-white py-2 px-3 rounded text-sm hover:bg-indigo-700 transition-colors"
                        >
                          View Project Details
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Invest Section */}
        {activeSection === 'invest' && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Investment Opportunities</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {projects.map((project) => (
                <div key={project.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-4">{project.description}</p>

                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">Market Size</span>
                        <span className="text-sm font-semibold text-gray-900">{project.marketSize}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">Funding Goal</span>
                        <span className="text-sm font-semibold text-gray-900">{project.fundingGoal}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">Current Funding</span>
                        <span className="text-sm font-semibold text-gray-900">{project.currentFunding}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">Timeline</span>
                        <span className="text-sm font-semibold text-gray-900">{project.timeline}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">Competitive Advantage</p>
                    <p className="text-sm text-gray-600">{project.competitiveAdvantage}</p>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">Technologies</p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleViewDetails(project.id)}
                        className="flex-1 bg-gray-600 text-white py-2 px-3 rounded text-sm hover:bg-gray-700 transition-colors"
                      >
                        Details
                      </button>
                      <button
                        onClick={() => handleInvestment(project.id)}
                        className="flex-1 bg-green-600 text-white py-2 px-3 rounded text-sm hover:bg-green-700 transition-colors"
                      >
                        Invest Now
                      </button>
                    </div>
                    <button
                      onClick={() => handlePurchase(project.id)}
                      className="w-full bg-purple-600 text-white py-2 px-3 rounded text-sm hover:bg-purple-700 transition-colors"
                    >
                      Buy Complete Project - {project.sellingPrice}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Profile Section */}
        {activeSection === 'profile' && (
          <div className="max-w-4xl">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Investor Profile</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-500">Name</label>
                  <p className="text-lg text-gray-900">{profileData.name}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500">Company</label>
                  <p className="text-lg text-gray-900">{profileData.company}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500">Email</label>
                  <p className="text-lg text-gray-900">{profileData.email}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500">Phone</label>
                  <p className="text-lg text-gray-900">{profileData.phone}</p>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-500">Bio</label>
                  <p className="text-lg text-gray-900">{profileData.bio}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500">Investment Focus</label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {profileData.investmentFocus.map((focus, index) => (
                      <span key={index} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                        {focus}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500">Investment Stats</label>
                  <div className="mt-2 space-y-1">
                    <p className="text-sm text-gray-900">Total Investments: {profileData.totalInvestments}</p>
                    <p className="text-sm text-gray-900">Total Amount: {profileData.totalAmount}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Investment Portfolio</h3>
                <div className="space-y-4">
                  {portfolio.map((investment) => (
                    <div key={investment.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-gray-900">{investment.projectTitle}</h4>
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                          {investment.return}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <p className="text-gray-500">Investment Amount</p>
                          <p className="font-semibold text-gray-900">{investment.investmentAmount}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Current Value</p>
                          <p className="font-semibold text-gray-900">{investment.currentValue}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Investment Date</p>
                          <p className="font-semibold text-gray-900">{investment.investmentDate}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Status</p>
                          <p className="font-semibold text-gray-900">{investment.status}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Settings Section */}
        {activeSection === 'settings' && (
          <div className="max-w-4xl">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Settings</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Notifications</h3>
                  <div className="space-y-3">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-3" defaultChecked />
                      <span>Email notifications for new projects</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-3" defaultChecked />
                      <span>Email notifications for project updates</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-3" />
                      <span>SMS notifications for urgent updates</span>
                    </label>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Investment Preferences</h3>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Minimum Investment Amount
                      </label>
                      <input
                        type="number"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="10000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Maximum Investment Amount
                      </label>
                      <input
                        type="number"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="100000"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Account</h3>
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
