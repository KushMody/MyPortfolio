import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Projects from '../sections/Projects';
import SmoothScroll from '../components/SmoothScroll';
import CustomCursor from '../components/CustomCursor';

const AllProjectsPage = () => {
    return (
        <div className="min-h-screen bg-[#0d0d0d] text-[#eaeaea] transition-colors duration-300 relative selection:bg-[#c7ff00] selection:text-black">
            <CustomCursor />
            <SmoothScroll>
                <Navbar />
                <main className="pt-24">
                    <Projects layout="grid" />
                </main>
                <Footer />
            </SmoothScroll>
        </div>
    );
};

export default AllProjectsPage;
