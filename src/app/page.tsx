'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navigation from '../components/Navigation';

export default function LandingPage() {
  // State management for forms and UI
  const [activeTab, setActiveTab] = useState('student'); // 'student' or 'investor'
  const [isLogin, setIsLogin] = useState(false); // false for registration, true for login
  const [showModal, setShowModal] = useState(false); // controls modal visibility
  const [modalType, setModalType] = useState(''); // 'register' or 'login'

  // Student form state
  const [studentForm, setStudentForm] = useState({
    studentId: '',
    schoolName: '',
    fieldOfStudy: '',
    password: '',
    confirmPassword: ''
  });

  // Investor form state
  const [investorForm, setInvestorForm] = useState({
    name: '',
    company: '',
    password: '',
    confirmPassword: '',
    phoneOrEmail: ''
  });

  // Login form state
  const [loginForm, setLoginForm] = useState({
    studentId: '',
    password: ''
  });

  // Investor login form state
  const [investorLoginForm, setInvestorLoginForm] = useState({
    name: '',
    password: ''
  });

  // Handle modal opening
  const openModal = (type: string) => {
    setModalType(type);
    setShowModal(true);
    setIsLogin(type === 'login');
  };

  // Handle modal closing
  const closeModal = () => {
    setShowModal(false);
    setModalType('');
    // Reset forms when closing modal
    setStudentForm({
      studentId: '',
      schoolName: '',
      fieldOfStudy: '',
      password: '',
      confirmPassword: ''
    });
    setInvestorForm({
      name: '',
      company: '',
      password: '',
      confirmPassword: '',
      phoneOrEmail: ''
    });
    setLoginForm({
      studentId: '',
      password: ''
    });
    setInvestorLoginForm({
      name: '',
      password: ''
    });
  };

  // Handle form submissions
  const handleStudentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Student registration:', studentForm);
    // Add registration logic here
    closeModal();
  };

  const handleInvestorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Investor registration:', investorForm);
    // Add registration logic here
    closeModal();
  };

  const handleStudentLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Student login:', loginForm);
    // Add login logic here
    closeModal();
  };

  const handleInvestorLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Investor login:', investorLoginForm);
    // Add login logic here
    closeModal();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <Navigation userType="visitor" />

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Valorizing Academic Student Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            A platform where students can showcase their innovative projects and investors can discover 
            the next big opportunity. Join our community today!
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              onClick={() => openModal('register')}
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              Register Now
            </button>
            <button
              onClick={() => openModal('login')}
              className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-600 hover:text-white transition-colors"
            >
              Login
            </button>
            <Link
              href="/visitor"
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Browse Projects
            </Link>
          </div>
        </div>

        {/* Featured Projects Section */}
        <section id="projects" className="mt-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Featured Student Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Preview Cards with Images */}
            {[
              {
                title: "AI-Powered Learning Assistant",
                description: "An intelligent tutoring system that adapts to individual learning styles and provides personalized learning experiences.",
                status: "Completed",
                category: "Education Technology",
                price: "2,500,000 XAF",
                image: "🎓",
                student: "John Doe",
                school: "University of Technology"
              },
              {
                title: "Sustainable Energy Tracker",
                description: "IoT device for monitoring and optimizing home energy consumption with real-time analytics and recommendations.",
                status: "Ongoing",
                category: "Green Technology",
                price: "1,800,000 XAF",
                image: "🌱",
                student: "Sarah Johnson",
                school: "Green Tech University"
              },
              {
                title: "Blockchain Voting System",
                description: "Secure and transparent voting platform using blockchain technology to ensure election integrity.",
                status: "Starting",
                category: "Blockchain",
                price: "3,200,000 XAF",
                image: "⛓️",
                student: "Mike Chen",
                school: "Crypto University"
              }
            ].map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                {/* Project Image */}
                <div className="text-center mb-4">
                  <div className="text-6xl mb-2">{project.image}</div>
                  <div className="text-sm text-gray-500">{project.category}</div>
                </div>
                
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-semibold text-gray-900">{project.title}</h4>
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
                    <span className="font-medium">Price:</span> <span className="font-semibold text-indigo-600">{project.price}</span>
                  </p>
                </div>
                
                <div className="flex space-x-2">
                  <button className="flex-1 bg-indigo-600 text-white py-2 px-3 rounded text-sm hover:bg-indigo-700 transition-colors">
                    View Details
                  </button>
                  <button className="flex-1 bg-green-600 text-white py-2 px-3 rounded text-sm hover:bg-green-700 transition-colors">
                    Contact Student
                  </button>
                </div>
              </div>
            ))}
        </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4">VASP</h4>
              <p className="text-gray-400">
                Connecting innovative students with forward-thinking investors to build the future together.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">How It Works</a></li>
                <li><a href="#" className="hover:text-white">Success Stories</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 VASP. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Registration/Login Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {/* Modal Header */}
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  {modalType === 'register' ? 'Register' : 'Login'}
                </h3>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>

              {/* Tab Navigation */}
              <div className="flex justify-center mb-6">
                <div className="flex bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => setActiveTab('student')}
                    className={`px-6 py-2 rounded-md transition-colors ${
                      activeTab === 'student'
                        ? 'bg-white text-indigo-600 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Student
                  </button>
                  <button
                    onClick={() => setActiveTab('investor')}
                    className={`px-6 py-2 rounded-md transition-colors ${
                      activeTab === 'investor'
                        ? 'bg-white text-indigo-600 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Investor
                  </button>
                </div>
              </div>

              {/* Login/Register Toggle */}
              <div className="flex justify-center mb-6">
                <div className="flex bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => setIsLogin(false)}
                    className={`px-4 py-2 rounded-md transition-colors ${
                      !isLogin
                        ? 'bg-white text-indigo-600 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Register
                  </button>
                  <button
                    onClick={() => setIsLogin(true)}
                    className={`px-4 py-2 rounded-md transition-colors ${
                      isLogin
                        ? 'bg-white text-indigo-600 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Login
                  </button>
                </div>
              </div>

              {/* Student Forms */}
              {activeTab === 'student' && (
                <div>
                  {!isLogin ? (
                    // Student Registration Form
                    <form onSubmit={handleStudentSubmit} className="space-y-6">
                      <h4 className="text-xl font-semibold text-center text-gray-900 mb-6">
                        Student Registration
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Student ID *
                          </label>
                          <input
                            type="text"
                            required
                            value={studentForm.studentId}
                            onChange={(e) => setStudentForm({...studentForm, studentId: e.target.value})}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Enter your student ID"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            School Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={studentForm.schoolName}
                            onChange={(e) => setStudentForm({...studentForm, schoolName: e.target.value})}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Enter your school name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Field of Study *
                          </label>
                          <input
                            type="text"
                            required
                            value={studentForm.fieldOfStudy}
                            onChange={(e) => setStudentForm({...studentForm, fieldOfStudy: e.target.value})}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="e.g., Computer Science, Engineering"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Password *
                          </label>
                          <input
                            type="password"
                            required
                            value={studentForm.password}
                            onChange={(e) => setStudentForm({...studentForm, password: e.target.value})}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Create a password"
                          />
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Confirm Password *
                          </label>
                          <input
                            type="password"
                            required
                            value={studentForm.confirmPassword}
                            onChange={(e) => setStudentForm({...studentForm, confirmPassword: e.target.value})}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Confirm your password"
                          />
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 transition-colors font-medium"
                      >
                        Register as Student
                      </button>
                    </form>
                  ) : (
                    // Student Login Form
                    <form onSubmit={handleStudentLogin} className="space-y-6">
                      <h4 className="text-xl font-semibold text-center text-gray-900 mb-6">
                        Student Login
                      </h4>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Student ID *
                        </label>
                        <input
                          type="text"
                          required
                          value={loginForm.studentId}
                          onChange={(e) => setLoginForm({...loginForm, studentId: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          placeholder="Enter your student ID"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Password *
                        </label>
                        <input
                          type="password"
                          required
                          value={loginForm.password}
                          onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          placeholder="Enter your password"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 transition-colors font-medium"
                      >
                        Login as Student
                      </button>
                    </form>
                  )}
                </div>
              )}

              {/* Investor Forms */}
              {activeTab === 'investor' && (
                <div>
                  {!isLogin ? (
                    // Investor Registration Form
                    <form onSubmit={handleInvestorSubmit} className="space-y-6">
                      <h4 className="text-xl font-semibold text-center text-gray-900 mb-6">
                        Investor Registration
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={investorForm.name}
                            onChange={(e) => setInvestorForm({...investorForm, name: e.target.value})}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Enter your full name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Company (Optional)
                          </label>
                          <input
                            type="text"
                            value={investorForm.company}
                            onChange={(e) => setInvestorForm({...investorForm, company: e.target.value})}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Enter your company name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number or Email *
                          </label>
                          <input
                            type="text"
                            required
                            value={investorForm.phoneOrEmail}
                            onChange={(e) => setInvestorForm({...investorForm, phoneOrEmail: e.target.value})}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Phone number or email address"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Password *
                          </label>
                          <input
                            type="password"
                            required
                            value={investorForm.password}
                            onChange={(e) => setInvestorForm({...investorForm, password: e.target.value})}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Create a password"
                          />
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Confirm Password *
                          </label>
                          <input
                            type="password"
                            required
                            value={investorForm.confirmPassword}
                            onChange={(e) => setInvestorForm({...investorForm, confirmPassword: e.target.value})}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Confirm your password"
                          />
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 transition-colors font-medium"
                      >
                        Register as Investor
                      </button>
                    </form>
                  ) : (
                    // Investor Login Form
                    <form onSubmit={handleInvestorLogin} className="space-y-6">
                      <h4 className="text-xl font-semibold text-center text-gray-900 mb-6">
                        Investor Login
                      </h4>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={investorLoginForm.name}
                          onChange={(e) => setInvestorLoginForm({...investorLoginForm, name: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          placeholder="Enter your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Password *
                        </label>
                        <input
                          type="password"
                          required
                          value={investorLoginForm.password}
                          onChange={(e) => setInvestorLoginForm({...investorLoginForm, password: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          placeholder="Enter your password"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 transition-colors font-medium"
                      >
                        Login as Investor
                      </button>
                    </form>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
