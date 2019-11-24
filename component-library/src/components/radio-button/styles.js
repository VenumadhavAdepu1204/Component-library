import styled from 'styled-components'

export const InputWrapper = styled.input`
  -webkit-appearance: none;
      content: '';
      width: 24px;
      height: 24px;
      background-color: white;
      border:1px solid grey;
      border-radius: 50%;

      &:checked{
        border:2px solid #004165;
      }

      &:checked:after{
        -webkit-appearance:none;
         content:'';
         background-color:#004165;
         border:1px solid #004165;
         height:12px;
         width:12px;
         display:inline-block;
         margin:25%;
         border-radius: 50%;
         transform: translate(-8%,-8%);
      }
     &:disabled{
            -webkit-appearance: none;
            content: '';
            width: 20px;
            height: 20px;
            background-color: grey};
            border: 1px solid grey;
            border-radius: 50%;
        }
`

export const LabelWrapper = styled.label`
  position: relative;
  bottom: 8px;
  left: 8px;
 
`
