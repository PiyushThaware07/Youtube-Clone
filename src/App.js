import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Container from './components/Container';
import ResponsiveSidebar from './components/ResponsiveSidebar';
// Css
import './App.css';

export default function App() {
  // SideBar Responsive 
  const [sidebar, setSidebar] = useState(false);
  function toggleSidebar() {
    if (sidebar === false) {
      setSidebar(true);
    }
    else {
      setSidebar(false);
    }

  }
  return (
    <>
      <div className="container-fluid p-0 overflow-hidden">
        <div className="bg-transparent py-4 py-md-2">
          <Navbar toggleSidebar={toggleSidebar} sidebar={sidebar} />
        </div>
        <div className="row">
          <div className="col-md-1  pe-0 d-none d-md-block">
            <Sidebar />
          </div>
          <div className="col-md-11 p-md-0">
            <Container />
          </div>
        </div>
      </div>

      <ResponsiveSidebar toggleSidebar={toggleSidebar} sidebar={sidebar} />
    </>
  )
}
