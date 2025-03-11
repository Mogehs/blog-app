import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import AdminNavbar from "./components/dashboard/AdminNavbar";
// import Navbar from "./components/Navbar";
import AdminBlogs from "./pages/AdminBlogs";
import User from "./components/dashboard/User";
import CreateBlogForm from "./components/dashboard/CreateBlogForm";
import Home from "./pages/Home";

const MainLayout = () => (
  <div>
    {/* <Navbar /> */}
    <Outlet />
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
    element: <AdminLayout />,
    children: [
      { path: "/dashboard", element: <AdminBlogs /> },
      { path: "/dashboard/users", element: <User /> },
      { path: "/dashboard/blog/create", element: <CreateBlogForm /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
