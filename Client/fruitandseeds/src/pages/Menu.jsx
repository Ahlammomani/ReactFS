import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import menuImage from "../assets/menu.jpeg";

const MenuPage = () => {
  // State for storing products
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  // const navigate = useNavigate();
  
  // Get products from API when page loads
  useEffect(() => {
    fetchProducts();
  }, [search, category]);
  
  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/products', {
        params: {
          search: search,
          categoryId: category,
        }
      });
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const resetFilters = () => {
    setSearch('');
    setCategory('');
  };

  return (
    <div className="min-h-screen bg-[#EDE8DC] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#E7CCCC] rounded-bl-full opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-96 h-72 bg-[#C1CFA1] rounded-tr-full opacity-30"></div>
      <div className="absolute top-1/3 left-0 w-32 h-64 bg-[#A5B68D] rounded-r-full opacity-20 transform -translate-y-1/2"></div>
      <div className="absolute bottom-1/4 right-0 w-48 h-48 bg-[#E7CCCC] rounded-l-full opacity-20"></div>
      
      {/* Floating Circles */}
      <div className="absolute top-20 left-1/4 w-12 h-12 rounded-full bg-[#C1CFA1] opacity-20"></div>
      <div className="absolute bottom-20 right-1/4 w-16 h-16 rounded-full bg-[#E7CCCC] opacity-30"></div>
      <div className="absolute top-1/3 right-20 w-8 h-8 rounded-full bg-[#A5B68D] opacity-20"></div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Hero Section - Fixed to use image tag directly as shown in your example */}
        <div className="relative w-full overflow-hidden mb-8 rounded-lg">
          <div className="relative h-48 md:h-64">
            <img
              src={menuImage}
              alt="Recipe Index"
              className="w-full h-full object-cover"
            />
            {/* Overlay and text */}
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <h1 className="text-4xl font-serif text-white relative z-10 tracking-wider">RECIPE INDEX</h1>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Filter Sidebar with Search and Category */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-md p-4 mb-4">
              {/* Search Input */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-700 mb-2">SEARCH</h3>
                <input
                  type="text"
                  placeholder="Search for recipes..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E7CCCC]"
                />
              </div>
              
              {/* Category Dropdown */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-700 mb-2">CATEGORY</h3>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E7CCCC]"
                >
                  <option value="">All Categories</option>
                  <option value="Keto Treats">Keto Treats</option>
                  <option value="Diabetic Treats">Diabetic Treats</option>
                  <option value="Allergy-Friendly Treats">Allergy-Friendly Treats</option>
                  <option value="Kids' Treats">Kids' Treats</option>
                  <option value="Seasonal Treats">Seasonal Treats</option>
                  <option value="Holiday Treats">Holiday Treats</option>
                </select>
              </div>
              
              <button 
                onClick={resetFilters}
                className="w-full py-2 bg-[#A5B68D] text-white rounded-md hover:bg-[#C1CFA1] transition"
              >
                RESET INDEX
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Recipe Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
                  <div 
                    className="h-48 overflow-hidden cursor-pointer"
                    onClick={() => handleProductClick(product.id)}
                  >
                    <img 
                      src={`http://localhost:5000/uploads/${product.image}`} 
                      alt={product.name} 
                      className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-sm font-medium text-[#A5B68D] hover:text-[#E7CCCC] transition">{product.name}</h3>
                    <p className="text-xs text-gray-600 mt-1">{product.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;