'use client';

import { useState } from 'react';
import Navigation from '../../components/Navigation';
import Sidebar from '../../components/student/Sidebar';
import OverviewSection from '../../components/student/OverviewSection';
import ProfileSettingsSection from '../../components/student/ProfileSettingsSection';
import ProjectsSection from '../../components/student/ProjectsSection';
import OpportunitiesSection from '../../components/student/OpportunitiesSection';
import DiscussionsSection from '../../components/student/DiscussionsSection';
import GeneralSettingsSection from '../../components/student/GeneralSettingsSection';

import {
  studentDashboardProjects,
  studentOpportunities,
  studentDiscussions
} from '../../data/mockData';

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
  const [projects, setProjects] = useState(studentDashboardProjects);

  // Opportunities data
  const [opportunities] = useState(studentOpportunities);

  // Discussions data
  const [discussions] = useState(studentDiscussions);

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
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Content */}
      <div className="ml-64 p-8 mt-16">
        {/* Overview Section */}
        {activeSection === 'overview' && (
          <OverviewSection projects={projects} />
        )}

        {/* Profile Settings Section */}
        {activeSection === 'profile' && (
          <ProfileSettingsSection
            profileData={profileData}
            setProfileData={setProfileData}
            isEditingProfile={isEditingProfile}
            setIsEditingProfile={setIsEditingProfile}
            handleProfileUpdate={handleProfileUpdate}
          />
        )}

        {/* Projects Section */}
        {activeSection === 'projects' && (
          <ProjectsSection
            projects={projects}
            setProjects={setProjects}
            handleProjectStatusChange={handleProjectStatusChange}
          />
        )}

        {/* Opportunities Section */}
        {activeSection === 'opportunities' && (
          <OpportunitiesSection
            opportunities={opportunities}
            handleOpportunityResponse={handleOpportunityResponse}
          />
        )}

        {/* Discussions Section */}
        {activeSection === 'discussions' && (
          <DiscussionsSection discussions={discussions} />
        )}

        {/* General Settings Section */}
        {activeSection === 'settings' && (
          <GeneralSettingsSection />
        )}
      </div>
    </div>
  );
