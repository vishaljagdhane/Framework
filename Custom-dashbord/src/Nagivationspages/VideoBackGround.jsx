import React, { useRef, useEffect } from 'react';
import blun from '../Asset/blun.mp4';
import water from '../Asset/water.mp4'
import { Box } from '@mui/material';
import watergroth from '../Asset/watergroth.mp4'
export default function VideoBackGround() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.70; // Slow down the video speed
    }
  }, []);

  return (
    <Box>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        id="video-background"
        style={{
          position: 'fixed',
          right: 0,
          bottom: 0,
          minWidth: '100%',
          minHeight: '100%',
          zIndex: -1,
        }}
      >
        <source src={blun} type="video/mp4" />
      </video>
    </Box>
  );
}
