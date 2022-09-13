import type { NextPage } from 'next';
import styled from 'styled-components';
import { SectionBanner, SectionFeatures } from 'components';

const Home: NextPage = () => {
  return (
    <>
      <SectionBanner />
      <SectionFeatures />
    </>
  )
}

export default Home
