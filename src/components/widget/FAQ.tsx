import React from 'react';
import PlusIconSvg from '../../assets/svgIcons/plusIcon';
import EmailSvg from '../../assets/svgIcons/email';
import "../../styles/CustomCSS/faq.css"
const FAQs: React.FC = () => {
    return (
        <div className="relative bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
            {/* Background Circle */}
            <div
                className="absolute inset-0 mt-20 flex justify-center items-center"
            >
                <EmailSvg />
            </div>
            <div className="flex-col relative flex justify-center items-center">
                <h2 className="text-4xl font-semibold text-center text-gray-900 mb-8">
                    Frequently <span className="text-[#0A14D6]">Asked questions</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    <div className="faq-item-1 bg-white shadow rounded-full p-4 flex items-center justify-between hover:shadow-lg transition">
                        <h3 className="text-lg font-medium text-gray-800 mr-4">
                            My deliverability varies between tools I use to reach customers, why?
                        </h3>
                        <button className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full focus:outline-none">
                            <PlusIconSvg />
                        </button>
                    </div>

                    <div className="faq-item-2 bg-white shadow rounded-full p-4 flex items-center justify-between hover:shadow-lg transition">
                        <button className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full focus:outline-none">
                            <PlusIconSvg />
                        </button>
                        <h3 className="text-lg font-medium text-gray-800 ml-4">
                            How long does it take to improve my deliverability?
                        </h3>
                    </div>

                    <div className="faq-item-3 bg-white shadow rounded-full p-4 flex items-center justify-between hover:shadow-lg transition">
                        <h3 className="text-lg font-medium text-gray-800 mr-4">
                            I have to keep generating new domains as my deliverability drops. Can you fix them?
                        </h3>
                        <button className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full focus:outline-none">
                            <PlusIconSvg />
                        </button>
                    </div>

                    <div className="faq-item-4 bg-white shadow rounded-full p-4 flex items-center justify-between hover:shadow-lg transition">
                        <button className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full focus:outline-none">
                            <PlusIconSvg />
                        </button>
                        <h3 className="text-lg font-medium text-gray-800 ml-4">
                            What is email deliverability, and why is it important?
                        </h3>
                    </div>

                    <div className="faq-item-5 bg-white shadow rounded-full p-4 flex items-center justify-between hover:shadow-lg transition">
                        <h3 className="text-lg font-medium text-gray-800 mr-4">
                            How long does it take to improve my email reputation?
                        </h3>
                        <button className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full focus:outline-none">
                            <PlusIconSvg />
                        </button>
                    </div>

                    <div className="faq-item-6 bg-white shadow rounded-full p-4 flex items-center justify-between hover:shadow-lg transition">
                        <button className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full focus:outline-none">
                            <PlusIconSvg />
                        </button>
                        <h3 className="text-lg font-medium text-gray-800 ml-4">
                            Can InboxPlease fix my domain’s email deliverability if it's been flagged as spam?
                        </h3>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default FAQs;