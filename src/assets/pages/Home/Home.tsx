import React, { useEffect, useState } from 'react';
import Header from '../../../components/layout/header';
import FAQs from '../../../components/widget/FAQ';
import AppleSvg from '../../svgIcons/apple';
import WindowsSvg from '../../svgIcons/windows';
import MonkeySvg from '../../svgIcons/monkey';
import GoogleSvg from '../../svgIcons/google';
import DashboardImage from "../../images/dashboard.png";
import Graph1 from "../../../assets/images/graph1.png";
import Graph2 from "../../../assets/images/graph2.png";
import Graph3 from "../../../assets/images/graph3.png";
import Graph4 from "../../../assets/images/graph4.png";
import Graph5 from "../../../assets/images/graph5.png";
const Home: React.FC = () => {
    const [isPageLoaded, setIsPageLoaded] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setIsPageLoaded(true), 300);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className="relative bg-gray-50 overflow-hidden">
            <Header />
            <div className="absolute inset-0 pointer-events-none p-10">
                <div className={`absolute top-28 left-10 transition-all duration-1000 ${isPageLoaded ? 'translate-x-[-30%]' : ''}`}>
                    <GoogleSvg />
                </div>
                <div className={`absolute top-80 left-10 transition-all duration-1000 ${isPageLoaded ? 'translate-y-[-20%] translate-x-[30%]' : ''}`}>
                    <WindowsSvg />
                </div>
                <div className={`absolute top-36 right-6 transition-all duration-1000 ${isPageLoaded ? 'translate-y-[-20%] translate-x-[30%]' : ''}`}>
                    <AppleSvg />
                </div>
                <div className={`absolute top-96 right-16 transition-all duration-1000 ${isPageLoaded ? 'translate-y-[-60%] translate-x-[-30%]' : ''}`}>
                    <MonkeySvg />
                </div>
            </div>
            <div className="relative z-10 w-screen flex flex-col justify-center items-center text-center jus p-10 h-full">
                <h1 className="text-7xl leading-snug  font-semibold font-aeonik text-gray-800">
                    Improve Your <span className="text-[#0A14D6]">Email Deliverability</span><br />
                    with InboxPlease
                </h1>
                <div className="text-gray-600 mt-4 max-w-4xl text-center">
                    Increase engagement and prevent your domain, IP, or applications being blacklisted. We work with any platform and email provider: <span className="text-[#0A14D6] font-semibold" >Helping</span><span className="text-[#0A14D6] font-semibold h-6 overflow-hidden inline-block mx-1">  <span className="relative text-[#0A14D6] font-semibold h-6 overflow-hidden inline-block mx-1">
                        <div className="scroll-container">
                            <div className="scroll-text">
                                <div>SaaS</div>
                                <div>Developers</div>
                                <div>Marketers</div>
                                <div>SaaS</div>
                                <div>Developers</div>
                                <div>Marketers</div>
                                <div>SaaS</div>
                                <div>Developers</div>
                                <div>Marketers</div>
                            </div>
                        </div>
                    </span> </span> improve inbox placement and maintain their email sending reputation.
                </div>
                <div className="mt-8 flex justify-center gap-6">
                    <button className="flex items-center px-2 py-1 border  rounded-full bg-[#0A14D6] text-white  transition-colors duration-300 group">
                        <span className="font-medium py-3 px-4">Get Started</span>
                        <div className="ml-4 w-10 h-10 flex items-center justify-center bg-white rounded-full  transition-colors duration-300 transition-transform group-hover:-rotate-45">
                            <svg
                                width="16"
                                height="11"
                                viewBox="0 0 16 11"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-4 h-4 stroke-current text-black transition-colors duration-300"
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
                    <button className="flex items-center px-2 py-1 border border-black rounded-full bg-white text-black hover:bg-amber-400 hover:border-amber-400 transition-colors duration-300 group">
                        <span className="font-medium py-3 px-4">Get Started</span>
                        <div className="ml-4 w-10 h-10 flex items-center justify-center bg-black rounded-full group-hover:bg-white transition-colors duration-300 transition-transform group-hover:-rotate-45">
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
            </div>
            <div
                className={`bg-contain bg-no-repeat bg-center w-screen h-screen transition-transform duration-1000 ${isPageLoaded ? 'translate-y-[-10%]' : 'translate-y-0'
                    }`}
                style={{ backgroundImage: `url(${DashboardImage})` }}
            >
                {/* First Row - Slides from the Right */}
                <div className="absolute flex justify-around top-20 left-0 right-0 transition-all duration-1000"
                    style={{ transform: isPageLoaded ? 'translateX(0)' : 'translateX(10%)' }}
                >
                    <img
                        src={Graph1}
                        alt="Graph 1"
                        className={`absolute top-10 left-[500px] w-40 h-40 opacity-90 transition-transform duration-1000 ${isPageLoaded ? 'translate-x-0' : 'translate-x-[10%]'}`}
                    />
                    <img
                        src={Graph2}
                        alt="Graph 2"
                        className={`absolute top-16 left-[700px] w-32 h-32 opacity-90 transition-transform duration-1000 ${isPageLoaded ? 'translate-x-0' : 'translate-x-[10%]'}`}
                    />
                </div>
                <div className="absolute flex justify-around bottom-24 left-[415px] right-0 transition-all duration-1000"
                    style={{ transform: isPageLoaded ? 'translateY(0)' : 'translateY(50%)' }}
                >
                    <img
                        src={Graph3}
                        alt="Graph 3"
                        className={`absolute bottom-16 left-20 w-32 h-32 opacity-90 transition-transform duration-1000 ${isPageLoaded ? 'translate-y-0' : 'translate-y-[20%]'}`}
                    />
                    <img
                        src={Graph4}
                        alt="Graph 4"
                        className={`absolute bottom-16 left-64 w-32 h-32 opacity-90 transition-transform duration-1000 ${isPageLoaded ? 'translate-y-0' : 'translate-y-[20%]'}`}
                    />
                    <img
                        src={Graph5}
                        alt="Graph 5"
                        className={`absolute bottom-16 right-96 w-32 h-32 opacity-90 transition-transform duration-1000 ${isPageLoaded ? 'translate-y-0' : 'translate-y-[20%]'}`}
                    />
                </div>
            </div>
            <FAQs />
        </div >
    );
};

export default Home;
