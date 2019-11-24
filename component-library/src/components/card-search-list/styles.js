import styled from 'styled-components'

export const CardSearch = styled.div`
 max-height: 500px;
 width: 100%;
 margin-left: auto;
 margin-right: auto;
 background: #fff;
 margin-bottom: 32px;
 @media (min-width: 769px) and (max-width: 1024px), (min-width: 1025px) {
  margin-bottom: 64px};
 }
`
export const CardSearchHeading = styled.div`
  width: 100%;
  border-bottom: 1px solid #cdcdcd;
  padding-left: 24px;
  @media (min-width: 769px) and (max-width: 1024px), (min-width: 1025px){   
    padding-left: 0;
    margin-top: 0;
  }
  margin-top: 12px;
  margin-bottom: 0;
  
`
export const SearchInput = styled.div`
  width: 100%;
  padding: 12px 12px;
  border: none;
  border-bottom: 1px solid #cdcdcd;
  div, input {
    display: inline-block;
    border: none;
    width: 80%;
    margin-left: 0;
    vertical-align: top;
    &:focus {
      border: none;
      outline:none;
    }
    &:focus {
     box-shadow: none;
    }
    input {
      padding-left: 8px;
    }
  }
  a {
    margin-top: 12px;
    &:first-child {
      float: left;
      color: #0072ac;
      transform: rotate(270deg); 
    }
    &:last-child {
      float: right;
      color: #000;
    }
  }
  margin-left: auto;
  margin-right: auto;
`

export const Link = styled.a`
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`
export const NoCards = styled.div`
  background-color: #fff;
  text-align: center;
  margin-top: 24px;
  margin-bottom: 24px;
  font-weight: 24px;
`
