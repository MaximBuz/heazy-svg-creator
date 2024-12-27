import Meta from '../partials/seo-meta';
import { Box, Flex } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Call2Action from '../Sections/Call2Action';
import Features from '../Sections/Features';

import Hero from '../Sections/Hero';
import Inspirations from '../Sections/Inspirations';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

const Home: NextPage = () => {
  const { t } = useTranslation('common');

  return (
    <>
      <Meta
        title={t('meta.title')}
        desc={t('meta.description')}
        canonical={
          process.env.NEXT_PUBLIC_APP_URL || 'https://app.heazystudio.com/'
        }
        css="/static/css/styles.css"
        js="/static/js/scripts.js"
      />
      <div style={{ fontFamily: 'Karla, sans-serif', color: '#c5cfd9' }}>
        <Head>
          <title>{t('head.title')}</title>
          <meta name={t('head.name')} content={t('head.content')} />
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        </Head>

        <main>
          <Box
            width="100%"
            className="gradient-bg"
            padding={{ base: '0 1.5em', lg: '0 10em' }}
            bgPos="top"
            bgImage="linear-gradient(0,rgb(18, 20, 28,0) 7%,rgb(18, 20, 28, 0) 20%),radial-gradient(circle farthest-side at -170% 170%,#1A202C 48%,rgb(18, 20, 28,0) 65%),radial-gradient(circle farthest-corner at -55% -125%,rgb(18, 20, 28,0) 50%,rgb(18, 20, 28) 70%,rgb(18, 20, 28,0) 72%),radial-gradient(circle farthest-corner at 0 -50%,rgb(18, 20, 28) 32%,hsla(0,0%,100%,0) 62%),radial-gradient(circle farthest-side at 0 -25%,#007252 50%,rgb(18, 20, 28,0) 72%),radial-gradient(circle farthest-corner at 50% -100%,#05f 26%,rgb(18, 20, 28,0) 72%);"
          >
            <Hero />
          </Box>

          <Features />

          <Inspirations />

          <Call2Action />
        </main>

        <Flex
          height="50px"
          justifyContent="center"
          alignItems="center"
          position="absolute"
          bottom="0"
          background="transparent"
          width="100%"
          gap="1em"
        >
          <Link href="/privacy">{t('privacyNotice')}</Link>
          <Link href="https://website-mechaniker.de/" target="_blank">
            Website Mechaniker
          </Link>
        </Flex>
        <Flex
          position="fixed"
          width="100%"
          justifyContent={{ base: 'center', lg: 'flex-start' }}
          bottom={{ base: '3em', lg: '2em' }}
          left={{ lg: '2em' }}
        >
          <a
            href="https://www.producthunt.com/posts/heazy?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-heazy"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=351231&theme=dark"
              alt="HEAZY - Free&#0032;SVG&#0032;design&#0032;asset&#0032;platform | Product Hunt"
              style={{ width: '250px', height: '54px' }}
              width="250"
              height="54"
            />
          </a>
        </Flex>
        <footer></footer>
      </div>
    </>
  );
};

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getStaticProps({ locale }: { locale: any }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'hero',
        'features',
        'inspirations',
        'call2action',
        'navbar',
      ])),
    },
  };
}

export default Home;
