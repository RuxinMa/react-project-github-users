import React from 'react';
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Routes>   {/* render the first child */}
          <Route path='/' element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
            }/>
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<Error />} /> {/* matches all pages */}
        </Routes>
      </Router>
    </AuthWrapper>
  );
}

export default App;
