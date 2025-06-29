import React from 'react';
import Pythonpro from "./photos/pythonpro.png"

const Projects = () => {
    return (
        <div className="w-full flex flex-col items-center bg-[#E8DCCC] py-12 relative">

            {/* Main Content */}
            <div className="w-4/5 md:w-3/5 sm:w-[90%] mt-23 sm:mt-23 flex flex-col gap-8">
                {/* Section One - Introduction */}
                <div className="flex flex-col gap-8">
                    <div className="flex justify-center items-center gap-2">
                        <div className="w-4 h-4 bg-blue-500"></div>
                        <h2 className="text-2xl font-bold">Projects</h2>
                    </div>
                    <div className="text-lg text-center sm:text-base">
                        These are some of the projects which I created alone or in a team. Other than this there are some
                        projects related to game development which I created using C#.
                    </div>
                </div>

                {/* Project 1 */}
                <div className="w-full bg-white flex flex-row">
                    <div className="lg:w-full flex flex-col gap-8">
                        <div className="flex gap-8 mt-8 ml-8">
                            <div className="w-[3%] bg-blue-500"></div>
                            <div className="flex flex-col">
                                <h3 className="text-xl font-semibold">Project 1 (Simple responsive website)</h3>
                                <p className="text-gray-600">Full developed by me</p>
                            </div>
                        </div>
                        <div className="mx-8 mb-8">
                            <h4 className="font-semibold">Technologies: HTML, CSS, JS</h4>
                            <ul className="list-disc ml-5 mt-2">
                                <li>Just a simple responsive website direct website</li>
                                <li>My First HTML, CSS and JS project</li>
                            </ul>
                            <br />
                            <p className='font-semibold'>Project Link: <a href="https://github.com/KushMody/STUDYSYNC"
                            target='_blank' className='text-blue-500'>Click me</a></p>
                        </div>
                    </div>
                </div>

                {/* Project 2 */}
                <div className="w-full bg-white flex flex-row lg:flex-col">
                    <div className="lg:w-full flex flex-col gap-8">
                        <div className="flex gap-8 mt-8 ml-8">
                            <div className="w-[3%] bg-blue-500"></div>
                            <div className="flex flex-col">
                                <h3 className="text-xl font-semibold">Project 2 (Basic React app)</h3>
                                <p className="text-gray-600">Fully developed by me</p>
                            </div>
                        </div>
                        <div className="mx-8 mb-8">
                            <h4 className="font-semibold">Technologies: HTML, CSS, JS, ReactJS</h4>
                            <ul className="list-disc ml-5 mt-2">
                                <li>Designed and developed by me a paste website to create a paste and store it in local Storage.</li>
                                <li>Some basic things of react like redux is used.</li>
                                <li>Simple CRUD Operation can be done on it.</li>
                                <li>And due to the use of React it uses AJAX calling.</li>
                            </ul>
                            <br />
                            <p className='font-semibold'>Project Link : <a href="https://github.com/KushMody/PasteApp" target='_blank' className='text-blue-500'>Click me</a></p>
                        </div>
                        
                    </div>
                    
                </div>

                {/* Project 3 */}
                <div className="w-full bg-white flex flex-row">
                    <div className="lg:w-full flex flex-col gap-8">
                        <div className="flex gap-8 mt-8 ml-8">
                            <div className="w-[3%] bg-blue-500"></div>
                            <div className="flex flex-col">
                                <h3 className="text-xl font-semibold">Project 3 (CAPTCHA System for Django Authentication)</h3>
                                <p className="text-gray-600">Full developed by me</p>
                            </div>
                        </div>
                        <div className="mx-8 mb-8">
                            <h4 className="font-semibold">Technologies: Django, Python</h4>
                            <ul className="list-disc ml-5 mt-2">
                                <li>Created a CAPTCHA-based security feature for user authentication in Django applications.</li>
                                <li>Generated CAPTCHA images dynamically without storing them.</li>
                                <li>Improved security by preventing automated bot registrations and spam.</li>
                                <li>Optimized user experience by ensuring readability and accessibility.</li>
                            </ul>
                            <br />
                            <p className='font-semibold'>Project Link: <a href="https://github.com/KushMody/DjangoCaptchaProject"
                            target='_blank' className='text-blue-500'>Click me</a></p>
                        </div>
                    </div>
                </div>
                
                {/* Project 4*/}
                <div className="w-full bg-white flex flex-row lg:flex-col">
                    <div className="lg:w-full flex flex-col gap-8">
                        <div className="flex gap-8 mt-8 ml-8">
                            <div className="w-[3%] bg-blue-500"></div>
                            <div className="flex flex-col">
                                <h3 className="text-xl font-semibold">Project 5 (Task-List)</h3>
                                <p className="text-gray-600">Full developed by me</p>
                            </div>
                        </div>
                        <div className="mx-8 mb-8">
                            <h4 className="font-semibold">Technologies: HTML, AngularJS, ExpressJS, NodeJS, MongoDB</h4>
                            <ul className="list-disc ml-5 mt-2">
                                <li>It is a website that is based on a simple concept of taking task and storing it in monogodb database.</li>
                                <li>This is done using MEAN Stack.</li>
                                <li>Its main purpose it to store the task list of any individual or a group so that they can know what is to be done next.</li>
                            </ul>
                            <br />
                            <p className='font-semibold'>Project Link: <a href="https://github.com/KushMody/Task-List" target='_blank' className='text-blue-500'>Click me</a></p>
                        </div>
                    </div>
                </div>

                {/* Project */}
                <div className="w-full bg-white flex flex-row lg:flex-col">
                    <div className="lg:w-full flex flex-col gap-8">
                        <div className="flex gap-8 mt-8 ml-8">
                            <div className="w-[3%] bg-blue-500"></div>
                            <div className="flex flex-col">
                                <h3 className="text-xl font-semibold">Project 5 (CA/CMA Website)</h3>
                                <p className="text-gray-600">Full developed by me</p>
                            </div>
                        </div>
                        <div className="mx-8 mb-8">
                            <h4 className="font-semibold">Technologies: HTML, CSS, ReactJS</h4>
                            <ul className="list-disc ml-5 mt-2">
                                <li>It is a website that is only having the frontend functionalities.</li>
                                <li>For getting a proper design I used the online templates to create it.</li>
                                <li>It is created in order to show the services, contact details and the team to make other people aware about the company NEXTGEN HORIZON CONSULTANTS LLP.</li>
                            </ul>
                            <br />
                            <p className='font-semibold'>Project Link:<a href="https://next-gen-horizon.vercel.app/#/" target='_blank' className='text-blue-500'> Click me </a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;