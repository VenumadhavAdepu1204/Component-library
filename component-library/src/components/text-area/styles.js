import styled, { css } from 'styled-components'

export const TextAreaMain = styled.div`
        display: inline-block;
        width: 100%;`
export const TextAreaCount = styled.label`
        float: none;
        position: absolute;
        right: 16px;
        margin-top: 12px;
        font-size: 12px};`

export const TextAreaContent = styled.textarea`
        width: 100%;
        height: ${props => props.height}px;
        padding:  12px 48px 16px 16px;
        box-sizing: border-box;
        border-radius: 2px;
        -webkit-appearance: none;
        font-family: ${styleVars.fonts.fontFamily}, Arial;
        font-size: 16px;
        border: 1px solid ${props => props.borderColor};
        resize:none;
        &::-webkit-input-placeholder {
        color: grey;
        opacity: 10%;
        }
        ${props => props.dataWithLabelAndCount && css`
            padding:  16px;
            color: grey;
            border: ${props => props.error === true ? `1px solid red` : `1px solid lightblue`};
            border-radius: 4px};
            &:hover {
                border: 1px solid blue;
            }
        `}
        `
export const Label = styled(P)`
        margin: 0px;
        `
export const LabelWrapper = styled.span`
        display: flex;
        justify-content: space-between;
        margin-bottom: 12px;
      `
