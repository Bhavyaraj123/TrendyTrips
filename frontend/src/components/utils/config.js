const dev = process.env.NODE_ENV !== 'production';

export const BASE_URL = dev 
  ? "http://localhost:8000/api/v1"  // backend running locally
  : "https://trendytrips.onrender.com/api/v1";  // live backend
