import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import Link from '../Link'
import Logo from './Logo'

const LandingNav = () => {
  const { t } = useTranslation('nav')

  const items = [
    // {
    //   key: 'Ecosystem',
    //   path: '/dapp',
    //   label: t('Ecosystem'),
    // },
    {
      key: 'About',
      // path: '/dapp',
      label: t('About'),
    },
  ]

  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <Box
      sx={{
        position: 'relative',
      }}
    >
      <AppBar
        component="nav"
        position="relative"
        sx={{
          width: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          border: 'none',
          py: [0, '10px'],
          backgroundColor: ['transparent'],
        }}
        variant="outlined"
        elevation={0}
      >
        <Toolbar
          sx={{
            // width: '100%',
            justifyContent: 'space-between',
          }}
          disableGutters
        >
          <Box
            sx={{
              width: ['118px', 'auto'],
              mr: '8px',
              mt: ['10px', '0'],
            }}
          >
            <Link href="/">
              <Logo />
            </Link>
          </Box>
          <Box
            sx={{
              display: ['flex'],
              alignItems: 'center',
              flex: 1,
              justifyContent: 'flex-end',
            }}
          >
            {items.map((item) => (
              <Typography
                key={item.key}
                // href={item.path}
                sx={{
                  fontSize: ['14px', '18px'],
                  fontWeight: 600,
                  ml: ['14px', '40px'],
                  mr: ['4px', 0],
                  color: 'rgba(255, 255, 255, 0.7)',
                  cursor: 'pointer',
                }}
              >
                {item.label}
              </Typography>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default LandingNav
