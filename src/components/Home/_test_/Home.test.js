import React from 'react'
import { render, fireEvent, screen } from './test-utils'

import  Home  from '../Home'

describe('<Home />', () => {
    const defaultProps = {}
    const wrapper = render(<Home {...defaultProps} />)

    test('render', () => {
        expect(wrapper).toMatchSnapshot()
    })
})
