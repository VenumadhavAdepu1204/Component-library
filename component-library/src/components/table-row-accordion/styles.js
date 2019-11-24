import styled, {css} from 'styled-components'

export const AccordionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  svg {
    margin-left: auto;
    margin-right: 8px;
  }
`
export const AccordionContent = styled.div`
  ${props => !props.active && css`
    display: none;
  `}
  background-color: white;
  overflow: hidden;
  transition: max-height 0.6s ease;
`

export const AccordionTitle = styled.p`

`

export const AccordionButton = styled.button`
  cursor: pointer;
  width: 100%;
  padding: 0px;
  display: flex;
  align-items: center;
  border: none;
  outline: none;
  transition: background-color 0.6s ease;
`
