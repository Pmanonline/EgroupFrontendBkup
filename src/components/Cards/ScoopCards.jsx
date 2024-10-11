// import React, { useState, useEffect } from "react";
// import { Calendar } from "lucide-react";
// const backendURL =
//   import.meta.env.MODE === "production"
//     ? import.meta.env.VITE_BACKEND_URL
//     : "http://localhost:3001";

// const BlogCard = ({ image, title, date,slug }) => (
//   <div className="max-w-sm rounded overflow-hidden shadow-lg">
//     <img
//       className="w-full h-48 object-cover"
//       src={`${backendURL}${image}`}
//       alt={image}
//     />
//     <div className="px-6 py-4">
//       <div className="font-bold text-lg text-start items-center align-middle mx-auto mb-2">
//         {title}
//       </div>
//       <p className="text-gray-600 text-xs flex items-center">
//         <Calendar className="w-3 h-3 mr-2" />
//         {date}
//       </p>
//     </div>
//   </div>
// );

// const BlogCardGrid = ({ posts }) => (
//   <div className="container mx-auto px-4">
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//       {posts.map((post) => (
//         <BlogCard key={post._id} {...post} />
//       ))}
//     </div>
//   </div>
// );

// const ScoopCards = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await fetch(
//           `${backendURL}/api/getPosts?category=Scoop`
//         );
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const data = await response.json();
//         setPosts(data.posts);
//       } catch (error) {
//         console.error("Error fetching posts:", error);
//       }
//     };

//     fetchPosts();
//   }, []);

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     const day = date.getDate();
//     const month = date.toLocaleString("default", { month: "long" });
//     const year = date.getFullYear();
//     return `${day} ${month} ${year}`;
//   };

//   const formattedPosts = posts.map((post) => ({
//     ...post,
//     date: formatDate(post.createdAt),
//     image: post.image || "/placeholder-image.jpg", // Fallback to a placeholder if image is missing
//   }));

//   return (
//     <div className="p-4">
//       <BlogCardGrid posts={formattedPosts} />
//     </div>
//   );
// };

// export default ScoopCards;
import React, { useState, useEffect } from "react";
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const backendURL =
  import.meta.env.MODE === "production"
    ? import.meta.env.VITE_BACKEND_URL
    : "http://localhost:3001";

// const BlogCard = ({ image, title, date, slug }) => (
//   <Link to={`/post/${slug}`} className="block">
//     <div className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
//       <img
//         className="w-full h-48 object-cover"
//         src={`${backendURL}${image}`}
//         alt={title}
//       />
//       <div className="px-6 py-4">
//         <div className="font-bold text-lg text-start items-center align-middle mx-auto mb-2">
//           {title}
//         </div>
//         <p className="text-gray-600 text-xs flex items-center">
//           <Calendar className="w-3 h-3 mr-2" />
//           {date}
//         </p>
//       </div>
//     </div>
//   </Link>
// );
const BlogCard = ({ image, title, date, slug }) => (
  <Link to={`/post/${slug}`} className="block">
    <div className="max-w-sm h-80 rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
      <img
        className="w-full h-48 object-cover"
        src={`${backendURL}${image}`}
        alt={title}
      />
      <div className="px-6 py-4 flex flex-col justify-between flex-grow">
        <div className="font-bold text-lg text-start mb-2">{title}</div>
        <p className="text-gray-600 text-xs flex items-center">
          <Calendar className="w-3 h-3 mr-2" />
          {date}
        </p>
      </div>
    </div>
  </Link>
);

const BlogCardGrid = ({ posts }) => (
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {posts.slice(0, 6).map((post) => (
        <BlogCard key={post._id} {...post} />
      ))}
    </div>
  </div>
);

const ScoopCards = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          `${backendURL}/api/getPosts?category=Scoop&limit=6`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setPosts(data.posts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  const formattedPosts = posts.map((post) => ({
    ...post,
    date: formatDate(post.createdAt),
    image: post.image || "/placeholder-image.jpg",
  }));

  return (
    <div className="p-4">
      <BlogCardGrid posts={formattedPosts} />
    </div>
  );
};

export default ScoopCards;
