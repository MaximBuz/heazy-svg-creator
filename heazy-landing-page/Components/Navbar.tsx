import { Flex, UnorderedList, ListItem, Button } from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';
import Logo from '../public/Logo.svg';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

export interface INavbarProps {}

const Navbar: React.FunctionComponent<INavbarProps> = () => {
  const router = useRouter();
  const { t } = useTranslation('navbar');

  const changeTo = router.locale === 'en' ? 'de' : 'en';
  const flag = router.locale === 'en' ? '🇩🇪' : '🇬🇧';

  const onToggleLanguageClick = () => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: changeTo });
  };

  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      width="100%"
      height="80px"
      mt={{ base: '10px', md: '20px' }}
      mr=" auto"
      ml=" auto"
    >
      <Link href="/">
        <Image
          src={Logo}
          alt="heazy svg creator logo"
          width="35px"
          height="35px"
          style={{ cursor: 'pointer' }}
        />
      </Link>
      <UnorderedList
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap="40px"
      >
        <ListItem
          as="a"
          onClick={onToggleLanguageClick}
          fontSize="lg"
          listStyleType="none"
          cursor="pointer"
          transition="0.3s"
          _hover={{ color: 'white', transform: 'scale(1.05)' }}
        >
          {flag}
        </ListItem>
        <ListItem
          as="a"
          href="/#features"
          fontSize="lg"
          listStyleType="none"
          cursor="pointer"
          transition="0.3s"
          _hover={{ color: 'white', transform: 'scale(1.05)' }}
        >
          {t('features')}
        </ListItem>
        <ListItem
          as="a"
          fontSize="lg"
          href="/#inspirations"
          listStyleType="none"
          cursor="pointer"
          transition="0.3s"
          _hover={{ color: 'white', transform: 'scale(1.05)' }}
        >
          {t('inspirations')}
        </ListItem>
        <Button
          display={{ base: 'none', sm: 'flex' }}
          as="a"
          href={
            process.env.NEXT_PUBLIC_APP_URL || 'https://app.heazystudio.com/'
          }
          rounded="full"
          _hover={{ bg: '#05f', color: 'white', transform: 'scale(1.05)' }}
        >
          {t('try')}
        </Button>
      </UnorderedList>
    </Flex>
  );
};

export default Navbar;
