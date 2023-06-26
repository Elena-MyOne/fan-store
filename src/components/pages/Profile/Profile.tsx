import React from 'react';
import Breadcrumbs from './Breadcrumbs/Breadcrumbs';
import Sidebar from './Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

const Profile = () => {
  return (
    <section className="profile container px-2 m-auto">
      <div className="body bg-white mt-8">
        <Breadcrumbs />
        <h2 className="title font-semibold text-xl md:mb-6 mb-4">My Profile</h2>
        <div className="content grid md:grid-cols-2 lg:grid-cols-[1fr_3fr] md:grid-cols-[1fr_2fr] gap-8 md:gap-4">
          <Sidebar />
          <div className="info">
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
