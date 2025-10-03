// API Configuration
const API_CONFIG = {
  // Production API URL (your deployed backend)
  PRODUCTION_URL: 'https://backend-shivalik-2.onrender.com',
  
  // Development API URL (local backend)
  DEVELOPMENT_URL: 'http://localhost:5000',
  
  // Use environment variable or default to production
  BASE_URL: process.env.REACT_APP_USE_PRODUCTION === 'false' 
    ? 'http://localhost:5000' 
    : process.env.REACT_APP_API_URL || 'https://backend-shivalik-2.onrender.com'
};

// API Endpoints
export const API_ENDPOINTS = {
  // Authentication
  AUTH: `${API_CONFIG.BASE_URL}/api/auth`,
  USER_AUTH: `${API_CONFIG.BASE_URL}/api/user-auth`,
  
  // Products
  PRODUCTS: `${API_CONFIG.BASE_URL}/api/products`,
  
  // Admin
  ADMIN: `${API_CONFIG.BASE_URL}/api/admin`,
  ADMIN_LOGIN: `${API_CONFIG.BASE_URL}/api/admin/login`,
  ADMIN_USERS: `${API_CONFIG.BASE_URL}/api/admin/users`,
  ADMIN_ORDERS: `${API_CONFIG.BASE_URL}/api/admin/orders`,
  ADMIN_PRODUCTS: `${API_CONFIG.BASE_URL}/api/admin/products`,
  
  // Cart & Orders
  CART: `${API_CONFIG.BASE_URL}/api/cart`,
  PAYMENT: `${API_CONFIG.BASE_URL}/api/payment`,
  
  // Stats
  STATS: `${API_CONFIG.BASE_URL}/api/stats`,
  
  // Base URL for dynamic endpoints
  BASE: API_CONFIG.BASE_URL
};

export default API_CONFIG;