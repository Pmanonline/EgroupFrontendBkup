// import React, { useState } from "react";
// import {
//   Shield,
//   Book,
//   Phone,
//   Mail,
//   MapPin,
//   ChevronDown,
//   FileText,
//   Lock,
// } from "lucide-react";

// const PrivacyPolicy = () => {
//   const [activeSection, setActiveSection] = useState("terms");
//   const [expandedSections, setExpandedSections] = useState({});

//   const toggleSection = (sectionId) => {
//     setExpandedSections((prev) => ({
//       ...prev,
//       [sectionId]: !prev[sectionId],
//     }));
//   };

//   const Section = ({ title, children, id }) => (
//     <div className="border-b border-gray-200 last:border-b-0">
//       <button
//         onClick={() => toggleSection(id)}
//         className="w-full flex justify-between items-center py-4 px-6 hover:bg-gray-50 transition-colors duration-200">
//         <span className="font-medium text-gray-900">{title}</span>
//         <ChevronDown
//           className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
//             expandedSections[id] ? "transform rotate-180" : ""
//           }`}
//         />
//       </button>
//       {expandedSections[id] && (
//         <div className="px-6 py-4 bg-gray-50">{children}</div>
//       )}
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-4xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h1 className="text-3xl font-bold text-gray-900 mb-4">
//             Legal Information
//           </h1>
//           <div className="flex justify-center space-x-4 mb-8">
//             <button
//               onClick={() => setActiveSection("terms")}
//               className={`flex items-center px-6 py-3 rounded-lg transition-colors duration-200 ${
//                 activeSection === "terms"
//                   ? "bg-red-500 text-white"
//                   : "bg-white text-gray-700 hover:bg-gray-50"
//               }`}>
//               <FileText className="w-5 h-5 mr-2" />
//               Terms & Conditions
//             </button>
//             <button
//               onClick={() => setActiveSection("privacy")}
//               className={`flex items-center px-6 py-3 rounded-lg transition-colors duration-200 ${
//                 activeSection === "privacy"
//                   ? "bg-red-500 text-white"
//                   : "bg-white text-gray-700 hover:bg-gray-50"
//               }`}>
//               <Lock className="w-5 h-5 mr-2" />
//               Privacy Policy
//             </button>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//           {activeSection === "terms" ? (
//             <div>
//               <div className="p-6 bg-red-50">
//                 <div className="flex items-center mb-4">
//                   <Shield className="w-6 h-6 text-red-500 mr-2" />
//                   <h2 className="text-xl font-semibold text-gray-900">
//                     Terms and Conditions
//                   </h2>
//                 </div>
//                 <p className="text-gray-600">
//                   Effective Date: 23rd December, 2024
//                 </p>
//               </div>

//               <div className="divide-y divide-gray-200">
//                 <Section id="definitions" title="1. Definitions">
//                   <ul className="list-disc pl-6 space-y-2 text-gray-600">
//                     <li>
//                       "EGROUP" refers to the platform, including its website and
//                       related services.
//                     </li>
//                     <li>
//                       "USER" refers to any individual or entity accessing or
//                       using E-Group.
//                     </li>
//                     <li>
//                       "LINKED SITES" refers to third-party websites accessible
//                       via E-Groups.
//                     </li>
//                     <li>
//                       "CONTENT" refers to text, graphics, images, software, and
//                       other materials.
//                     </li>
//                   </ul>
//                 </Section>

//                 <Section id="acceptance" title="2. Acceptance of Terms">
//                   <div className="space-y-4 text-gray-600">
//                     <p>
//                       2.1. Users must be at least 18 years old or have legal
//                       capacity.
//                     </p>
//                     <p>
//                       2.2. E-Group reserves the right to modify terms at any
//                       time.
//                     </p>
//                   </div>
//                 </Section>

//                 {/* Add more sections following the same pattern */}
//               </div>
//             </div>
//           ) : (
//             <div>
//               <div className="p-6 bg-red-50">
//                 <div className="flex items-center mb-4">
//                   <Lock className="w-6 h-6 text-red-500 mr-2" />
//                   <h2 className="text-xl font-semibold text-gray-900">
//                     Privacy Policy
//                   </h2>
//                 </div>
//                 <p className="text-gray-600">Your privacy is important to us</p>
//               </div>

//               {/* Add Privacy Policy sections here */}
//             </div>
//           )}
//         </div>

//         {/* Contact Information */}
//         <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
//           <h3 className="text-lg font-semibold text-gray-900 mb-6">
//             Contact Information
//           </h3>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div className="flex items-start space-x-3">
//               <Mail className="w-5 h-5 text-red-500 mt-1" />
//               <div>
//                 <p className="font-medium text-gray-900">Email</p>
//                 <p className="text-gray-600">Egroup@essential.com</p>
//               </div>
//             </div>
//             <div className="flex items-start space-x-3">
//               <Phone className="w-5 h-5 text-red-500 mt-1" />
//               <div>
//                 <p className="font-medium text-gray-900">Phone</p>
//                 <p className="text-gray-600">08055556666</p>
//               </div>
//             </div>
//             <div className="flex items-start space-x-3">
//               <MapPin className="w-5 h-5 text-red-500 mt-1" />
//               <div>
//                 <p className="font-medium text-gray-900">Address</p>
//                 <p className="text-gray-600">
//                   24, Iyalla Street, Beside Shoprite, Alausa, Lagos State
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PrivacyPolicy;
import React, { useState } from "react";
import {
  Shield,
  Book,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  FileText,
  Lock,
  User,
  Cookie,
  Database,
  ShieldCheck,
  Globe,
} from "lucide-react";

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState("terms");
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (sectionId) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const Section = ({ title, children, id, icon: Icon }) => (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={() => toggleSection(id)}
        className="w-full flex justify-between items-center py-4 px-6 hover:bg-gray-50 transition-colors duration-200">
        <div className="flex items-center space-x-3">
          {Icon && <Icon className="w-5 h-5 text-red-500" />}
          <span className="font-medium text-gray-900">{title}</span>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
            expandedSections[id] ? "transform rotate-180" : ""
          }`}
        />
      </button>
      {expandedSections[id] && (
        <div className="px-6 py-4 bg-gray-50 prose max-w-none">{children}</div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Legal Information
          </h1>
          <div className="flex justify-center space-x-4 mb-8">
            <button
              onClick={() => setActiveSection("terms")}
              className={`flex items-center px-6 py-3 rounded-lg transition-colors duration-200 ${
                activeSection === "terms"
                  ? "bg-red-500 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-50"
              }`}>
              <FileText className="w-5 h-5 mr-2" />
              Terms & Conditions
            </button>
            <button
              onClick={() => setActiveSection("privacy")}
              className={`flex items-center px-6 py-3 rounded-lg transition-colors duration-200 ${
                activeSection === "privacy"
                  ? "bg-red-500 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-50"
              }`}>
              <Lock className="w-5 h-5 mr-2" />
              Privacy Policy
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {activeSection === "terms" ? (
            <div>
              <div className="p-6 bg-red-50">
                <div className="flex items-center mb-4">
                  <Shield className="w-6 h-6 text-red-500 mr-2" />
                  <h2 className="text-xl font-semibold text-gray-900">
                    Terms and Conditions
                  </h2>
                </div>
                <p className="text-gray-600">
                  Effective Date: 23rd December, 2024
                </p>
              </div>

              <div className="divide-y divide-gray-200">
                <Section id="definitions" title="1. Definitions" icon={Book}>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>EGROUP:</strong> The platform including its
                      website and related services.
                    </li>
                    <li>
                      <strong>USER:</strong> Any individual or entity accessing
                      E-Group.
                    </li>
                    <li>
                      <strong>LINKED SITES:</strong> Third-party websites
                      accessible via E-Group.
                    </li>
                    <li>
                      <strong>CONTENT:</strong> Text, graphics, images,
                      software, and other materials.
                    </li>
                  </ul>
                </Section>

                {/* Add all Terms sections following the same pattern */}
                <Section
                  id="acceptance"
                  title="2. Acceptance of Terms"
                  icon={ShieldCheck}>
                  <p>
                    <strong>2.1</strong> Users must be at least 18 years old or
                    have legal capacity.
                  </p>
                  <p>
                    <strong>2.2</strong> E-Group reserves the right to modify
                    terms at any time.
                  </p>
                </Section>

                <Section
                  id="use-platform"
                  title="3. Use of the Platform"
                  icon={Globe}>
                  <p>
                    <strong>3.1</strong> Directory service for third-party
                    websites.
                  </p>
                  <p>
                    <strong>3.2</strong> Prohibited activities include:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>Fraudulent or illegal activities</li>
                    <li>Disrupting platform functionality</li>
                    <li>Identity misrepresentation</li>
                  </ul>
                </Section>

                {/* Continue adding remaining terms sections... */}
              </div>
            </div>
          ) : (
            <div>
              <div className="p-6 bg-red-50">
                <div className="flex items-center mb-4">
                  <Lock className="w-6 h-6 text-red-500 mr-2" />
                  <h2 className="text-xl font-semibold text-gray-900">
                    Privacy Policy
                  </h2>
                </div>
                <p className="text-gray-600">
                  Effective Date: 23rd December, 2024
                </p>
              </div>

              <div className="divide-y divide-gray-200">
                <Section
                  id="data-collection"
                  title="1. Information We Collect"
                  icon={Database}>
                  <p>
                    <strong>1.1 Personal Information:</strong>
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Contact details (email, phone number)</li>
                    <li>Demographic information</li>
                    <li>Payment information</li>
                  </ul>

                  <p className="mt-4">
                    <strong>1.2 Usage Data:</strong>
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>IP addresses</li>
                    <li>Browser type</li>
                    <li>Pages visited</li>
                  </ul>
                </Section>

                <Section
                  id="data-use"
                  title="2. How We Use Information"
                  icon={Shield}>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide and maintain services</li>
                    <li>Improve user experience</li>
                    <li>Communicate with users</li>
                    <li>Prevent fraudulent activities</li>
                  </ul>
                </Section>

                <Section id="data-sharing" title="3. Data Sharing" icon={User}>
                  <p>We may share information with:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Service providers</li>
                    <li>Legal authorities when required</li>
                    <li>Business partners with user consent</li>
                  </ul>
                </Section>

                <Section
                  id="security"
                  title="4. Data Security"
                  icon={ShieldCheck}>
                  <p>We implement security measures including:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>SSL encryption</li>
                    <li>Regular security audits</li>
                    <li>Access controls</li>
                  </ul>
                </Section>

                <Section id="cookies" title="5. Cookies" icon={Cookie}>
                  <p>We use cookies to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Remember user preferences</li>
                    <li>Analyze traffic patterns</li>
                    <li>Deliver targeted advertising</li>
                  </ul>
                </Section>

                {/* Add remaining privacy policy sections... */}
              </div>
            </div>
          )}
        </div>

        {/* Contact Information */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            Contact Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start space-x-3">
              <Mail className="w-5 h-5 text-red-500 mt-1" />
              <div>
                <p className="font-medium text-gray-900">Email</p>
                <p className="text-gray-600">Egroup@essential.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Phone className="w-5 h-5 text-red-500 mt-1" />
              <div>
                <p className="font-medium text-gray-900">Phone</p>
                <p className="text-gray-600">08055556666</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-red-500 mt-1" />
              <div>
                <p className="font-medium text-gray-900">Address</p>
                <p className="text-gray-600">
                  24, Iyalla Street, Beside Shoprite, Alausa, Lagos State
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
