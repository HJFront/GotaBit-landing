import { Button, ButtonProps } from '@mui/material'
import React, { PropsWithChildren } from 'react'

const GradientButton = ({ children, sx, ...props }: PropsWithChildren<ButtonProps>) => {
  return (
    <Button
      sx={{
        background: 'linear-gradient(93.11deg, #42A2FF 0%, #0B84FF 100%), #003DD9',
        color: '#fff',
        ...sx,
      }}
      {...props}
    >
      {children}
    </Button>
  )
}

export default GradientButton
