import React from "react";
import AboutImage from "../assets/images/aboutImage.png";

const AboutUs = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div className="relative bg-blue-900 text-white h-[60vh] md:h-[70vh]">
        <img
          src={AboutImage}
          alt="Circuit Background"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Welcome to Essential Innovations
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Innovating the digital transformation landscape in Africa and
              beyond. Focused on delivering cutting-edge solutions to meet
              today's tech demands.
            </p>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-16">
        {/* What We Do */}
        <section className="relative">
          <div className="absolute -left-4 top-0 h-full sm:w-1/2 mod:w-full bg-HeroClr z-0" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 pl-8 md:pl-16">
              What We Do
            </h2>
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl">
              <p className="text-gray-600 text-lg leading-relaxed">
                Welcome to Essential Innovations, where cutting-edge technology
                meets unparalleled innovation. Located in the heart of Nigeria,
                TechNex Innovations is committed to driving digital
                transformation across Africa and beyond.
              </p>
              <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                Founded in 2015, Essential Innovations has grown into a leading
                tech company specializing in software development, IT
                consulting, and digital solutions. Our diverse team of experts
                is dedicated to delivering high-quality, customized technology
                services that empower businesses to thrive in the digital age.
              </p>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="relative">
          <div className="absolute -right-4 top-0 h-full  sm:w-1/2 mod:w-full bg-HeroClr z-0" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 pr-8 md:pr-16 text-right">
              Our Mission
            </h2>
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl">
              <p className="text-gray-600 text-lg leading-relaxed">
                At Essential, our mission is to leverage technology to solve
                real-world problems, enhance business efficiency, and create a
                more connected and prosperous world. We believe in the power of
                innovation to transform lives and are dedicated to making a
                positive impact in every community we serve.
              </p>
            </div>
          </div>
        </section>

        {/* Our Vision */}
        <section className="relative">
          <div className="absolute -left-4 top-0 h-full  sm:w-1/2 mod:w-full bg-HeroClr z-0" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 pl-8 md:pl-16">
              Our Vision
            </h2>
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl">
              <p className="text-gray-600 text-lg leading-relaxed">
                Our vision is to become the foremost tech company in Africa,
                renowned for our commitment to excellence, innovation, and
                social responsibility. We aspire to lead the way in
                technological advancements and set the standard for quality and
                reliability in the tech industry.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
