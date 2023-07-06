"use client"

import { useEffect } from "react";
import SpotifyPlayer from "react-spotify-web-playback";
import { useRecoilState } from "recoil";
import { playTrackState, playState } from "../atom/play-atom";

function Player({ accessToken, trackUri }: any) {
  const [play, setPlay] = useRecoilState(playState);
  // const [playingTrack, setPlayingTrack] = useRecoilState(playTrackState);

  useEffect(() => {
    if (trackUri) {
      setPlay(true);
    }
  }, [setPlay, trackUri]);

  if (!accessToken) return null;

  return (
    <SpotifyPlayer
      styles={{
        activeColor: "#fff",
        bgColor: "#181818",
        color: "#fff",
        loaderColor: "#fff",
        sliderColor: "#1cb954",
        trackArtistColor: "#ccc",
        trackNameColor: "#fff",
        height: 70,
        sliderTrackColor: "#535353",
        sliderTrackBorderRadius: "4px",
        sliderHandleColor: "#fff",
        errorColor: "#fff",
      }}
      token={accessToken}
      showSaveIcon
      callback={(state) => {
        setPlay(state.isPlaying);
      }}
      play={play}
      uris={trackUri ? [trackUri] : []}
      magnifySliderOnHover={true}
      autoPlay={true}
    />
  );
}

export default Player;
