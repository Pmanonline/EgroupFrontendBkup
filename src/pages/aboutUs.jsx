import React from "react";
import AboutImage from "../assets/images/aboutImage.png";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-">
      <div className="relative bg-blue-900 text-white text-center h-screen">
        <img
          src={AboutImage}
          alt="Circuit Background"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        {/* Centering Content with Flexbox */}
        <div className="relative z-10 max-w-2xl mx-auto px-4 flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to TechBiz Innovations
          </h1>
          <p className="text-lg">
            Innovating the digital transformation landscape in Africa and
            beyond. Focused on delivering cutting-edge solutions to meet today's
            tech demands.
          </p>
        </div>
      </div>

      {/* What We Do Section */}

      <section className="bg-white py-8">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center  p-6 rounded-lg mb-10 ">
            <p>
              Welcome to TechNex Innovations, where cutting-edge technology
              meets unparalleled innovation. Located in the heart of Nigeria,
              TechNex Innovations is committed to driving digital transformation
              across Africa and beyond.
            </p>
          </div>
        </div>
        <h2 className="text-2xl mid:text-lg font-bold text-start mb-4 bg-HeroClr text-white p-6 w-[50%] ">
          <span className="lg:ml-[10rem]">What We Do</span>
        </h2>
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center  p-6 rounded-lg ">
            <p>
              Founded in 2015, Essential Innovations has grown into a leading
              tech company specializing in software development, IT consulting,
              and digital solutions. Our diverse team of experts is dedicated to
              delivering high-quality, customized technology services that
              empower businesses to thrive in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}

      <section className="bg-white py-8">
        {/* Heading positioned from the right */}
        <div className="flex justify-end">
          <h2 className="text-2xl mid:text-lg font-bold text-end mb-4 bg-HeroClr text-white p-6 w-[50%]">
            <span className="lg:mr-[10rem]">Our Mission</span>
          </h2>
        </div>

        {/* Content Section */}
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center p-6 rounded-lg">
            <p>
              At Essential, our mission is to leverage technology to solve
              real-world problems, enhance business efficiency, and create a
              more connected and prosperous world. We believe in the power of
              innovation to transform lives and are dedicated to making a
              positive impact in every community we serve.
            </p>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}

      <section className="bg-white py-8">
        <h2 className="text-2xl mid:text-lg font-bold text-start mb-4 bg-HeroClr text-white p-6 w-[50%] ">
          <span className="lg:ml-[10rem]">Our Vision</span>
        </h2>
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center  p-6 rounded-lg ">
            <p>
              Our vision is to become the foremost tech company in Africa,
              renowned for our commitment to excellence, innovation, and social
              responsibility. We aspire to lead the way in technological
              advancements and set the standard for quality and reliability in
              the tech industry.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
