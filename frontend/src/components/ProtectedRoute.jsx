import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const USER_API = import.meta.env.VITE_USER_API_END_POINT;
        const res = await axios.get(`${USER_API}/get`, {
          withCredentials: true,
        });
        setUser(res.data);
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return user?.isAdmin ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
