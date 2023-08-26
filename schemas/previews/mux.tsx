import React from 'react'
import MuxPlayer from '@mux/mux-player-react'

const Player: React.FC = (props ) => {
  console.log(props)
  return (
    <>
      {props?.title}
      {/* <MuxPlayer streamType="on-demand" playbackId={id} />{' '} */}
    </>
  )
}

export default Player
