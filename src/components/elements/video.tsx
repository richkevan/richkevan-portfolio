
const VideoPlayer = ({ videoSrcURL}:{videoSrcURL: string}) => {

  return (
    <div className="video rounded-xl overflow-clip h-[720px] aspect-portrait">
      <video
        className="video"
        autoPlay
        loop
        muted
        playsInline
        src={videoSrcURL}
      />
    </div>
  );
};

export default VideoPlayer;