import styled, { css } from 'styled-components'

export const TabWrapper = styled.div`
width:100%;
`
export const TabHead = styled.ul`
width:100%;
padding:0px;
margin:0px;
display:flex;
align-items: flex-end;
border-bottom: ${props => props.tabHighlight === true ? `4px solid #004165` : `1px solid #004165`};
>li:first-child{
    border-left: 1px solid  #004165;
    border-top-left-radius: 4px;
    margin-left: 0px;
}
>li:last-child{
    border-right: 1px solid  #004165;
    border-top-right-radius: 4px};   
}
`

export const TabBody = styled.div`
width:100%;
border :1px solid grey;
margin-top: 4px;`

export const TabTitle = styled.div`
`

export const TabContainer = styled.li`
width:${props => 100 / props.totalTabs}%;
display: flex;
align-items: center;
justify-content: center;
border-left:1px solid  #004165;
border-right: ${props => props.tabHighlight === true ? `1px solid  #004165;` : '0px'};
border-top: 1px solid  #004165;
background:${props => props.selectedColor ?  '#004165' : null};
color:${props => props.selectedColor ? white : blue
};
margin-left: ${props => props.tabHighlight === true ? '10px' : '0px'};
${props => props.selectedColor && props.tabHighlight && css`
   height:76px
`};
${props => props.tabHighlight === false && css`
height:44px;
`};
${props => props.tabHighlight === true && props.selectedColor === false && css`
height:66px;
`};
border-top-left-radius: ${props => props.tabHighlight === true ? '4px' : '0px'};
border-top-right-radius: ${props => props.tabHighlight === true ? '4px' : '0px'};
`
