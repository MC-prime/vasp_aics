'use client';

import { useState } from 'react';
import Navigation from '../../components/Navigation';
import AdminNavigationTabs from '../../components/admin/AdminNavigationTabs';
import OverviewSection from '../../components/admin/OverviewSection';
import UsersSection from '../../components/admin/UsersSection';
import ProjectsSection from '../../components/admin/ProjectsSection';
import InvestmentsSection from '../../components/admin/InvestmentsSection';
import SettingsSection from '../../components/admin/SettingsSection';

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
      <AdminNavigationTabs activeSection={activeSection} onSectionChange={setActiveSection} />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Overview Section */}
        {activeSection === 'overview' && (
          <OverviewSection stats={stats} recentActivities={recentActivities} />
        )}

        {/* Users Section */}
        {activeSection === 'users' && (
          <UsersSection users={users} onUserStatusChange={handleUserStatusChange} />
        )}

        {/* Projects Section */}
        {activeSection === 'projects' && (
          <ProjectsSection projects={projects} onProjectApproval={handleProjectApproval} />
        )}

        {/* Investments Section */}
        {activeSection === 'investments' && (
          <InvestmentsSection stats={{ totalInvestments: stats.totalInvestments, totalInvestmentAmount: stats.totalInvestmentAmount }} />
        )}

        {/* Settings Section */}
        {activeSection === 'settings' && (
          <SettingsSection />
        )}
      </div>
    </div>
  );
}
