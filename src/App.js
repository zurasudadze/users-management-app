import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from './pages/Users'
import UserDetails from './pages/UserDetails'
import Layout from './components/Layout'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<UserDetails />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
