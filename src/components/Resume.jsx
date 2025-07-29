import resume from "./resume.pdf"

const Resume = () => {
    return (
        <div className="w-full flex flex-col items-center bg-[#E8DCCC] py-10 md:py-12 lg:py-16">

            {/* Main content */}
            <div className="w-4/5 lg:w-3/5 md:w-4/5 sm:w-11/12 mt-20 sm:mt-20">
                {/* Heading */}
                <div className="flex justify-center items-center gap-4 text-2xl font-bold">
                    <div className="w-4 h-4 bg-blue-500"></div>
                    <h2>Resume</h2>
                </div>

                {/* Education Section */}
                <div className="mt-10 sm:mt-8">
                    <div className="flex justify-between items-center md:flex-row mb-6 sm:mb-4 sm:text-sm sm:items-start sm:gap-4">
                        <h2 className="text-2xl font-bold">Education</h2>
                        <a href={resume} target="_blank">
                            <button className="px-4 py-2 border border-blue-500 bg-blue-500 text-white rounded-full 
                                      hover:bg-white hover:text-blue-500 transition-all duration-300
                                      text-xs cursor-pointer">
                                DOWNLOAD CV
                            </button>
                        </a>
                    </div>
                    <div className="bg-white p-2 lg:p-6 md:p-4 sm:p-2 shadow-lg shadow-gray-300 flex flex-col gap-4">
                        <div className="flex gap-16 md:gap-8 sm:gap-2 sm:text-sm">
                            <p className="font-semibold">SSC completed from:</p>
                            <p>Sheth Dhanjisha Rustamji Umrigar Memorial School</p>
                        </div>
                        <div className="flex gap-16 md:gap-8 sm:gap-2 sm:text-sm">
                            <p className="font-semibold">HSC completed from:</p>
                            <p>St. Xavier's High School</p>
                        </div>
                        <div className="flex gap-16 md:gap-8 sm:gap-2 sm:text-sm">
                            <p className="font-semibold">Degree & Major:</p>
                            <p>Bachelor's in Computer Science with specialization in IoT</p>
                        </div>
                        <div className="flex gap-16 md:gap-8 sm:gap-2 sm:text-sm">
                            <p className="font-semibold">University Name:</p>
                            <p>GH Patel College of Engineering and Technology</p>
                        </div>
                        <div className="flex gap-16 md:gap-8 sm:gap-2 sm:text-sm">
                            <p className="font-semibold">Expected Graduation Year:</p>
                            <p>2026</p>
                        </div>
                    </div>
                </div>

                {/* Skills Section */}
                <div className="mt-10 sm:mt-8">
                    <h2 className="text-2xl font-bold mb-6 sm:mb-4">Skills</h2>
                    <div className="bg-white p-2 lg:p-6 md:p-4 sm:p-2 shadow-lg shadow-gray-300">
                        <h4 className="font-semibold text-lg mb-4">Technical Skills</h4>
                        <div className="space-y-4 mb-6 sm:text-sm">
                            <div className="flex gap-16 md:gap-8 sm:gap-2">
                                <p className="font-semibold">Programming Languages:</p>
                                <p>C, C++, Python, HTML, CSS, JavaScript, Java</p>
                            </div>
                            <div className="flex gap-16 md:gap-8 sm:gap-2">
                                <p className="font-semibold">Web Development:</p>
                                <p>Django, AngularJS, Node.js, HTML, CSS</p>
                            </div>
                            <div className="flex gap-16 md:gap-8 sm:gap-2">
                                <p className="font-semibold">Database Management:</p>
                                <p>SQLite, MongoDB</p>
                            </div>
                            <div className="flex gap-16 md:gap-8 sm:gap-2">
                                <p className="font-semibold">Version Control:</p>
                                <p>Git, GitHub</p>
                            </div>
                            <div className="flex gap-16 md:gap-8 sm:gap-2">
                                <p className="font-semibold">Algorithms & Data Structures:</p>
                                <p>Good foundation</p>
                            </div>
                        </div>

                        <h4 className="font-semibold text-lg mb-4">Soft Skills</h4>
                        <div className="space-y-4 sm:text-sm">
                            <div className="flex gap-16 md:gap-8 sm:gap-2">
                                <p className="font-semibold">Problem-Solving:</p>
                                <p>Preparing for GATE, working on algorithmic problems</p>
                            </div>
                            <div className="flex gap-16 md:gap-8 sm:gap-2">
                                <p className="font-semibold">Project Management:</p>
                                <p>Built multiple projects</p>
                            </div>
                            <div className="flex gap-16 md:gap-8 sm:gap-2">
                                <p className="font-semibold">Time Management:</p>
                                <p>Balancing academics, gym, and project development</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Extracurricular Section */}
                <div className="mt-10 sm:mt-8 mb-6">
                    <h2 className="text-2xl font-bold mb-6 sm:mb-4">Extracurriculars</h2>
                    <div className="bg-white p-2 lg:p-6 md:p-4 sm:p-2 shadow-lg shadow-gray-300 sm:text-sm">
                        <div className="flex gap-16 md:gap-8 sm:gap-4 mb-2">
                            <p className="font-semibold">Member:</p>
                            <p>Coordinated in some of the college events like Technica</p>
                        </div>
                        <div className="flex gap-16 md:gap-8 sm:gap-4 mb-2">
                            <p className="font-semibold">Web Development:</p>
                            <p>Worked on multiple projects like my sister's website</p>
                        </div>
                        <div className="flex gap-16 md:gap-8 sm:gap-4 mb-2">
                            <p className="font-semibold">Game Development:</p>
                            <p>Worked on projects using Unreal Engine and Unity</p>
                        </div>
                        <div className="flex gap-16 md:gap-8 sm:gap-2">
                            <p className="font-semibold">Active Gym Enthusiast:</p>
                            <p>Focusing on weight loss and fitness improvement</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;