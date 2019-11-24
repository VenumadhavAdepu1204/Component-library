import styled from 'styled-components'

export const Wrapper = styled.div`
 width: 100%;
 background: white;
`

export const SearchContainer = styled.div`
  width: 100%;
  padding: 12px;
  border: none;
  border-bottom: 1px solid ${anzGrey5};
  div, input {
    padding-left: 8px;
    margin-top: 0px;
    margin-bottom: 0px;
    display: inline-block;
    border: none;
    width: 88%;
    margin-left: 0px;
    vertical-align: top;
    &:focus {
      border: none;
      outline:none;
      box-shadow: none;
    }
  }

  a {
    margin-top: 12px;
    &:first-child {
      float: left;
      color: blue;
      transform: rotate(270deg); 
    }
    &:last-child {
      float: right;
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
export const NoItems = styled.div`
  background-color: white;
  text-align: center;
  margin-top: 24px;
  margin-bottom: 64px;
`
