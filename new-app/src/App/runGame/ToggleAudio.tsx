import React, {useState} from 'react';
import * as Song from '../../model/song'


const duckGameAudioRequire = require('../../audio/DuckGame.mp3')
const duckGameAudio = new Audio(duckGameAudioRequire)
const tronAudioRequire = require('../../audio/Tron.mp3')
const tronAudio = new Audio(tronAudioRequire)

const ToggleAudio = ({activeSong, setActiveSong, playing, setPlaying, setShowMusicSettings}: {duckGameSong: Song.Song, tronSong: Song.Song, activeSong: Song.Song, setActiveSong: React.Dispatch<React.SetStateAction<Song.Song>>, playing: boolean, setPlaying: React.Dispatch<React.SetStateAction<boolean>>, setShowMusicSettings: React.Dispatch<React.SetStateAction<boolean>>}) => {

  const [showPlayIcon, setShowPlayIcon] = useState(true)
  const [showDuck, setShowDuck] = useState(true)

  React.useEffect(() => {
    if (playing) {
      if (activeSong === "Duck") {
        duckGameAudio.play()
        setShowPlayIcon(false)
      } else {
        tronAudio.play()
        setShowPlayIcon(false)
      }
    } else if (activeSong === "Duck") {
      duckGameAudio.pause()
      setShowPlayIcon(true)
    } else {
      tronAudio.pause()
      setShowPlayIcon(true)
    }
  }, [playing, activeSong])

  const handleOnClickPlaying = () => {
    setPlaying(previous => !previous)

  }
  const handleOnClickToggle = () => {
    setActiveSong(previous => {
      if (previous === "Duck") {
        duckGameAudio.pause()
        setShowDuck(false)
        return "Tron"
      } else {
        tronAudio.pause()
        setShowDuck(true)
        return "Duck"
      }
    })
  }
  const handleOnClick = () => {
    setShowMusicSettings(false)
  }


  return (
    <div
      className="transition ease-in-out duration-200 justify-center items-center flex m-2 p-4 md:p-8 bg-opacity-25 bg-hacky-green text-black rounded-2xl shadow-inner fixed inset-0 z-50"
      onClick={handleOnClick}>
      <div className="flex flex-col p-12 bg-black text-white rounded-2xl w-144 h-144 border-4 border-hacky-green">
        <div className="flex flex-col">
          <div className="flex-row">
            {showPlayIcon ? (
              <button
                className="button-1 m-2"
                onClick={handleOnClickPlaying}>
                play
              </button>
            ) :
              <button
                className="button-1 m-2"
                onClick={handleOnClickPlaying}>
                pause
              </button>
            }
            <button
              className="button-1 m-2"
              onClick={handleOnClickToggle}>
              Change Song
            </button>
          </div>
          <div className="grid grid-cols-2 ml-2 text-hacky-green">
            <p>Now Playing:</p>
            {showDuck ? (
              <p className="justify-self-start pl-2 text-hacky-green">Duck Game</p>
            ) :
              <p className="justify-self-start pl-2 text-hacky-green">Tron</p>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ToggleAudio
