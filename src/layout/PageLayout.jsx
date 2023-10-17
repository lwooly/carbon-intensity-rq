import React from 'react';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import { Outlet } from 'react-router-dom';


const PageLayout = () => {
    return (
        <>
            <header>
                <ResponsiveAppBar/>
            </header>
            <main>
                <Outlet/>
            </main>
        </>
    );
};

export default PageLayout;