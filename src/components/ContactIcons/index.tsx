import Box from '@mui/material/Box'
import React from 'react'
import Twitter from './Twitter'
import Github from './Github'
import Reddit from './Reddit'
import Medium from './Medium'
import Facebook from './Facebook'
import Link from '../Link'

const ContactIcons = ({ isGrey }: { isGrey?: boolean }) => {
  const icons = [
    {
      component: <Twitter isGrey={isGrey} />,
      url: 'https://twitter.com',
    },
    {
      component: <Github isGrey={isGrey} />,
      url: 'https://twitter.com',
    },
    {
      component: <Reddit isGrey={isGrey} />,
      url: 'https://twitter.com',
    },
    {
      component: <Medium isGrey={isGrey} />,
      url: 'https://twitter.com',
    },
    {
      component: <Facebook isGrey={isGrey} />,
      url: 'https://twitter.com',
    },
  ]
  return (
    <Box>
      {icons.map((icon, index) => (
        <Link
          key={index}
          href={icon.url}
          sx={{
            ml: '16px',
            '&:first-of-type': {
              ml: 0,
            },
          }}
        >
          {icon.component}
        </Link>
      ))}
    </Box>
  )
}

export default ContactIcons
