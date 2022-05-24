import { Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import OverviewBG from '../public/overview-bg.png';
import FeatureCard from '../components/FeatureCard';
import SectionDivider from '../components/SectionDivider';

export interface IFeaturesProps {}

const Features: React.FunctionComponent<IFeaturesProps> = (props) => {
  return (
    <Flex
      id="features"
      backgroundImage={` url('${OverviewBG.src}')`}
      backgroundRepeat="no-repeat"
      backgroundPosition="bottom"
      backgroundSize="contain"
      direction="column"
      width="100%"
      mb={{ base: "10em" }}
      justifyContent="flex-start"
      alignItems="center"
      textAlign="center"
      gap="50px"
    >
      <SectionDivider text="Features"/>
      <Heading fontWeight="700" fontSize="3em">
        Heazy is{' '}
        <span
          style={{
            backgroundImage: 'linear-gradient(29deg,#d3dd11 0%,#ff0084 87%)',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            WebkitBackgroundClip: 'text',
          }}
        >
          easy.
        </span>
        <br />
        Unique vector assets within seconds.
      </Heading>

      {/* FEATURE TILES */}

      <Flex padding={["0 1em", "0 2em", "0 100px", "0 200px", "0 300px", "0 500px"]} flexWrap="wrap" gap="35px" justifyContent="center" alignItems="center">
        <FeatureCard
          text="Heazy let's you create beautiful vector visuals that can be re-sized to any resolution without loosing quality."
          icon="/resize-icon.svg"
        ></FeatureCard>

        <FeatureCard
          text="Export your creations to SVG and PNG or easily copy JavaScript and TypeScript React snippets to your clipboard."
          icon="/export-icon.svg"
        ></FeatureCard>

        <FeatureCard
          text="Heazy prides itself in having some of the most customizable templates on the web. Always create stunningly unique visuals."
          icon="/resize-icon.svg"
        ></FeatureCard>

        <FeatureCard
          text="Never struggle with finding ideas again. Click through the options and be sure to always create something beautiful."
          icon="/inspiration-icon.svg"
        ></FeatureCard>
      </Flex>
    </Flex>
  );
};

export default Features;
