import type { NextPage } from 'next';
import Head from 'next/head';
import Features from '../Sections/Features';

import Hero from '../Sections/Hero';
import Inspirations from '../Sections/Inspirations';

const Home: NextPage = () => {
  return (
    <div style={{ fontFamily: 'Karla, sans-serif', color: '#c5cfd9' }}>
      <Head>
        <title>Heazy - SVG Studio</title>
        <meta name="description" content="Generate unique SVG design assets with ease" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div
          className="gradient-bg"
          style={{
            padding: '0 10em',
            backgroundPosition: 'top',
            backgroundImage:
              'linear-gradient(0,rgb(18, 20, 28,0) 7%,rgb(18, 20, 28, 0) 20%),radial-gradient(circle farthest-side at -170% 170%,#1A202C 48%,rgb(18, 20, 28,0) 65%),radial-gradient(circle farthest-corner at -55% -125%,rgb(18, 20, 28,0) 50%,rgb(18, 20, 28) 70%,rgb(18, 20, 28,0) 72%),radial-gradient(circle farthest-corner at 0 -50%,rgb(18, 20, 28) 32%,hsla(0,0%,100%,0) 62%),radial-gradient(circle farthest-side at 0 -25%,#007252 50%,rgb(18, 20, 28,0) 72%),radial-gradient(circle farthest-corner at 50% -100%,#05f 26%,rgb(18, 20, 28,0) 72%);',
          }}
        >
          {/*-------- HERO SECTION --------*/}
          <Hero />
        </div>

        {/*-------- FEATURES SECTION --------*/}
        <Features />

        {/*-------- INSPIRATIONS SECTION --------*/}
        <Inspirations />
      </main>
      <footer></footer>
    </div>
  );
};

export default Home;
