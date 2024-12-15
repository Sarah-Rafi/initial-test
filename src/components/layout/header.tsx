import React from 'react';
import Logo from '../../assets/images/Logo.png';

const Header: React.FC = () => {
    return (
        <header className="flex items-center justify-between bg-white px-6 py-4 shadow-md w-full">
            {/* Logo */}
            <div className="flex items-center space-x-2">
                <img
                    src={Logo}
                    alt="Logo"
                    className="min-w-60 h-7 object-contain"
                />
            </div>
            <div className="flex items-center space-x-4">
                <button className="text-gray-600 hover:text-black transition">
                    Login
                </button>
                <button className="flex items-center px-2 py-2 border border-black rounded-full bg-white text-black hover:bg-black hover:text-white transition-colors duration-300 group">
                    <span className="font-medium">Sign up</span>
                    <div className="ml-2 w-6 h-6 flex items-center justify-center bg-black rounded-full group-hover:bg-white transition-colors duration-300 transition-transform group-hover:-rotate-45">
                        <svg
                            width="16"
                            height="11"
                            viewBox="0 0 16 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4 stroke-current text-white group-hover:text-black transition-colors duration-300"
                        >
                            <path
                                d="M11.0166 9.83204L15.1436 5.71046L11.0166 1.58887"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M1.125 5.45703L13.3912 5.45703"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                </button>
            </div>
        </header>
    );
};

export default Header;
