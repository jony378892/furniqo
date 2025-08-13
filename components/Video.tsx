export default function Video() {
  return (
    <video
      className="h-44 sm:h-64 lg:h-80 w-full object-center object-cover"
      src="/video.mp4"
      loop
      autoPlay
      muted
    />
  );
}
