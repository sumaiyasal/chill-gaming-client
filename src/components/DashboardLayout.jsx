// DashboardLayout.jsx
import { Outlet } from 'react-router-dom';
import Dashboard from './Dashboard';
import Overview from './Overview';


const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen">
      <Dashboard></Dashboard>
      
      <div className="flex-1 p-5 bg-base-200">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
