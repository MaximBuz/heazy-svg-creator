import { Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import OverviewBG from '../public/overview-bg.png';
import FeatureCard from '../Components/FeatureCard';
import SectionDivider from '../Components/SectionDivider';
import { useTranslation } from 'next-i18next';
export interface IFeaturesProps {}

const Features: React.FunctionComponent<IFeaturesProps> = () => {
  const { t } = useTranslation('features');
  return (
    <Flex
      id="features"
      backgroundImage={` url('${OverviewBG.src}')`}
      backgroundRepeat="no-repeat"
      backgroundPosition="bottom"
      backgroundSize="contain"
      direction="column"
      width="100%"
      mb={{ base: '10em' }}
      justifyContent="flex-start"
      alignItems="center"
      textAlign="center"
      gap="50px"
    >
      <SectionDivider text={t('dividerText')} />

      <Heading fontWeight="700" fontSize={{ base: '2em', lg: '3em' }}>
        {t('title1')}
        <span
          style={{
            backgroundImage: 'linear-gradient(29deg,#d3dd11 0%,#ff0084 87%)',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            WebkitBackgroundClip: 'text',
          }}
        >
          {t('title2')}
        </span>
        <br />
        {t('description')}
      </Heading>

      <Flex
        padding={['0 1em', '0 2em', '0 100px', '0 200px', '0 300px', '0 500px']}
        flexWrap="wrap"
        gap="35px"
        justifyContent="center"
        alignItems="center"
      >
        <FeatureCard text={t('features.1')} icon="/resize-icon.svg" />
        <FeatureCard text={t('features.2')} icon="/export-icon.svg" />
        <FeatureCard text={t('features.3')} icon="/pallette-icon.svg" />
        <FeatureCard text={t('features.4')} icon="/inspiration-icon.svg" />
        <FeatureCard text={t('features.5')} icon="/save-icon.svg" />
        <FeatureCard text={t('features.6')} icon="/share-icon.svg" />
      </Flex>
    </Flex>
  );
};

export default Features;
