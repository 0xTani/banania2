'use client';
import Image from 'next/image';
import styles from './page.module.css';

import React from 'react';
import { Appbar } from './components/AppBar';
import { Box, Container, Grid } from '@mui/material';

export default function Home() {
  return (
    <main style={{ backgroundColor: '#4c9540' }}>
      {/* <Toolbar > */}
      <Appbar></Appbar>
      <Container>
        <Grid container alignItems={'center'} justifyContent={'center'}>
          <Grid item sm={6} xs={8}>
            the most memeable memecoin in existence. The dogs have had their day, it’s time for Pepe
            to take reign.
          </Grid>
          <Grid item md={4} xs={3} sx={{ height: '483px' }}>
            <Box
              sx={{
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundImage: "url('/pepe.webp')",
                width: '100%',
                height: '483px',
              }}
            ></Box>
            {/* <Image src="/pepe.webp" width={476} height={483} alt="pepe"></Image> */}
          </Grid>
        </Grid>
      </Container>
      <Box sx={{ backgroundColor: '#448639' }}>
        <Container>
          <Grid container alignItems={'center'} justifyContent={'center'}>
            <Grid item md={4} xs={3} sx={{ height: '483px' }}>
              <Box
                sx={{
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundImage: "url('/pepe1.webp')",
                  width: '100%',
                  height: '483px',
                }}
              ></Box>
              {/* <Image src="/pepe.webp" width={476} height={483} alt="pepe"></Image> */}
            </Grid>

            <Grid item sm={6} xs={8}>
              Pepe is tired of watching everyone play hot potato with the endless derivative
              ShibaCumGMElonKishuTurboAssFlokiMoon Inu coins. The Inu’s have had their day. It’s
              time for the most recognizable meme in the world to take his reign as king of the
              memes.
              <br></br>
              <br></br>
              Pepe is here to make memecoins great again. Launched stealth with no presale, zero
              taxes, LP burnt and contract renounced, $PEPE is a coin for the people, forever.
              Fueled by pure memetic power, let $PEPE show you the way.
            </Grid>
          </Grid>
        </Container>
      </Box>
    </main>
  );
}
