import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/pages/dashboard/Dashboard';
import SurveyList from './components/pages/survey-list/SurveyList';
import SurveyDetails from './components/pages/survey-details/SurveyDetails';
import routePaths from './assets/routePaths';
import './index.scss';
import CreateSurvey from './components/organism/CreateSurvey';
import Navbar from './components/organism/Navbar';
import Header from './components/organism/Header';
import Login from './components/pages/login/Login';
import { AuthProvider, useAuth } from 'surveyDashboard/authContext';
import ProtectedRoute from './services/ProtectedRoutes';
import AdminDetails from 'campaign/AdminDetails'
import DisplaySurvey from './components/organism/DisplaySurvey';

const App = () => {
  const { auth } = useAuth();
  const isAdmin = auth.isAuthenticated && auth.type === 'admin'
  const isUser = auth.isAuthenticated && auth.type === 'user'
  return (
    <BrowserRouter>
      <div className='flex flex-col h-screen'>
        <Header />
        <div className='flex flex-row h-full items-stretch'>
          {auth.isAuthenticated && <Navbar />}
          <Routes>
            <Route path={routePaths.login} element={<Login />} />
            <Route path='/' element={<Login />} />
            {auth.isAuthenticated && <Route
              path={routePaths.dashboard}
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />}
            <Route
              path={routePaths.survey_list}
              element={
                <ProtectedRoute>
                  <SurveyList />
                </ProtectedRoute>
              }
            />
            <Route
              path={`${routePaths.survey_list}/:year/:month`}
              element={
                <ProtectedRoute>
                  <SurveyList />
                </ProtectedRoute>
              }
            />
            <Route path='/surveys/:id' element={
              <ProtectedRoute>
                <DisplaySurvey />
              </ProtectedRoute>
            } />
            <Route
              path='survey-details/:id'
              element={
                <ProtectedRoute>
                  <SurveyDetails />
                </ProtectedRoute>
              }
            />
            <Route
              path={routePaths.create_survey}
              element={
                <ProtectedRoute>
                  <CreateSurvey />
                </ProtectedRoute>
              }
            />
            <Route
              path={routePaths.admin_details}
              element={
                <ProtectedRoute>
                  <AdminDetails />
                </ProtectedRoute>
              }
            />
            <Route path='/' element={<Login />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};
const rootElement = document.getElementById('app');
if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
