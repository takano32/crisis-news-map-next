/// <reference types="@emotion/react/types/css-prop" />
import dynamic from 'next/dynamic';
import React from 'react';

const CrisisMap = dynamic(() => import('../components/CrisisMap'), {
  ssr: false,
});

export const Home: React.VFC = () => {
  return <CrisisMap />;
};

export default Home;
