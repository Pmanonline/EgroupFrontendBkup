import React from "react";

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center h-screen w-screen absolute top-0 left-0 bg-white bg-opacity-80 z-50">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-red-500 border-solid"></div>
    </div>
  );
}
export default LoadingSpinner;
