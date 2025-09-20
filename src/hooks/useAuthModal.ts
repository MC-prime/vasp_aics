import { useState } from 'react';

export const useAuthModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('register');
  const [activeTab, setActiveTab] = useState('student');
  const [isLogin, setIsLogin] = useState(false);

  const [studentForm, setStudentForm] = useState({
    studentId: '',
    schoolName: '',
    fieldOfStudy: '',
    password: '',
    confirmPassword: '',
  });

  const [investorForm, setInvestorForm] = useState({
    name: '',
    company: '',
    password: '',
    confirmPassword: '',
    phoneOrEmail: '',
  });

  const [loginForm, setLoginForm] = useState({
    studentId: '',
    password: '',
  });

  const [investorLoginForm, setInvestorLoginForm] = useState({
    name: '',
    password: '',
  });

  const closeModal = () => setShowModal(false);

  const openModal = (type: string) => {
    setModalType(type);
    setShowModal(true);
  };

  const handleStudentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle student registration logic here
    console.log('Student registration:', studentForm);
  };

  const handleInvestorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle investor registration logic here
    console.log('Investor registration:', investorForm);
  };

  const handleStudentLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle student login logic here
    console.log('Student login:', loginForm);
  };

  const handleInvestorLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle investor login logic here
    console.log('Investor login:', investorLoginForm);
  };

  return {
    showModal,
    closeModal,
    openModal,
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
  };
};
