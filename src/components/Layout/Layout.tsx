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
  height: 59px;
  top: 0;
  left: 0;
  right: 0;
  background-color: hsl(0, 0%, 100%);
  display: flex;
  justify-content: space-between;
`;

const HamburgerMenuWrapper = styled.div`
  cursor: pointer;
  box-sizing: border-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
`;

const HamburgerMenu = styled.div`
  display: inline-block;
  transition-duration: 0.4s;
  transition-timing-function: ease;
  transition-delay: 0s;
  transition-property: all;
  width: 16px;
  height: 12px;
  position: relative;
  cursor: pointer;
  border:1px solid red;
`;

export default function Layout({ children }: ChildrenProps) {
  return (
    <>
      <Wrapper>
        <Header>
          <a href="/">
            <img src="https://notahotel.com/assets/images/logo-header.svg" />
          </a>
          <div>
            <a href="/">
              <img src="https://notahotel.com/assets/images/icon-brochure.svg" />
              <p>Documents and inquiries</p>
            </a>
            <HamburgerMenuWrapper>
              <HamburgerMenu>
                <span></span>
                <span></span>
              </HamburgerMenu>
            </HamburgerMenuWrapper>
          </div>
        </Header>
        {children}
      </Wrapper>
    </>
  );
}