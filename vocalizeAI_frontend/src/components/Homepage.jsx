import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Homepage component that displays the landing page of the application.
 */
const Homepage = () => {
    return (
        <div className="flex flex-col items-center h-screen bg-gray-100">
            <div className="flex flex-1 flex-col items-center justify-center text-center px-4">
                <div className="relative w-full">
                    <img
                        src="law_background.jpg"
                        alt="Background"
                        className="absolute inset-0 w-full h-full object-cover opacity-10 z-0"
                    />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-red-500 to-yellow-500 text-transparent bg-clip-text">
                    Welcome to VocalizeAI
                </h1>
                <h2 className="text-lg md:text-2xl font-medium mt-4 text-gray-700">
                    We are here to support every step of your conversation
                </h2>
                <Link
                    to="/chat"
                    className="mt-6 px-6 py-3 bg-gradient-to-l from-yellow-500 to-yellow-300 text-white rounded-full shadow-lg hover:shadow-2xl transition duration-300"
                >
                    Get Started
                </Link>

                <Link
                    to="/instructions"
                    className="mt-6 px-6 py-3 bg-gradient-to-l from-yellow-500 to-yellow-300 text-white rounded-full shadow-lg hover:shadow-2xl transition duration-300"
                >
                    Instructions
                </Link>
            </div>

            <footer className="flex flex-col items-center mt-auto pb-6">
                <img
                    src="/pngegg.png"
                    alt="Icon"
                    className="w-20 h-20 mb-2"
                />
                <div className="flex gap-4 text-sm text-gray-600">
                    <Link to="/about" className="hover:text-gray-900 transition">
                        Terms of Service
                    </Link>
                    <Link to="/contact" className="hover:text-gray-900 transition">
                        Privacy Policy
                    </Link>
                </div>
            </footer>
        </div>
    );
};

export default Homepage;
