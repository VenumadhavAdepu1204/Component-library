import React from 'react'
import Tab from './index'
import {render, fireEvent, cleanup} from '@testing-library/react'
describe('testing tab component', () => {
  afterEach(cleanup)
  test('renders properly', () => {
    const {container} = render(<Tab><div label='one'>one</div>
      <div label='two'>two</div>
      <div label='three'>three</div>
    </Tab>)
    expect(container.firstChild).toMatchSnapshot()
  })
  test('renders properly with border and background props', () => {
    const {container} = render(<Tab clickBorder='blue' hoverBackground='black' selectedLabel='one'>
      <div label='one'>one</div>
      <div label='two'>two</div>
      <div label='three'>three</div>
    </Tab>)
    expect(container.firstChild).toMatchSnapshot()
  })
  test('click of tab should render the child ', () => {
    const {container, getByTestId} = render(<Tab><div label='one'>one</div>
      <div label='two'>two</div>
      <div label='three'>three</div>
    </Tab>)
    fireEvent.click(getByTestId('one'))
    expect(container.children.length).not.toBe(0)
  })
  test('keypress of enter,space should render the child', () => {
    const {container, getByTestId} = render(<Tab><div label='one'>one</div>
      <div label='two'>two</div>
      <div label='three'>three</div>
    </Tab>)
    fireEvent.keyUp(getByTestId('one'), {key: 'Enter', code: 13})
    expect(container.children.length).not.toBe(0)
  })
  test('keypress of enter,space should render the child', () => {
    const {container, getByTestId} = render(<Tab><div label='one'>one</div>
      <div label='two'>two</div>
      <div label='three'>three</div>
    </Tab>)
    fireEvent.keyUp(getByTestId('one'), {key: 'Enter', code: 13, keyCode: 13})
    fireEvent.keyUp(getByTestId('one'), {key: 'Space', code: 32, keyCode: 32})
    expect(container.children.length).not.toBe(0)
  })
  test('keypress of arrows should move the focus to tabs', () => {
    const {getByTestId} = render(<Tab><div label='one'>one</div>
      <div label='two'>two</div>
      <div label='three'>three</div>
    </Tab>)
    fireEvent.keyUp(getByTestId('one'), {key: 'Arrow', code: 37, keyCode: 37})
    fireEvent.keyUp(getByTestId('one'), {key: 'Arrow', code: 39, keyCode: 39})
    fireEvent.keyUp(getByTestId('one'), {key: 'Arrow', code: 38, keyCode: 38})
    fireEvent.keyUp(getByTestId('one'), {key: 'Arrow', code: 40, keyCode: 40})
  })
})
