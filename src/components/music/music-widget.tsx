const MusicWidget = () => {
  return (
    <div>
      <iframe allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" frameBorder="0" height="450" style={{width:'100%',maxWidth:'660px',overflow:'hidden',borderRadius:'10px'}}sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/dev-focus/pl.u-oZyllDpugq7EV"></iframe>
    </div>
  );
};

export default MusicWidget;