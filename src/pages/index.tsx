/// <reference types="@emotion/react/types/css-prop" />
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import tw, { css } from 'twin.macro';
import React from 'react';
import { Follow, Share } from 'react-twitter-widgets';

const container = css`
  ${tw`h-screen mx-auto m-0 p-0`}
`;

export const Home: React.VFC = () => {
  const Map = dynamic(
    () => import('../components/map'), // replace '@components/map' with your component's location
    { ssr: false } // This line is important. It's what prevents server-side render
  );
  return (
    <div className='map' css={container}>
      <Follow username='yuiseki_' />
      <Share url='https://crisis.yuiseki.net/' />
      <Map />
    </div>
  );
};

export default Home;
