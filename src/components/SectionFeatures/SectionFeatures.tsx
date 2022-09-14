import styled from 'styled-components';

const SectionTag = styled.section`
  width: 700px;
  margin-right: auto;
  margin-left: auto;
  padding-top: 85px;
  padding-right: 0px;
  padding-bottom: 40px;
  padding-left: 0px;
  position: relative;
  display: block;
`;

const TopPTag = styled.p`
  opacity: 1;
  transform: translate(0px, 0px);
  font-size: 34px;
  margin-top: 0px;
  font-family: "Gothic MB101 Bold", "Gothic MB101 Medium", -apple-system, "Segoe UI", Roboto, "Droid Sans", sans-serif;
  font-weight: bold;
  font-size: 28px;
  line-height: 1.42857143;
  text-align: left;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

export default function SectionFeatures() {
  return (
    <>
      <SectionTag>
        <TopPTag>Buy a vacation home that doubles as a hotel</TopPTag>
        <p>You can use it as a personal vacation home. When you aren't using it, NOT A HOTEL will rent it out. You can buy as many as you want, giving you many homes. We provide an ideal home life. </p>
      </SectionTag>
    </>
  );
}