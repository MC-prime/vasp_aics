import React from 'react';
import StudentRegistrationForm from './StudentRegistrationForm';
import InvestorRegistrationForm from './InvestorRegistrationForm';
import StudentLoginForm from './StudentLoginForm';
import InvestorLoginForm from './InvestorLoginForm';

import { useAuthModal } from '../../hooks/useAuthModal';

export default function AuthModal() {
  const {
    showModal,
    closeModal,
    modalType,
    activeTab,
    setActiveTab,
    isLogin,
    setIsLogin,
    studentForm,
    setStudentForm,
    investorForm,
    setInvestorForm,
    loginForm,
    setLoginForm,
    investorLoginForm,
    setInvestorLoginForm,
    handleStudentSubmit,
    handleInvestorSubmit,
    handleStudentLogin,
    handleInvestorLogin,
  } = useAuthModal();

  if (!showModal) return null;

  return (
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
                <StudentRegistrationForm
                  studentForm={studentForm}
                  setStudentForm={setStudentForm}
                  handleStudentSubmit={handleStudentSubmit}
                />
              ) : (
                <StudentLoginForm
                  loginForm={loginForm}
                  setLoginForm={setLoginForm}
                  handleStudentLogin={handleStudentLogin}
                />
              )}
            </div>
          )}

          {/* Investor Forms */}
          {activeTab === 'investor' && (
            <div>
              {!isLogin ? (
                <InvestorRegistrationForm
                  investorForm={investorForm}
                  setInvestorForm={setInvestorForm}
                  handleInvestorSubmit={handleInvestorSubmit}
                />
              ) : (
                <InvestorLoginForm
                  investorLoginForm={investorLoginForm}
                  setInvestorLoginForm={setInvestorLoginForm}
                  handleInvestorLogin={handleInvestorLogin}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
