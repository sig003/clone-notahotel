import styled from 'styled-components';

interface ChildrenProps {
  children: React.ReactNode;
}

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  border: 1px solid red;
  padding-top: 60px;
`;

const Header = styled.div`
  width: 100%;
  position: fixed;
  height: 60px;
  border:1px solid blue;
  top: 0;
  left: 0;
  right: 0;
  background-color: hsl(0, 0%, 100%);
`;

const HamburgerMenu = styled.div`
  cursor: pointer;
  box-sizing: border-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
`;

export default function Layout({ children }: ChildrenProps) {
  return (
    <>
      <Wrapper>
        <Header>
          <img src="https://notahotel.com/assets/images/logo-header.svg" />
          <img src="https://notahotel.com/assets/images/icon-brochure.svg" />
          <p>Documents and inquiries</p>
          <HamburgerMenu><span></span><span></span></HamburgerMenu>
        </Header>
        {children}
      </Wrapper>
    </>
  );
}