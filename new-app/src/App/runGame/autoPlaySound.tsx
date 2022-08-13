import React, {useState, useEffect} from 'react'

const AutoPlaySound = () => {
  const sampleAudio = new Audio('../../audio/sample.mp3')
  const [playLoop, setPlayLoop] = useState(false)

  useEffect(() => {
    sampleAudio.load()
  }, [playLoop])

  const playSound = () => {
    sampleAudio.play()
  }
  const pauseSound = () => {
    sampleAudio.pause()
  }
  const stopSound = () => {
    sampleAudio.pause()
    sampleAudio.currentTime = 0
  }

  return (
    <div>
      <input type="button" className="button-1" value="Play" onClick={playSound}></input>
      <input type="button" className="button-1" value="Pause" onClick={pauseSound}></input>
      <input type="button" className="button-1" value="Stop" onClick={stopSound}></input>
    </div>
  )
}

export default AutoPlaySound


