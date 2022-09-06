import type { NextPage } from 'next';
import styled from 'styled-components';

const BannerSection = styled.section`
  width: 100%;
  height: 740px;
  display: flex;
  flex-direction: row;
`;

const Banner = styled.div`
  width: 50%;
  &:first-child {
    background-image: url("https://notahotel.com/assets/images/index/hero-aoshima_pc.jpg");
  }
  &:last-child {
    background-image: url("https://notahotel.com/assets/images/index/hero-nft.jpg");
  }
  background-size: cover;
  background-position-x: center;
  background-position-y: center;
`;

const Home: NextPage = () => {
  return (
    <>
      <BannerSection>
        <Banner></Banner>
        <Banner></Banner>
      </BannerSection>
    </>
  )
}

export default Home
