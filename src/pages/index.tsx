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
  height: 740px;
  padding-top: 50px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 55px;
  position: relative;
  z-index: 1;
  color: rgb(255, 255, 255);
`;

const H1 = styled.div`
  opacity: 1;
  transform: translate(0px, 0px);
  font-size: 40px;
  line-height: 1.25;
  text-shadow: rgba(0, 0, 0, 0.1) 0px 10px 20px;
  position: relative;
  z-index: 2;
  font-family: "SF Pro Text", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: bold;
`;

const P = styled.p`
  opacity: 1;
  transform: translate(0px, 0px);
  font-size: 16px;
  line-height: 1.875;
  position: relative;
  font-weight: bold;
  z-index: 2;
  text-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

const Button = styled.div`
  opacity: 1;
  transform: translate(0px, 0px);
  margin-top: 25px;
  display: block;
  width: 100px;
  height: 32px;
  text-align: center;
  line-height: 32px;
  font-size: 10px;
  font-weight: bold;
  color: rgb(0, 0, 0);
  background-image: initial;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat-x: initial;
  background-repeat-y: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: rgb(255, 255, 255);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-left-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px;
`;

const Home: NextPage = () => {
  return (
    <>
      <BannerSection>
        <Banner></Banner>
        <Banner>
          <H1>NOT A HOTEL<br />NFT</H1>
          <P>Price revision from October 1st<br />by registering on the waiting list<br />Available on a first-come, first-served basis</P>
          <a href='./'><Button>Details</Button></a>
        </Banner>
      </BannerSection>
    </>
  )
}

export default Home
