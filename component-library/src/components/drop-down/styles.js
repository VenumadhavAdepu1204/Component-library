import styled, {css} from 'styled-components'
import styleVars from '../../styles-global/global'

export const DropdownWrapper = styled.div`
position: relative;
`

export const LabelDD = styled.label`
  display: block;
  font-size: 16px;
  @media screen and (min-width: 769px) and (max-width: 1024px), (min-width: 1025px)  {
    display : none;
  }
`

export const MainWrapper = styled.div`
display: none;
@media screen and (min-width: 769px) and (max-width: 1024px), (min-width: 1025px) {
  display: block;
input {
  border: ${props => props.bgColor === false ? '1px solid #007DBA' : '1px solid #CCC'};
}
  span {
    border-left: ${props => props.bgColor === false ? '1px solid #007DBA' : '1px solid #CCC'};
    border-radius: 0 4px 4px 0;
    background: ${props => props.bgColor === false ? '#007DBA' : '#EEEEEE'};
    padding-left: 14px; //specs given by cory : SAIVS-480
    padding-top: 13px; //specs given by cory : SAIVS-480
    height: 42px;
    bottom: 1px;
    width: 44px;
    right: 1px;
  }
}
`

export const ResultWrapper = styled.ul`
  display: none;

  @media screen and (min-width: 769px) and (max-width: 1024px), (min-width: 1025px)  {
  height: auto;
  max-height: 243px;
  overflow-y: auto;
  min-width: 100%;
  box-sizing: border-box;
  list-style: none;
  padding: 0;
  border-radius: 3px;
  margin: 12px 0 0;
  background: white;
  border: 1px solid grey;
  text-shadow: none;
  position: absolute;
  top: ${props => props.labelSize === 'large' ? '84px' : '50px'};
  left: 0;
  right: 0;
  z-index: 10;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
  opacity: 0;
  transition: opacity 0.2s ease;
  display: none;

  ${props => props.show && css`
    opacity: 1;
    display: block;
  `}
}
`
export const Result = styled.li`
  @media screen and (min-width: 769px) and (max-width: 1024px), (min-width: 1025px)  {
    position: relative;
    line-height: 24px;
    cursor: pointer;
    margin-bottom: 0;
    padding: 8px 16px;
    color: lightblue;
  
    &:hover{
      background: white;
      color: white;
    }
  
    &:last-child {
      border-radius: 0 0 3px 3px;
    }
  }
`


export const Button = styled.button`
  border: 0;
  padding: 0;
  margin: 0;
  cursor: pointer;
  display: block;
  transition: color 0.2s;
  background-color: transparent;
  @media screen and (max-width: 479px) {
    position: absolute;
  }
`

export const ButtonSpan = styled.span`
@media screen and (max-width: 479px) {
  border: ${props => props.bgColor === false ? '1px solid #007DBA' : '1px solid #CCCCCC'};
  border-radius: 0 4px 4px 0;
  background: ${props => props.bgColor === false ? '#007DBA' : '#EEEEEE'};
  position: absolute;
  width: 44px;
  top: 31px;
  right: 0;
  height: 42px;
  bottom: 0;
  overflow: hidden;
  padding: 12px;
  transition: font-size 0.2s, padding 0.2s;
}
&:focus {
  span {
    // background: gold;
  }
  svg {
    trasform: 180deg;
    color; #fff;
  }
}
`

export const MobileFieldIcon = styled.div`
color: blue;
position: absolute;
color: lightblue;
pointer-events: none;
padding-left: 14px;
padding-top: 13px;
right: 1px;
top: ${props => props.label ? '31px' : '13px'};
width: 44px;
height: 42px;
background-color: grey;
position: absolute;
pointer-events: none;
display: block;
border-left: 1px solid grey;
border-top-right-radius: 3px;
border-bottom-right-radius: 3px;

@media (min-width: 769px) and (max-width: 1024px), (min-width: 1025px) {
  display: none;
}
`
