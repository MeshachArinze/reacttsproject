"use client";

import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import SpotifyWebApi from "spotify-web-api-node";
import { playTrackState } from "../atom/play-atom";
import Body from "./body";
import Player from "./player";
import Right from "./right";
import Sidebar from "./sidebar";

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
}) as any;

function Dashboard() {
  const { data: session, status } = useSession();

  const [playingTrack, setPlayingTrack] = useRecoilState(playTrackState);
  const [showPlayer, setShowPlayer] = useState(false);

  const accessToken = session?.user;

  useEffect(() => {
    if (accessToken) {
      signIn();
    }
  }, [accessToken, session]);

  useEffect(() => {
    setShowPlayer(true);
  }, [showPlayer]);

  const chooseTrack = (track: any) => {
    setPlayingTrack(track);
  };

  if (status === "authenticated") {
    return <p>Signed in as {session.user?.email}</p>;
  }

  return (
    <main className="flex min-h-screen min-w-max bg-black lg:pb-24">
      <Sidebar />
      <Body spotifyApi={spotifyApi} chooseTrack={chooseTrack} />
      <Right spotifyApi={spotifyApi} chooseTrack={chooseTrack} />

      <div className="fixed bottom-0 left-0 right-0 z-50">
        <Player accessToken={accessToken} trackUri={playingTrack.uri} />
      </div>
    </main>
  );
}

export default Dashboard;
