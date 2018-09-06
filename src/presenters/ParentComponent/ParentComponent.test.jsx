import React from 'react'
import ParentComponent from './'
import ChildComponentConnector from '../../connectors/ChildComponentConnector'

describe('ParentComponent', () => {
  test('clicking button calls callback prop', () => {
    const buttonActionMock = jest.fn()
    const subject = shallow(<ParentComponent buttonAction={buttonActionMock} />)

    subject.find('button').simulate('click')

    expect(buttonActionMock).toBeCalled()
  })

  test('renders ChildComponentConnector', () => {
    const subject = shallow(<ParentComponent />)

    expect(subject.find(ChildComponentConnector).length).toBe(1)
  })
})
