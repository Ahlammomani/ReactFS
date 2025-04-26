import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route,useLocation } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Menu from "./pages/Menu";
import ContactUs from "./pages/ContactUs";
// import Settings from "./pages/Settings";
// import Cart from "./pages/Cart";
import Navbar from "./Components/Navbar";
import Profile from "./pages/Profile";
import Admin from "./pages/Admin/Dashboard";
import Footer from "./Components/Footer";

const ConditionalLayout = ({ children }) => {
  const location = useLocation();
  const noNavbarFooterPaths = ["/admin", "/login" ,"/signup","/Admin"];
  const shouldShowNavbarAndFooter = !noNavbarFooterPaths.some((path) =>
    location.pathname.startsWith(path)
  );
  return (
    <div className="App font-cairo">
      {shouldShowNavbarAndFooter && (
        <Suspense fallback={<div>Loading Navbar...</div>}>
          <Navbar />
        </Suspense>
      )}
      {children}
      {shouldShowNavbarAndFooter && (
        <Suspense fallback={<div>Loading Footer...</div>}>
          <Footer />
        </Suspense>
      )}
    </div>
  );
};

function App() {
  return (
    <Router>
      <ConditionalLayout>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Admin/*" element={<Admin />} />
        {/* <Route path="/settings" element={<Settings />} /> */}
        {/* <Route path="/cart" element={<Cart />} /> */}
      </Routes>
      </Suspense>
      </ConditionalLayout>
      
    </Router>
  );
}

export default App;