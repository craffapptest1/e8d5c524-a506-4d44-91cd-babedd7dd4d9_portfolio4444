import Link from "next/link";
import Image from "next/image";
import { FiUser, FiCode, FiMail, FiDownload, FiEye, FiArrowRight } from "react-icons/fi";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 text-center relative overflow-hidden">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-6 text-center">
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1680781337016-3ce5921f5c84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzAxMzF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NTIwNjM5NjB8&ixlib=rb-4.1.0&q=80&w=1080"
                alt="professional developer workspace with modern setup and creative portfolio projects"
                width={150}
                height={150}
                priority
                className="rounded-full shadow-lg border-4 border-indigo-100 transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Hello, I'm a Developer
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl leading-relaxed">
                Welcome to my compact portfolio showcasing my skills, projects, and professional journey in web development
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/portfolio"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-indigo-600 px-8 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:bg-indigo-700 hover:shadow-xl hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 group"
              >
                View Portfolio
                <FiEye className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-gray-200 bg-white px-8 text-sm font-medium shadow-lg transition-all duration-300 hover:bg-gray-50 hover:shadow-xl hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 group"
              >
                Get In Touch
                <FiMail className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
                About Me
              </h2>
              <p className="text-gray-600 md:text-lg">
                A passionate developer focused on creating impactful digital experiences
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  I'm a dedicated web developer with a passion for creating clean, efficient, and user-friendly applications. 
                  My journey in tech has been driven by curiosity and a desire to solve real-world problems through code.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">React</span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">Next.js</span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">TypeScript</span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">Node.js</span>
                </div>
                <Link
                  href="/about"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium transition-colors group"
                >
                  Learn more about me
                  <FiArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1719253479758-9ab3a77e3af5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzAxMzF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NTIwNjM5NjN8&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="developer working on creative coding projects with modern technology stack"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
                Skills & Expertise
              </h2>
              <p className="text-gray-600 md:text-lg">
                Technologies and tools I work with to bring ideas to life
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center space-y-4 p-6 rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105">
                <div className="p-3 rounded-full bg-indigo-100">
                  <FiCode className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold">Frontend Development</h3>
                <p className="text-sm text-gray-600 text-center">
                  Creating responsive and interactive user interfaces with modern frameworks and libraries
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 p-6 rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105">
                <div className="p-3 rounded-full bg-indigo-100">
                  <FiUser className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold">User Experience</h3>
                <p className="text-sm text-gray-600 text-center">
                  Designing intuitive and accessible user experiences that delight and engage users
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 p-6 rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105">
                <div className="p-3 rounded-full bg-indigo-100">
                  <FiDownload className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold">Full Stack</h3>
                <p className="text-sm text-gray-600 text-center">
                  End-to-end development from database design to deployment and maintenance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
                Featured Work
              </h2>
              <p className="text-gray-600 md:text-lg">
                A selection of my recent projects and accomplishments
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105">
                <Image
                  src="https://images.unsplash.com/photo-1706778573754-e52010c13b97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzAxMzF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NTIwNjM5NjZ8&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="modern web application interface showcasing clean design and user-friendly features"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Web Application</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    A modern web application built with React and Next.js, featuring responsive design and smooth user interactions.
                  </p>
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium transition-colors group"
                  >
                    View Project
                    <FiArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105">
                <Image
                  src="https://images.unsplash.com/photo-1577782545502-63a1850570b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzAxMzF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NTIwNjM5NzB8&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="creative portfolio showcase displaying innovative design and development solutions"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Creative Solutions</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Innovative solutions combining creativity with technical expertise to deliver exceptional user experiences.
                  </p>
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium transition-colors group"
                  >
                    View Project
                    <FiArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link
                href="/portfolio"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-indigo-600 px-8 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:bg-indigo-700 hover:shadow-xl hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                View All Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
              Let's Work Together
            </h2>
            <p className="text-gray-600 md:text-lg mb-8">
              Ready to bring your ideas to life? I'm always excited to collaborate on new projects and challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-indigo-600 px-8 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:bg-indigo-700 hover:shadow-xl hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 group"
              >
                Contact Me
                <FiMail className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/resume"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-gray-200 bg-white px-8 text-sm font-medium shadow-lg transition-all duration-300 hover:bg-gray-50 hover:shadow-xl hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 group"
              >
                Download Resume
                <FiDownload className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}