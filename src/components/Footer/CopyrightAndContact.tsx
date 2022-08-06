import { Box, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import ContactIcons from '../ContactIcons'

const CopyrightAndContact = ({ isGrey }: { isGrey?: boolean }) => {
  const { t } = useTranslation('footer')

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: ['column-reverse', 'column-reverse', 'row'],
        justifyContent: ['center', 'space-between'],
        alignItems: 'center',
        mt: ['50px', '24px'],
        pb: ['40px', '56px'],
      }}
    >
      <Typography
        mt={['20px', '20px', 0]}
        sx={{
          color: isGrey ? 'rgba(255,255,255,0.5)' : '',
          fontSize: ['10px', '14px'],
        }}
      >
        {t('Copyright')}
      </Typography>
      <Box>
        <ContactIcons isGrey={isGrey} />
      </Box>
    </Box>
  )
}

export default CopyrightAndContact
