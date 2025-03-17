import React, { useEffect, useState } from "react";
import { FaTrash, FaUser } from "react-icons/fa";
import { toast } from "react-toastify";
import axios from "axios";

const User = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch Users from API
  const USER_API = import.meta.env.VITE_USER_API_END_POINT;
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await axios.get(`${USER_API}/get/all`, {
          withCredentials: true,
        }); // Axios automatically parses JSON
        setUsers(data.data.users);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch users");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Update User Role

  const handleRoleChange = async (id, newRole) => {
    try {
      const response = await axios.put(`/update/user/${id}`, { role: newRole });

      if (response.status !== 200) throw new Error("Failed to update role");

      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user._id === id ? { ...user, role: newRole } : user
        )
      );
      toast.success("User role updated successfully!");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update role");
    }
  };

  // Delete User
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${USER_API}/delete/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete user");

      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
      toast.success("User deleted successfully!");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="p-6 sm:p-10 bg-[#1e1e2f] min-h-screen flex flex-col items-center text-white">
      <h2 className="text-3xl font-bold mb-6">User Management</h2>

      {error && <p className="text-red-400">{error}</p>}

      {loading ? (
        <p className="text-lg text-gray-300">Loading users...</p>
      ) : users.length === 0 ? (
        <p className="text-lg text-gray-300">No users found.</p>
      ) : (
        <div className="overflow-x-auto w-full max-w-4xl bg-[#252537] rounded-lg shadow-lg p-4">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#181826] text-gray-300">
                <th className="p-3">User Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Role</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id} className="border-b border-gray-700">
                  <td className="p-3">{user.username}</td>
                  <td className="p-3">{user.email}</td>
                  <td className="p-3">
                    <div className="relative inline-block">
                      <button className="bg-[#ff9800] text-white px-4 py-1 rounded-md flex items-center">
                        <FaUser className="mr-2" />
                        {user.role}
                      </button>
                      <select
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        onChange={(e) =>
                          handleRoleChange(user._id, e.target.value)
                        }
                      >
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                      </select>
                    </div>
                  </td>
                  <td className="p-3">
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="bg-red-600 text-white px-4 py-1 rounded-md hover:bg-red-800 transition"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default User;
