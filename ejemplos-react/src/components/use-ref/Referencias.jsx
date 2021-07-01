import { useRef } from 'react'

const Referencias = () => {

  const audioRef = useRef()

  const play = () => {
    audioRef.current.play()
  }
  const pause = () => {
    audioRef.current.pause()
  }

  return (
    <div>
      <audio src="/assets/sabrepulse.mp3" ref={audioRef}></audio>
      <button type="button" onClick={play}>Play</button>
      <button type="button" onClick={pause}>Pause</button>
    </div>
  )
}

export default Referencias
