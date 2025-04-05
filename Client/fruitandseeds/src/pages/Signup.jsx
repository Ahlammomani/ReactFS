import { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [user, setUser] = useState({ firstName: "", lastName: "", email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await API.post("/users/signup", user);
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred!");
    }
  };

  const handleGoogleSignup = async () => {
    try {
      window.location.href = `${API.defaults.baseURL}/auth/google`;
    } catch (err) {
      setError("Failed to connect with Google");
    }
  };

  const handleFacebookSignup = async () => {
    try {
      window.location.href = `${API.defaults.baseURL}/auth/facebook`;
    } catch (err) {
      setError("Failed to connect with Facebook");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#EDE8DC] relative overflow-hidden">
      {/* Decorative Curves */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#E7CCCC] rounded-bl-full opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-96 h-72 bg-[#C1CFA1] rounded-tr-full opacity-40"></div>
      <div className="absolute top-1/2 left-0 w-32 h-64 bg-[#A5B68D] rounded-r-full opacity-30 transform -translate-y-1/2"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-1/4 w-12 h-12 rounded-full bg-[#C1CFA1] opacity-20"></div>
      <div className="absolute bottom-20 right-1/4 w-16 h-16 rounded-full bg-[#E7CCCC] opacity-30"></div>
      <div className="absolute top-1/3 right-20 w-8 h-8 rounded-full bg-[#A5B68D] opacity-20"></div>
      
      {/* Form Container - Made more compact */}
      <div className="relative z-10 max-w-sm w-full mx-auto p-6 bg-white rounded-2xl shadow-2xl">
        {/* Form Header with Accent - Made more compact */}
        <div className="mb-4 relative">
          <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#A5B68D] rounded-full opacity-20"></div>
          <h2 className="text-2xl font-bold text-[#A5B68D] relative z-10">Create Account</h2>
          <p className="text-gray-600 text-sm">Join our community today</p>
          <div className="h-1 w-16 bg-[#C1CFA1] mt-2 rounded-full"></div>
        </div>
        
        {/* Error Message */}
        {error && (
          <div className="mb-3 p-2 bg-[#E7CCCC] bg-opacity-30 border-l-4 border-red-500 rounded text-sm">
            <p className="text-red-600">{error}</p>
          </div>
        )}
        
        {/* Form Fields - Made more compact */}
        <form onSubmit={handleSignup} className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="block text-xs font-medium text-gray-700">First Name</label>
              <input 
                className="w-full p-2 text-sm bg-[#EDE8DC] bg-opacity-30 border border-[#E7CCCC] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A5B68D] transition" 
                type="text" 
                placeholder="First name" 
                onChange={(e) => setUser({ ...user, firstName: e.target.value })} 
              />
            </div>
            
            <div className="space-y-1">
              <label className="block text-xs font-medium text-gray-700">Last Name</label>
              <input 
                className="w-full p-2 text-sm bg-[#EDE8DC] bg-opacity-30 border border-[#E7CCCC] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A5B68D] transition" 
                type="text" 
                placeholder="Last name" 
                onChange={(e) => setUser({ ...user, lastName: e.target.value })} 
              />
            </div>
          </div>
          
          <div className="space-y-1">
            <label className="block text-xs font-medium text-gray-700">Email Address</label>
            <input 
              className="w-full p-2 text-sm bg-[#EDE8DC] bg-opacity-30 border border-[#E7CCCC] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A5B68D] transition" 
              type="email" 
              placeholder="Enter your email" 
              onChange={(e) => setUser({ ...user, email: e.target.value })} 
            />
          </div>
          
          <div className="space-y-1">
            <label className="block text-xs font-medium text-gray-700">Password</label>
            <input 
              className="w-full p-2 text-sm bg-[#EDE8DC] bg-opacity-30 border border-[#E7CCCC] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A5B68D] transition" 
              type="password" 
              placeholder="Create a password" 
              onChange={(e) => setUser({ ...user, password: e.target.value })} 
            />
          </div>
          
          <div className="pt-2">
            <button 
              type="submit" 
              className="w-full p-2 bg-[#A5B68D] text-white font-medium rounded-lg shadow-md hover:bg-[#C1CFA1] transform hover:-translate-y-1 transition-all duration-300"
            >
              Sign Up
            </button>
          </div>
          
          <div className="relative py-2">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-2 bg-white text-xs text-gray-500">Or continue with</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <button 
              type="button" 
              onClick={handleGoogleSignup}
              className="flex items-center justify-center p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
            >
              <svg className="h-4 w-4 text-[#A5B68D]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.48 10.92v3.28h4.92c-.2 1.28-1.52 3.76-4.92 3.76-2.96 0-5.36-2.44-5.36-5.44s2.4-5.44 5.36-5.44c1.68 0 2.8.72 3.44 1.36l2.36-2.28c-1.52-1.4-3.48-2.24-5.8-2.24-4.8 0-8.68 3.88-8.68 8.64s3.88 8.64 8.68 8.64c5 0 8.32-3.52 8.32-8.48 0-.56-.08-1-.16-1.44h-8.16z" />
              </svg>
            </button>
            <button 
              type="button" 
              onClick={handleFacebookSignup}
              className="flex items-center justify-center p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
            >
              <svg className="h-4 w-4 text-[#A5B68D]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
              </svg>
            </button>
          </div>
          
          <div className="mt-2 text-center text-xs text-gray-600">
            Already have an account? 
            <a href="/login" className="ml-1 text-[#A5B68D] hover:underline">
              Sign In
            </a>
          </div>
        </form>
        
        {/* Decorative Bottom Element */}
        <div className="absolute -bottom-3 right-8 w-24 h-6 bg-[#C1CFA1] rounded-t-full opacity-50"></div>
      </div>
    </div>
  );
};

export default Signup;