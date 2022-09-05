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
  align-items: center;
  padding-top: 0.4rem;
  padding-left: 3.125rem;
`;

const HeaderRight = styled.div`
  display: flex;
  flex-direction: row;
  width: 20rem;
  font-size: 12px;
  font-weight: 600;
  gap: 1rem;
  align-items: center;
  justify-content: center;
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

  & > span {
    position: absolute;
    left: 0px;
    width: 100%;
    height: 4px;
    background-color: rgb(0, 0, 0);
    display: inline-block;
    transition-duration: 0.4s;
    transition-timing-function: ease;
    transition-delay: 0s;
    transition-property: all;
    box-sizing: border-box;
    &:last-child {
      top: 8px;
    }
  }
`;

const Atag = styled.a`
  cursor: pointer;
  display: flex;
  gap: 4px;
`;

const Ptag = styled.p`
  text-decoration: underline;
`;

export default function Layout({ children }: ChildrenProps) {
  return (
    <>
      <Wrapper>
        <Header>
          <a href="/">
            <img src="https://notahotel.com/assets/images/logo-header.svg" alt="NOT A HOTEL" width="70px" height="19px"/>
          </a>
          <HeaderRight>
            <Atag href="/">
              <img src="https://notahotel.com/assets/images/icon-brochure.svg" />
              <Ptag>Documents and inquiries</Ptag>
            </Atag>
            <HamburgerMenuWrapper>
              <HamburgerMenu>
                <span></span>
                <span></span>
              </HamburgerMenu>
            </HamburgerMenuWrapper>
          </HeaderRight>
        </Header>
        {children}
      </Wrapper>
    </>
  );
}