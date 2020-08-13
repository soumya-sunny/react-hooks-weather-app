import React from 'react'
import { render } from '@testing-library/react'

import Day from '../Day'

describe('<Day />', () => {
    const defaultProps = { data: { temp_min: 20, temp_max: 28 }, date: "10 Mon" }
    const wrapper = render(<Day {...defaultProps} />)

    test('render', () => {
        expect(wrapper).toMatchSnapshot()
    })
})
