import React, { useState } from "react";
import { Card } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "emailjs-com";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Alert, AlertDescription } from "../components/tools/Alert";

const schema = yup.object().shape({
  fullName: yup.string().required("Full Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup.string().required("Phone number is required"),
  subject: yup.string().required("Subject is required"),
  message: yup.string().required("Message is required"),
});

const ContactUs = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertConfig, setAlertConfig] = useState({
    variant: "default",
    message: "",
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const showAlertMessage = (message, variant = "default") => {
    setAlertConfig({ message, variant });
    setShowAlert(true);
  };

  const sendEmail = async (data) => {
    setIsLoading(true);
    try {
      const templateParams = {
        to_name: "Egroup",
        from_name: data.fullName,
        subject: data.subject,
        message: data.message,
        reply_to: data.email,
        phone: data.phone,
      };

      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        templateParams,
        "YOUR_PUBLIC_KEY"
      );

      showAlertMessage(
        "Message sent successfully! We'll get back to you soon.",
        "success"
      );
      reset();
    } catch (error) {
      showAlertMessage(
        "Failed to send message. Please try again later.",
        "destructive"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      details: "24 Iyalla street, beside shoprite, Ikeja, Lagos, Nigeria",
    },
    {
      icon: Phone,
      title: "Phone Number",
      details: "+234 7000 555 666",
    },
    {
      icon: Mail,
      title: "Email Address",
      details: "info@egroup.com.ng",
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: "Monday - Friday: 8:00 AM - 6:00 PM",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-gradient-to-r from-red-700 to-red-900">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl">Get in touch with our team</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {showAlert && (
          <Alert variant={alertConfig.variant} className="mb-6">
            <AlertDescription>{alertConfig.message}</AlertDescription>
          </Alert>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-red-700 mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <info.icon className="w-6 h-6 text-red-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {info.title}
                      </h3>
                      <p className="text-gray-600">{info.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-6">
              <h2 className="text-2xl font-bold text-red-700 mb-6">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit(sendEmail)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      {...register("fullName")}
                      className={`w-full rounded-md border ${
                        errors.fullName ? "border-red-500" : "border-gray-300"
                      } px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500`}
                      placeholder="John Doe"
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      {...register("email")}
                      className={`w-full rounded-md border ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      } px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      {...register("phone")}
                      className={`w-full rounded-md border ${
                        errors.phone ? "border-red-500" : "border-gray-300"
                      } px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500`}
                      placeholder="+234 123 456 7890"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      {...register("subject")}
                      className={`w-full rounded-md border ${
                        errors.subject ? "border-red-500" : "border-gray-300"
                      } px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500`}
                      placeholder="How can we help?"
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    {...register("message")}
                    className={`w-full rounded-md border ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    } px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500`}
                    placeholder="Your message here..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full md:w-auto bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-md transition-colors duration-300 ${
                    isLoading ? "opacity-50 cursor-not-allowed" : ""
                  }`}>
                  {isLoading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
