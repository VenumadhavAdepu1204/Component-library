import styled, { css } from 'styled-components'


export const InputTextContainer = styled.div`
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0px;
}
input[type=number] {
  -moz-appearance:textfield;
}
input::-ms-clear {
  display:none;
}
input {
  color: grey;
  padding: 0 12px;
  width: 100%;
  border: ${props => props.error === true ? `1px solid red` : `1px solid #CCCCCC`};
  border-radius: 4px;
  height: 38px;
  line-height: 20px;
  font-size: 16px;
  letter-spacing: -0.1px;
  margin-top: 12px;
  &[readonly] {
    box-shadow: none !important;
    &:focus {
      box-shadow: 0 0 5px 0 rgba(0,144,222,0.4);
    }
  }
  
  &:hover {
    border: 1px solid blue;
  }
 
  ${props => props.error && css`
    border-color: red !important;
  `}
  @media (min-width: 769px) and (max-width: 1024px), (min-width: 1025px) { 
    height: 44px;
    font-size: 16px;
    padding: 0 16px;
    
   }

   @media (max-width: 479px) {
    width: 100%;
    height: 44px;
    margin-top: 8px;
    margin-bottom: 8px;
   }
} 
`
export const Label = styled.label`
display: block;
margin:0px;
`
export const CounterLabel = styled(P)`
  display: block;
  margin: 0px;
  float: right;
`
export const ErrorSpan = styled(P)`
margin-bottom: 0;
display: block;
color: red;
`
export const SubLabel = styled(P)`
display: block;
margin-bottom: 0px;
`
export const TextFieldWrapper = styled.div`
position: relative;
z-index: 0;
width: 100%;
`
export const AfterFieldIcon = styled.span`
position: absolute;
right: 0px;
bottom: 0px;
overflow: hidden;
padding: 12px;
transition: font-size 0.2s, padding 0.2s;

@media screen and (max-width: 479px){
  bottom: 8px;
}
`
export const LabelCountWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
