import styled, { css, keyframes } from 'styled-components'

const slidesdown = keyframes`
    from {
    margin-bottom: 0%;
    opacity: 0.68;
    height: 0px;
    }
    to {
    margin-bottom: 100%;
    opacity: 0.68;
    height: 280px;
    }
`
export const DateFieldWrapper = styled.div`
    position: relative;
`
export const DateInputContainer = styled.div`
    display: flex;
    > input {
        width: 100%;
        border: 1px solid #CDCDCD;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
        height: 48px;
        font-family: MyriadPro-Regular;
        font-size: 20px;
        padding-left: 16px;
    }
`

export const IconWrapper = styled.button`
    background: transparent;
    border: 0;
    svg {
        color: ${props => props.showCalendar ? ' #007dba' : '#f2f2f2'};
        &:hover {
            color: #007dba;
        }
    }
`

export const CalendarContainer = styled.div`
    position: absolute;
    z-index: 1;
    width: 100%;
    max-height: 280px;
    animation: ${slidesdown} 0.20s ease-out;
`
export const DateInputBox = styled.div`
    width: 100%;
    border: 1px solid #CDCDCD;
    border-radius: 4px;
    height: 48px;
    font-family: MyriadPro-Regular;
    font-size: 20px;
    padding-left: 16px;
`

export const CalendarWrapper = styled.div`
    background-color: #FFFFFF;
    border-radius: 3px 3px 3px 3px;
    padding: 16px;
    margin-top: 4px;
    box-shadow: 0px 1px 2px 0px rgb(238, 238, 238);
    border: 1px solid #CDCDCD;
    z-index: 1;
    top: 70px;
    right: 200px;
`

export const MonthContainer = styled.div`
    flex-wrap: wrap;
`
export const WeekdayContainer = styled.div`
    display: flex;
    padding-bottom: 8px;
`
export const WeekRow = styled.div`
    display: flex;
`
export const Weekdays = styled.div`
    display: block;
    flex: 1 0 0%;
    text-align: center;
    height: 15px;
    color: #494949;
    font-weight: 600;
    font-size: 14px;
`

export const EmptyStateDay = styled.div`
    display: block;
    flex: 1 0 0%;
    width: calc(100% / 7);
    margin:  0;
    padding: 0.5rem;
    border: 1px solid white;
`

export const Days = styled.button`
    font-size: 14px;
    font-weight: normal;
    letter-spacing: 0px;
    text-align: center;
    display: block;
    flex: 1 0 0%;
    width: calc(100% / 7);
    margin: 0;
    padding: 0.5rem;
    border: 1px solid white;
    border-radius: 0;
    outline: none;
    text-align: center;
    cursor: pointer;
    background: transparent;

    ${props => props.selected && css`
        background: #007dba;
        border: 1px solid #007dba;
        border-radius: 3px 3px 3px 3px;
        color: #fff;
    `}
    ${props => props.hovering && css`
        background: #0072AC;
        border: 1px solid #0072AC;
        border-radius: 3px 3px 3px 3px;
        color: white;
    `}
    ${props => props.current && css`
        background: #EEEEEE;
        border: 1px solid #EEEEEE;
    `}
`

export const LabelName = styled.button`
    background: transparent;
    flex: 1 0 0%;
    width:100%;
    height: 34px;
    margin: 0;
    padding: 0.5rem;
    border: 1px solid white;
    border-radius: 0;
    outline: none;
    font-size: 1rem;
    text-align: center;
    cursor: pointer;
    &:hover {
        background: #0072AC;
        border-radius: 3px 3px 3px 3px;
        color: #FFFFFF;
    }

    ${props => props.selected && css`
        background: #0072AC;
        border: 1px solid #0072AC;
        color: white;
    `}

    ${props => props.current && css`
        background: #EEEEEE;
        border: 1px solid #EEEEEE;
    `}
`
export const MYLabel = styled.span`
    font-size: 14px;
    font-weight: normal;
    height: 15px;
    letter-spacing: 0px;
    text-align: center;
    width: 73px;
`
export const Wrapper = styled.div`
    padding-bottom: 8px;
    width:33.3%;
`
export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const DecadeViewWrapper = styled.div`
    display: flex;
    flex-wrap: wrap; 
`
export const DecadeContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const NavigationWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    font-size: 1.2rem;
    color: #4f4f4f;  
    padding-bottom: 24px;
    height: 60px;
`
export const LeftArrow = styled.button`
    background: transparent;
    padding-left: 0px;  
    border: 0px;
    svg {
        color: #0072AC; 
        height: 16px;
        width: 16px;
    }
    width: 34px;
    height: 37px;
    &:hover {
        background: #EEEEEE;
        border: 1px solid #EEEEEE;
        border-radius: 3px 3px 3px 3px;
    }
`
export const RightArrow = styled.button`
    border: 0px;
    background: transparent;  
    &:focus {
        outline:0;
    }
    padding-right: 0px;
    padding-left: 0px;
    svg {
        color: #0072AC; 
        height: 16px;
        width: 16px;
    }
    width: 34px;
    height: 37px;
    &:hover {
        background: #EEEEEE;
        border: 1px solid #EEEEEE;
        border-radius: 3px 3px 3px 3px;
    }
`
export const NavigationLabel = styled.button`
    border: 0px;
    background: transparent;
    font-weight: bold;
    font-size: medium;
    color: #0072AC;
    &:focus {outline:0;} 
    height: 35px;
    width: 184px;
    padding-left: 4px;
    padding-right: 4px;
    &:hover {
        background: #EEEEEE;
        border: 1px solid #EEEEEE;
        border-radius: 3px 3px 3px 3px;
    }
`
