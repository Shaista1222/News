import './App.css';
import React from 'react';
import Header from './components/Header';
import Slidder from './components/Slidder';
import WhoWeAre from './components/WhoWeAre';
import AllServices from './components/AllServices';
import Footer from './components/Footer';
import Blogs from './components/Blogs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  const pageSize = 9;
  const apiKey = process.env.REACT_APP_NEWS_API
  return (
    <>
      <Router>
        <Header />
        <Slidder />
        <WhoWeAre />
        <Routes>
          <Route exact path="/" element={<Blogs apiKey={apiKey} key="general" pageSize={pageSize} country="us" category="general" />}></Route>
          <Route exact path="/business" element={<Blogs apiKey={apiKey} key="business" pageSize={pageSize} country="us" category="business" />}></Route>
          <Route exact path="/entertainment" element={<Blogs apiKey={apiKey} key="entertainment" pageSize={pageSize} country="us" category="entertainment" />}></Route>
          <Route exact path="/health" element={<Blogs apiKey={apiKey} key="health" pageSize={pageSize} country="us" category="health" />}></Route>
          <Route exact path="/science" element={<Blogs apiKey={apiKey} key="science" pageSize={pageSize} country="us" category="science" />}></Route>
          <Route exact path="/sports" element={<Blogs apiKey={apiKey} key="sports" pageSize={pageSize} country="us" category="sports" />}></Route>
          <Route exact path="/technology" element={<Blogs apiKey={apiKey} key="technology" pageSize={pageSize} country="us" category="technology" />}></Route>
          <Route exact path="/bitcoins" element={<Blogs apiKey={apiKey} key="bitcoins" pageSize={pageSize} country="us" category="bitcoins" />}></Route>
          <Route exact path="/crypto" element={<Blogs apiKey={apiKey} key="crypto" pageSize={pageSize} country="us" category="crypto" />}></Route>
          <Route exact path="/fitness" element={<Blogs apiKey={apiKey} key="fitness" pageSize={pageSize} country="us" category="fitness" />}></Route>
          <Route exact path="/food" element={<Blogs apiKey={apiKey} key="food" pageSize={pageSize} country="us" category="food" />}></Route>
          <Route exact path="/jobs" element={<Blogs apiKey={apiKey} key="jobs" pageSize={pageSize} country="us" category="jobs" />}></Route>
        </Routes>
        <AllServices />
        <Footer />
      </Router>
    </>
  );
}

export default App;
