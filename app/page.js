'use client';

import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push("/dashboard");
  };

  const courses = [
    {
      title: "Data Science",
      description: "Learn to analyze, visualize, and unlock insights from data.",
      image: "/datasc.jpg", 
    },
    {
      title: "Python Programming",
      description: "Master Python, one of the most versatile programming languages.",
      image: "/python.jpg", 
    },
    {
      title: "Indian Constitution",
      description: "Understand the core principles of India’s Constitution and its evolution.",
      image: "/IndianConst.png",
    },
    {
      title: "React.js Development",
      description: "Build dynamic web applications with React and modern tools.",
      image: "/reactJs.png",
    },
    {
      title: "Atomic Structures",
      description: "Dive into the fundamentals of atoms and the building blocks of matter.",
      image: "/atomicSt.png",
    },
    {
      title: "JavaScript Essentials",
      description: "Get hands-on experience with JavaScript for interactive web development.",
      image: "/javaScript.png", // Replace with actual path
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-indigo-100">
      {/* Navbar */}
      <nav className="flex justify-between gap-2 items-center p-6 bg-white shadow-lg">
        <Image src={'/logo.svg'} alt='logo' width={40} height={40}/>
        <h1 className="text-3xl font-bold text-indigo-600">Learnify</h1>
        <UserButton />
      </nav>

      {/* Hero Section */}
      <header className="text-center py-20 bg-texture bg-fixed bg-cover">
        <h2 className="text-5xl font-extrabold text-gray-800 mb-6">
          Create and Share Your Own Courses
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Empower others with your knowledge. Start building your course today!
        </p>
        <Button
          onClick={handleGetStarted}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg"
        >
          Get Started
        </Button>
      </header>

      {/* Course Cards Section */}
      <section className="p-10 bg-texture bg-fixed bg-cover">
        <h3 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Explore Featured Courses
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <div className="h-40 bg-indigo-300 flex items-center justify-center">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  {course.title}
                </h4>
                <p className="text-gray-600">{course.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-center py-6 shadow-md">
        <p className="text-gray-600">&copy; 2024 CourseCraft. All rights reserved.</p>
        <p className="text-gray-600">&copy; Developed by Ayush Srivastava and Tanishq Jodhani</p>
        <section className="flex justify-center items-center space-x-8 p-6">
  <a href="https://www.linkedin.com/in/ayush-srivastava-279a64287/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-blue-700 transition-colors duration-300">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 transform transition-transform duration-300 hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 3h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1zM8 11v6M8 7h0m4 4v6m4-4v6M12 7h0m4 0h0" />
    </svg>
  </a>

  <a href="https://www.instagram.com/axxyushh/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-pink-600 transition-colors duration-300">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 transform transition-transform duration-300 hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.75 2h8.5a1.75 1.75 0 011.75 1.75v8.5a1.75 1.75 0 01-1.75 1.75h-8.5a1.75 1.75 0 01-1.75-1.75v-8.5A1.75 1.75 0 017.75 2zM12 6.75c-2.79 0-5.05 2.26-5.05 5.05 0 2.79 2.26 5.05 5.05 5.05 2.79 0 5.05-2.26 5.05-5.05 0-2.79-2.26-5.05-5.05-5.05zM12 14.75a2.75 2.75 0 100-5.5 2.75 2.75 0 000 5.5z" />
    </svg>
  </a>

  <a href="https://github.com/axxyushh" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-gray-700 transition-colors duration-300">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 transform transition-transform duration-300 hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2C6.48 2 2 6.48 2 12c0 4.42 3.15 8.17 7.57 9.49.55.1.75-.24.75-.51v-1.79c-3.14.68-3.81-1.52-3.81-1.52-.51-1.28-1.25-1.62-1.25-1.62-1.03-.71.08-.69.08-.69 1.14.08 1.74 1.18 1.74 1.18.97 1.65 2.55 1.18 3.17.91.1-.7.38-1.18.69-1.46-2.66-.31-5.45-1.32-5.45-5.89 0-1.31.47-2.39 1.24-3.24-.12-.31-.54-1.57.12-3.27 0 0 1.01-.32 3.3 1.23.96-.27 1.99-.41 3.01-.42 1.02.01 2.04.15 3.01.42 2.29-1.55 3.3-1.23 3.3-1.23.66 1.7.24 2.96.12 3.27.77.85 1.24 1.93 1.24 3.24 0 4.58-2.79 5.58-5.45 5.89.31.28.58.83.58 1.67v2.51c0 .27.2.61.75.51 4.42-1.32 7.57-5.07 7.57-9.49 0-5.52-4.48-10-10-10z" />
    </svg>
  </a>
</section>

      </footer>
    </div>
  );
}
