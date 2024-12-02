export default function VideoBackground({path}) {
    return (
      <div className="relative w-full h-full overflow-hidden">
        {/* Video Element */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/protine1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
  
        {/* Content on top of the video */}
        {/* <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-4xl font-bold">Your Text Here</h1>
        </div> */}
      </div>
    );
  }
  