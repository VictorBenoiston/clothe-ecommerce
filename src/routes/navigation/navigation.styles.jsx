import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`
export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
  &:hover {
    transform: scale(1.1);
    transition: all .2s;
  }
`
export const NavLinks = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

`
export const NavLink = styled(Link)`
  padding: 0px 20px;
  cursor: pointer;
  text-align: center;
  &:hover {
    transform: scale(1.1);
    transition: all .2s;
  }
`

