export default function Video() {
  return (
    <div className="relative h-44 sm:h-64 lg:h-80 w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 z-0 h-full w-full object-center object-cover"
        src="/video.mp4"
        loop
        autoPlay
        muted
      />
      Your browser does not support the video tag.
    </div>
  );
}
