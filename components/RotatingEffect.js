export default function RotatingEffect() {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="relative rounded-full h-24 w-24 bg-gradient-to-r from-purple-600 via-blue-400 to-teal-400 animate-spin-slow">
          <span className="absolute rounded-full h-full w-full bg-gradient-to-r from-purple-600 via-blue-400 to-teal-400 blur-sm"></span>
          <span className="absolute rounded-full h-full w-full bg-gradient-to-r from-purple-600 via-blue-400 to-teal-400 blur-md"></span>
          <span className="absolute rounded-full h-full w-full bg-gradient-to-r from-purple-600 via-blue-400 to-teal-400 blur-lg"></span>
          <span className="absolute rounded-full h-full w-full bg-gradient-to-r from-purple-600 via-blue-400 to-teal-400 blur-xl"></span>
          <div className="absolute inset-2 bg-white border-4 border-white rounded-full"></div>
        </div>
      </div>
    );
  }
  