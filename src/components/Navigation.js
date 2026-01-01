import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

function Navigation() {
    const navigate = useNavigate();
    const location = useLocation();
    const isHome = location.pathname === '/';

    if (isHome) return null;

    return (
        <div className="fixed top-4 left-4 z-50">
            <button
                onClick={() => navigate('/')}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-200"
                aria-label="Go to home"
            >
                <FaHome className="text-gray-700" />
                <span className="text-sm font-medium text-gray-700">Home</span>
            </button>
        </div>
    );
}

export default Navigation;