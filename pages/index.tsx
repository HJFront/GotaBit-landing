import styled from '@emotion/styled'
import { Button, Typography, TypographyProps } from '@mui/material'
import { Box, Container } from '@mui/system'
import { NextPage } from 'next'
import Head from 'next/head'
import { useTranslation } from 'react-i18next'

import LandingBgProvider from 'src/components/LandingBg/LandingBg'
import LandingNav from 'src/components/LandingNav'
import GradientButton from 'src/components/Buttons/GradientButton'
import CopyrightAndContact from 'src/components/Footer/CopyrightAndContact'
import styles from 'src/components/LandingBg/index.module.css'

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
        <Container
          maxWidth="lg"
          sx={{
            position: 'relative',
            height: '100%',
          }}
        >
          <LandingNav />
          <Box
            sx={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
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
                <Button
                  variant="outlined"
                  disableElevation
                  sx={{
                    width: ['200px', '280px'],
                    height: ['50px', '64px'],
                    borderRadius: ['50px', '64px'],
                    fontSize: ['14px', '18px'],
                    fontWeight: 500,
                    border: '2px solid #fff',
                    color: '#fff',
                    ml: [0, '28px'],
                    mt: ['30px', 0],
                    backgroundColor: ['transparent'],
                    '&:hover': {
                      backgroundColor: ['transparent'],
                      border: '2px solid',
                    },
                  }}
                >
                  {t('Join The Community')}
                </Button>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              width: '100%',
            }}
          >
            <CopyrightAndContact isGrey />
          </Box>
        </Container>
      </LandingBgProvider>
    </>
  )
}

export default Home
