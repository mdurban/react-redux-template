import React from 'react'
import HelloWorld from './'
import ChildComponentConnector from '../../connectors/ChildComponentConnector'

describe('HelloWorld', () => {
  test('clicking button calls callback prop', () => {
    const buttonActionMock = jest.fn()
    const subject = shallow(<HelloWorld buttonAction={buttonActionMock} />)

    subject.find('button').simulate('click')

    expect(buttonActionMock).toBeCalled()
  })

  test('renders ChildComponentConnector', () => {
    const subject = shallow(<HelloWorld />)

    expect(subject.find(ChildComponentConnector).length).toBe(1)
  })
})
