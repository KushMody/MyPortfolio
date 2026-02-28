import {
    Github,
    ExternalLink,
    Globe,
    Code,
    Smartphone,
    Database,
    Award
} from "lucide-react";

export const projects = [
    {
        id: 1,
        title: "CA/CMA Website",
        category: "web",
        description: "A frontend website for NEXTGEN HORIZON CONSULTANTS LLP.",
        longDescription: "A fully developed frontend website to showcase services, contact details, and the team for NEXTGEN HORIZON CONSULTANTS LLP. Created using online templates for a professional design.",
        image: "/src/assets/photos/CA_CMA_Website.png",
        technologies: ["HTML", "TailwindCSS", "ReactJS"],
        github: "https://github.com/KushMody",
        live: "https://next-gen-horizon.vercel.app",
        date: "2024"
    },
    {
        id: 2,
        title: "Paste App",
        category: "web",
        description: "A basic React app to create and store pastes in local storage.",
        longDescription: "Designed and developed a paste website to create a paste and store it in local Storage. Implements basic Redux and CRUD operations with AJAX calling.",
        image: "/src/assets/photos/PasteApp.png",
        technologies: ["HTML", "CSS", "JS", "ReactJS", "Redux"],
        github: "https://github.com/KushMody/PasteApp",
        live: "https://paste-app-pi-ashy.vercel.app/",
        date: "2024"
    },
    {
        id: 3,
        title: "Jfixo Chemical Brand",
        category: "web",
        description: "Modern product showcase and marketing website for construction chemicals.",
        longDescription: "Developed a responsive product showcase and marketing website for Jfixo, featuring animated scroll interactions, categorized product listings (Plastonex, Tilenex, Bondnex, Stone Nex), and smooth navigation for improved user experience and brand presentation.",
        image: "/src/assets/photos/Jfixo.png",
        technologies: ["React", "Tailwind CSS", "JavaScript"],
        github: "https://github.com/KushMody/Jfixo_Project",
        live: "http://jfixo.com/",
        date: "2026"

    },
    {
        id: 4,
        title: "Django CAPTCHA System",
        category: "web",
        description: "CAPTCHA-based security feature for Django authentication.",
        longDescription: "Created a CAPTCHA-based security feature for user authentication in Django applications. Generates CAPTCHA images dynamically to prevent automated bot registrations.",
        image: "/src/assets/photos/DjangoWebApp.png",
        technologies: ["Django", "Python"],
        github: "https://github.com/KushMody/DjangoCaptchaProject",
        live: "https://drive.google.com/file/d/1IDBQOhEkUpFauAfE49hyY4oXI7iD563M/view?usp=sharing",
        date: "2024"
    },
    {
        id: 5,
        title: "Task-List (MEAN Stack)",
        category: "web",
        description: "A task management website using the MEAN stack.",
        longDescription: "A website based on a simple concept of taking tasks and storing them in a MongoDB database. Built using the MEAN Stack (MongoDB, Express, Angular, Node.js).",
        image: "/src/assets/photos/Task_List.png",
        technologies: ["HTML", "AngularJS", "ExpressJS", "NodeJS", "MongoDB"],
        github: "https://github.com/KushMody/Task-List",
        live: "https://drive.google.com/file/d/15-AnuBRo5ZXAjP4nKMz2YIuv6UOkapmn/view?usp=sharing",
        date: "2023"
    },
    {
        id: 6,
        title: "StudySync",
        category: "web",
        description: "A simple responsive website.",
        longDescription: "My first HTML, CSS, and JS project. A simple responsive website demonstrating fundamental web development skills.",
        image: "/src/assets/photos/StudySync.png",
        technologies: ["HTML", "CSS", "JS"],
        github: "https://github.com/KushMody/STUDYSYNC",
        live: "https://drive.google.com/file/d/1ALe5BeCMqIWq1pi1_mDoTqjavxznsX_H/view?usp=sharing",
        date: "2023"
    },
    {
        id: 7,
        title: "MERN Auth",
        category: "web",
        description: "Authentication system using MERN stack.",
        longDescription: "A complete authentication system implementing login, signup, and secure routes using MongoDB, Express, React, and Node.js.",
        image: "/src/assets/photos/MERN Auth.png",
        technologies: ["MongoDB", "Express", "React", "Node.js"],
        github: "https://github.com/KushMody/mern-auth",
        live: "https://drive.google.com/file/d/1rtqnfBY1Sqy4fI6lomT7SoseAkscdmy1/view?usp=sharing",
        date: "2024"
    },
    {
        id: 8,
        title: "Movie Upload & Download Website",
        category: "web",
        description: "A full-stack platform for uploading, browsing, searching, and downloading movies with poster management.",
        longDescription: "A comprehensive MERN-stack application featuring a React frontend with Vite bundler and a Node.js/Express backend with MongoDB. Users can upload movies with posters, search across titles/genres/descriptions, browse paginated results, and download content. Includes rating system and file management.",
        image: "/src/assets/photos/Movie Upload & Download Website.png",
        technologies: ["React", "Vite", "Node.js", "Express", "MongoDB", "Mongoose", "Multer", "Axios", "CORS"],
        github: "https://github.com/KushMody/movie-download-website",
        live: "https://drive.google.com/file/d/1GZu4SZYp2UqtXe2Z8xQjm3wzGpDLTDT1/view?usp=sharing",
        date: "2024"
    },
    {
        id: 9,
        title: "Real-Time Face Blur",
        category: "CVIP",
        description: "Real-time face blurring using computer vision.",
        longDescription: "A Python-based computer vision project that detects faces in real-time and applies blurring for privacy, using OpenCV and YOLOv5.",
        image: "/src/assets/photos/Real_Time_Face_Blur.png",
        technologies: ["Python", "OpenCV", "YOLOv5"],
        github: "https://github.com/KushMody/CVIP",
        live: "https://github.com/KushMody/CVIP",
        date: "2024"
    },
    {
        id: 10,
        title: "AI Calculator",
        category: "mobile",
        description: "Android AI Calculator app using CameraX.",
        longDescription: "An Android application written in Kotlin that uses CameraX for visual input and AI for calculation processing.",
        image: "/src/assets/photos/AICalculator.png",
        technologies: ["Android", "Kotlin", "CameraX"],
        github: "https://github.com/KushMody/Android-Project",
        live: "https://github.com/KushMody/Android-Project",
        date: "2024"
    },
    {
        id: 11,
        title: "Submission Calculator",
        category: "mobile",
        description: "Android application for calculating submissions.",
        longDescription: "A utility Android app for tracking and calculating submissions.",
        image: "/src/assets/photos/Onlineanimatedimage.png",
        technologies: ["Android", "Java/Kotlin", "Gradle"],
        github: "https://github.com/KushMody/Submission-Calculator",
        live: "https://github.com/KushMody/Submission-Calculator",
        date: "2023"
    },
    {
        id: 12,
        title: "Flutter App",
        category: "mobile",
        description: "Cross-platform mobile application.",
        longDescription: "A mobile application built with Flutter and Dart for cross-platform compatibility.",
        image: "/src/assets/photos/Onlineanimatedimage.png",
        technologies: ["Flutter", "Dart"],
        github: "https://github.com/KushMody/flutter-app",
        live: "https://github.com/KushMody/flutter-app",
        date: "2024"
    }
];


