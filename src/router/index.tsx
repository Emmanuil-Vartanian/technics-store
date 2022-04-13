import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { ROUTES } from 'constants/routes'
import HomePage from 'pages/Home'
import LoginPage from 'pages/Login'
import NotFoundPage from 'pages/NotFound'
import Profile from 'pages/Profile'
// import { getIsAuthenticatedSelector } from 'pages/Login/store/reducers/selectors'

const Router: React.FC = () => {
  // const isAuthenticated = useSelector(getIsAuthenticatedSelector)

  return (
    <Routes>
      <Route path={ROUTES.HOME_PAGE} element={<HomePage />} />
      <Route path={ROUTES.LOGIN_PAGE} element={<LoginPage />} />
      <Route path={ROUTES.NOT_FOUND_PAGE} element={<NotFoundPage />} />
      {/* {!isAuthenticated ? (
          <Route path="*" element={<Navigate to={ROUTES.LOGIN_PAGE} replace />} />
        ) : (
          <Route path={ROUTES.PROFILE_PAGE} element={<Profile />} />
        )} */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default Router
