import { Icon } from '@chakra-ui/react';

const DiceIcon: React.FunctionComponent = () => {
  return (
    <Icon boxSize="50" viewBox="0 0 350 400" color="white">
      <g transform="translate(0 20)">
        <path
          d="M268.724 34.4782L120.492 11.5117C100.836 8.46621 80.7743 13.354 64.7214 25.0999C48.6685 36.8457 37.9391 54.4875 34.8936 74.1442L11.9272 222.376C8.88164 242.032 13.7694 262.094 25.5153 278.147C37.2612 294.2 54.903 304.929 74.5597 307.975L222.791 330.941C242.448 333.986 262.509 329.099 278.562 317.353C294.615 305.607 305.344 287.965 308.39 268.308L331.356 120.077C334.402 100.42 329.514 80.3589 317.768 64.306C306.022 48.2531 288.381 37.5237 268.724 34.4782ZM278.744 263.715C276.916 275.509 270.479 286.094 260.847 293.142C251.215 300.189 239.178 303.122 227.384 301.295L79.1529 278.328C67.3589 276.501 56.7739 270.063 49.7263 260.432C42.6788 250.8 39.7461 238.763 41.5735 226.969L64.5399 78.7375C66.3672 66.9435 72.8048 56.3584 82.4366 49.3109C92.0683 42.2634 104.105 39.3307 115.899 41.158L264.131 64.1244C275.925 65.9518 286.51 72.3894 293.557 82.0211C300.605 91.6529 303.537 103.69 301.71 115.484L278.744 263.715Z"
          fill="white"
        />
        <circle cx="133.116" cy="116.179" r="28.5" transform="rotate(8.80717 133.116 116.179)" fill="white" />
        <circle cx="225.019" cy="130.418" r="28.5" transform="rotate(8.80717 225.019 130.418)" fill="white" />
        <circle cx="118.724" cy="209.07" r="28.5" transform="rotate(8.80717 118.724 209.07)" fill="white" />
        <circle cx="210.627" cy="223.309" r="28.5" transform="rotate(8.80717 210.627 223.309)" fill="white" />
      </g>
    </Icon>
  );
};

export default DiceIcon;