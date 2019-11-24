import styled, {css} from 'styled-components'

export const AutocompleteWrapper = styled.div`
  position: relative;
`

export const ResultsWrapper = styled.ul`
  max-height: 210px;
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
  top: ${props => props.labelSize === 'large' ? '84px' : '68px'};
  left: 0;
  right: 0;
  z-index: 999;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
  opacity: 0;
  transition: opacity 0.2s ease;
  display: none;

  ${props => props.show && css`
    opacity: 1;
    display: block;
  `}
`

export const Result = styled.li`
  position: relative;
  line-height: 24px;
  cursor: pointer;
  margin-bottom: 0;
  padding: 8px 16px;
  color: lightblue;

  &:hover{
    background: white};
    color: lightblue;
  }

  ${props => props.secondary && css`
    background: grey;
  `}

  &:last-child {
    border-radius: 0 0 3px 3px;
  }
`

export const CloseButton = styled.button`
  border: 0;
  padding: 0;
  margin: 0;
  cursor: pointer;
  display: block;
  transition: color 0.2s;
  background-color: transparent;
`
