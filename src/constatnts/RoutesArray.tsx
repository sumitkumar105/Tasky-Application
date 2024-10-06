import Layout from "../layout/Layout";
import Dashboard from "../pages/Dashboard";
import ProjectDetails from "../pages/ProjectDetails";
import ProfilePage from "../pages/ProfilePage";
import LoginPage from "../pages/LoginPage";
export const routeData = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/project-details",
        element: <ProjectDetails />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
    ],
  },
];
