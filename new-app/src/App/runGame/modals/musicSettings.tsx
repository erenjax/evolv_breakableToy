import React, {useState} from 'react';
import ToggleAudio from "../ToggleAudio";
import * as Song from '../../../model/song'

const duckGameSong: Song.Song = "Duck"
const tronSong: Song.Song = "Tron"

const MusicSettings = ({showMusicSettings, setShowMusicSettings}: {showMusicSettings: boolean, setShowMusicSettings: React.Dispatch<React.SetStateAction<boolean>>}) => {
  const [activeSong, setActiveSong] = useState<Song.Song>(duckGameSong)
  const [playing, setPlaying] = useState(false)

  return (
    <div>
      {showMusicSettings ? (
        <ToggleAudio duckGameSong={duckGameSong} tronSong={tronSong} activeSong={activeSong} setActiveSong={setActiveSong} playing={playing} setPlaying={setPlaying} setShowMusicSettings={setShowMusicSettings} />
      ) : null}
    </div>
  )
}

export default MusicSettings
