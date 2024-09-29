import React from 'react';
import UserClass from './UserClass';

const About = () => {
    return (
        <div className="flex flex-col items-center justify-center p-6 m-4">
            <h1 className="text-4xl font-bold mb-4 text-gray-800 text-center">About Us</h1>
            <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-5xl">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/byilgyrcfz690ryoasww " alt="Delicious Food" className="w-full lg:w-1/2 h-[500px] mb-6 lg:mb-0 rounded-lg shadow-lg" />
                <div className="text-center lg:text-left lg:ml-6">
                    <p className="text-lg text-gray-700">
                        Welcome to our app, your number one source for all things food. We're dedicated to giving you the very best of food ordering experience, with a focus on reliability, customer service, and uniqueness.
                    </p>
                    <p className="text-lg text-gray-700 mt-4">
                    Our passion for delivering hot and fresh meals to your doorstep drove us and gave us the impetus to turn hard work and inspiration into a booming online food ordering service.
                    </p>
                    <p className="text-lg text-gray-700 mt-4">
                        We hope you enjoy our service as much as we enjoy offering it to you. If you have any questions or comments, please don't hesitate to contact us.
                    </p>
                    <p className="text-lg text-gray-700 mt-4 font-bold">
                        Sincerely, <br />
                        The Foodie Team
                    </p>
                    <div className="mt-8">
                        <h2 className="text-2xl font-bold mb-4 text-gray-800">Built by:</h2>
                        {/* Display UserClass component */}
                        <UserClass className="text-lg text-gray-700"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
