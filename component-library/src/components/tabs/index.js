import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { TabWrapper, TabHead, TabBody, TabTitle, TabContainer } from './styles'
const Tab = (props) => {
  const [activeTab, setActiveTab] = useState(props.selectedLabel ? props.selectedLabel : null)

  const handleClick = (label) => {
    setActiveTab(label)
  }
  const tabsNumber = props.children.length

  return (<TabWrapper>
    <TabHead tabHighlight={props.tabHighlight}>
      {props.children.map((tab, index) => {
        return <TabContainer tabIndex={0} key={index} totalTabs={tabsNumber}
          onClick={() => { handleClick(tab.props.label) }} selectedColor={activeTab === tab.props.label}
          tabHighlight={props.tabHighlight} data-testid={tab.props.label}>
          <TabTitle>{tab.props.label} </TabTitle>
        </TabContainer>
      })}
    </TabHead>
    {props.children.map((tab, index) => {
      if (tab.props.label === activeTab) {
        return (tab.props.children && <TabBody key={index}>{tab.props.children}</TabBody>)
      }
    }
    )}
  </TabWrapper>)
}
Tab.defaultProps = {
  tabHighlight: true
}
Tab.propTypes = {
  tabHighlight: PropTypes.bool
}

export default Tab
