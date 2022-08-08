import styled from '@emotion/styled'
import { Typography, TypographyProps } from '@mui/material'
import { Box, Container } from '@mui/system'
import { NextPage } from 'next'
import Head from 'next/head'
import { useTranslation } from 'react-i18next'

import LandingBgProvider from 'src/components/LandingBg/LandingBg'
import LandingNav from 'src/components/LandingNav'
import GradientButton from 'src/components/Buttons/GradientButton'
import CopyrightAndContact from 'src/components/Footer/CopyrightAndContact'
import styles from 'src/components/LandingBg/index.module.css'
import OutlineButton from 'src/components/Buttons/OutlineButton'

const StyledTypography = styled((props: TypographyProps) => (
  <Typography
    {...props}
    className={styles.title}
    sx={{
      fontWeight: 600,
      fontSize: ['24px', '40px', '56px'],
      textAlign: 'center',
      color: '#fff',
    }}
  />
))()

const Home: NextPage = () => {
  const { t } = useTranslation('index')

  return (
    <>
      <Head>
        <title>{t('Landing Page')}</title>
      </Head>
      <LandingBgProvider>
        <Box
          sx={{
            position: 'relative',
            height: '100%',
            margin: '0 24px'
          }}
        >
          <LandingNav />
          <Box
            sx={{
              width: '100%',
              height: '90%',
              display: 'grid',
              placeItems: 'center',
            }}
          >
            <Box>
              <StyledTypography>
                <span>{t('Decentralised, Privacy-first')}</span>
              </StyledTypography>
              <StyledTypography>
                <span>{t('Cyberspace of the next generation')}</span>
              </StyledTypography>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: ['column', 'row'],
                  mt: ['30px', '50px'],
                }}
              >
                <GradientButton
                  sx={{
                    width: ['200px', '280px'],
                    height: ['50px', '64px'],
                    borderRadius: ['50px', '64px'],
                    fontSize: ['14px', '18px'],
                    fontWeight: 500,
                  }}
                >
                  {t('Start')}
                </GradientButton>
                {/* <OutlineButton
                  sx={{
                    width: ['200px', '280px'],
                    height: ['50px', '64px'],
                    borderRadius: ['50px', '64px'],
                    fontSize: ['14px', '18px'],
                    fontWeight: 500,
                    ml: [0, '28px'],
                    mt: ['30px', 0],
                    color: 'rgba(255, 255, 255, 1)',
                  }}
                >
                  {t('Join The Community')}
                </OutlineButton> */}
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
            }}
          >
            <CopyrightAndContact isGrey />
          </Box>
        </Box>
      </LandingBgProvider>
    </>
  )
}

export default Home
