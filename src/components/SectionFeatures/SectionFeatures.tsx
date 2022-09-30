import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const SectionTag = styled.section`
  width: 700px;
  margin-right: auto;
  margin-left: auto;
  padding-top: 50px;
  padding-right: 0px;
  padding-bottom: 40px;
  padding-left: 0px;
  position: relative;
  display: block;
`;

const TopPTag = styled.p`
  font-size: 34px;
  margin-top: 0px;
  font-family: "Gothic MB101 Bold", "Gothic MB101 Medium", -apple-system, "Segoe UI", Roboto, "Droid Sans", sans-serif;
  font-weight: normal;
  line-height: 1.42857143;
  text-align: left;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

const BottomPTag = styled.p`
  font-size: 16px;
  line-height: 2;
  margin-top: 35px;
  margin-bottom: 0px;
  font-weight: bold;
  text-align: left;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

const IframeSection = styled.div`
  overflow-x: hidden;
  overflow-y: hidden;
  position: relative;
  width: 100%;
  max-width: 700px;
  height: 0px;
  padding-top: 56.25%;
  margin-top: 50px;
  border:1px solid red;
`;

export default function SectionFeatures() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <SectionTag>
        <TopPTag
                data-aos="fade-up"
                data-aos-offset="150"
                data-aos-once="true"
                data-aos-delay="50"
                data-aos-duration="1000"
        >
          Buy a vacation home that doubles <br />as a hotel
        </TopPTag>
        <BottomPTag
                data-aos="fade-up"
                data-aos-offset="150"
                data-aos-once="true"
                data-aos-delay="50"
                data-aos-duration="1000"
        >
          You can use it as a personal vacation home. When you aren't using it, NOT A HOTEL will rent it out. You can buy as many as you want, giving you many homes. We provide an ideal home life.
        </BottomPTag>
        <IframeSection>
          {/*<iframe 
            src="https://player.vimeo.com/video/722006775?h=39f6682d9e&app_id=122963" 
            width="426" 
            height="240" 
            frameborder="0" 
            allow="autoplay; fullscreen; picture-in-picture" 
            allowfullscreen="" 
            title="ホテルにもできる別荘を買おう | NOT A HOTEL" 
            data-ready="true"
  ></iframe>*/}
        </IframeSection>
      </SectionTag>
    </>
  );
}
