// import React, { useState } from "react";
// import { Play } from "lucide-react";

// const VideoCard = ({ videoSrc, views, thumbnail }) => {
//   const [isPlaying, setIsPlaying] = useState(false);

//   const handlePlayPause = () => {
//     setIsPlaying(!isPlaying);
//   };

//   return (
//     <div
//       className={`relative overflow-hidden rounde-lg group transition-all ${
//         isPlaying ? "h-80 md:h-96" : "h-64 md:h-80" // Increased height
//       }`}
//     >
//       {!isPlaying ? (
//         <img
//           src={thumbnail}
//           alt="Video thumbnail"
//           className="w-full h-full object-cover"
//         />
//       ) : (
//         <video
//           src={videoSrc}
//           controls
//           autoPlay
//           className="w-full h-full object-cover"
//         />
//       )}
//       {!isPlaying && (
//         <div
//           onClick={handlePlayPause}
//           className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
//         >
//           <Play className="text-white w-12 h-12" />
//         </div>
//       )}
//       <div className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded">
//         {views} views
//       </div>
//     </div>
//   );
// };

// const ShortVideosSection = () => {
// const videos = [
//   {
//     id: 1,
//     videoSrc: "/videos/video.mp4",
//     views: "5,245",
//     thumbnail: "/videos/coverVideo.png",
//   },
//   {
//     id: 2,
//     videoSrc: "/videos/video.mp4",
//     views: "3,245",
//     thumbnail: "./videos/coverVideo.png",
//   },
//   {
//     id: 3,
//     videoSrc: "/videos/video.mp4",
//     views: "5,935",
//     thumbnail: "/videos/coverVideo.png",
//   },
//   {
//     id: 4,
//     videoSrc: "/videos/video.mp4",
//     views: "3,247",
//     thumbnail: "/videos/coverVideo.png",
//   },
// ];

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="flex justify-between items-center mb-4">
//         <span href="#" className="text-blue-black font-bold text-2xl">
//           Short Videos
//         </span>
//         <a href="#" className="text-gray-800 font-bold hover:underline">
//           See All
//         </a>
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-6">
//         {videos.map((video) => (
//           <VideoCard key={video.id} {...video} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ShortVideosSection;
import React, { useState } from "react";
import { Play } from "lucide-react";

const VideoCard = ({ videoSrc, views, thumbnail, isPlaying, onPlay }) => {
  return (
    <div
      className={`relative overflow-hidden rounded-lg group transition-all ${
        isPlaying ? "h-80 md:h-96" : "h-64 md:h-80" // Increased height
      }`}
    >
      {!isPlaying ? (
        <img
          src={thumbnail}
          alt="Video thumbnail"
          className="w-full h-full object-cover"
        />
      ) : (
        <video
          src={videoSrc}
          controls
          autoPlay
          className="w-full h-full object-cover"
        />
      )}
      {!isPlaying && (
        <div
          onClick={onPlay}
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
        >
          <Play className="text-white w-12 h-12" />
        </div>
      )}
      <div className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded">
        {views} views
      </div>
    </div>
  );
};

const ShortVideosSection = () => {
  const [playingVideoId, setPlayingVideoId] = useState(null);

  const videos = [
    {
      id: 1,
      videoSrc: "/videos/video4.mp4",
      views: "5,245",
      thumbnail: "/videos/coverVideo.png",
    },
    {
      id: 2,
      videoSrc: "/videos/video2.mp4",
      views: "3,245",
      thumbnail: "./videos/coverVideo.png",
    },
    {
      id: 3,
      videoSrc: "/videos/video3.mp4",
      views: "5,935",
      thumbnail: "/videos/coverVideo.png",
    },
    {
      id: 4,
      videoSrc: "/videos/video.mp4",
      views: "3,247",
      thumbnail: "/videos/coverVideo.png",
    },
  ];

  const handlePlay = (id) => {
    setPlayingVideoId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-4">
        <span className="text-blue-black font-bold text-2xl">Short Videos</span>
        <a href="#" className="text-gray-800 font-bold hover:underline">
          See All
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-6">
        {videos.map((video) => (
          <VideoCard
            key={video.id}
            {...video}
            isPlaying={playingVideoId === video.id}
            onPlay={() => handlePlay(video.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ShortVideosSection;
