import styled, { css } from 'styled-components'

export const Maincontainer = styled.div`
  width: 300px;
  p {
  margin-left: 16px;
  margin-bottom: 12px !important;
  }`

export const RowWrapper = styled.div`
    display: flex;  
    flex-wrap: wrap;
    align-content: space-between;    
    button {
      width: 64px;
      height: 44px;
      margin-left: 16px;
      margin-bottom: 16px;
      background: 6px;
      line-height:normal;     
    } 
    button:hover {
      background: 6px;
    }
    button:focus {
      background: grey;
    }
  `

export const KeyDisplayDiv = styled.div`  
  font-weight:normal;
  color:grey;
  ${props => props.pad && css`
   padding-top: 10px;
   padding-bottom: 14px;
  `}
  `

export const KeyNumber = styled.div`
  font-size: 26px;
  height: 24px;
  line-height:24px;
  padding-top: 1px;
  ${props => props.pad && css`
    font-size: 18px;
    height: 20px;
    line-height:20px;
 `}
  `

export const KeyText = styled.div`
  font-size:9px;
  height: 20px;
  line-height:20px;
  `
