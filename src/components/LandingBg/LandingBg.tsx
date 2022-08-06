import { Box } from '@mui/system'
import React, { PropsWithChildren } from 'react'

import styles from './index.module.css'

const LandingBgProvider = ({ children }: PropsWithChildren<{}>) => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        background: 'radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)',
        overflow: 'hidden',
      }}
    >
      <Box className={styles.stars}></Box>
      <Box className={styles.stars2}></Box>
      <Box className={styles.stars3}></Box>
      {children}
    </Box>
  )
}

export default LandingBgProvider
