import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import AdminNavbar from "./components/dashboard/AdminNavbar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AdminBlogs from "./pages/AdminBlogs";
import User from "./components/dashboard/User";
import CreateBlogForm from "./components/dashboard/CreateBlogForm";
import Home from "./pages/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import ProtectedRoute from "./components/ProtectedRoute";

const MainLayout = () => (
  <div>
    <Navbar />
    <Outlet />
    <Footer />
  </div>
);

const AdminLayout = () => (
  <div>
    <AdminNavbar />
    <Outlet />
  </div>
);

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [{ path: "/", element: <Home /> }],
  },
  {
    element: (
      <ProtectedRoute>
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: [
      { path: "/dashboard", element: <AdminBlogs /> },
      { path: "/dashboard/users", element: <User /> },
      { path: "/dashboard/blog/create", element: <CreateBlogForm /> },
    ],
  },
  {
    // Keeping login & register outside of ProtectedRoute so unauthenticated users can access them
    element: <AdminLayout />,
    children: [
      { path: "/dashboard/login", element: <Login /> },
      { path: "/dashboard/register", element: <Register /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
