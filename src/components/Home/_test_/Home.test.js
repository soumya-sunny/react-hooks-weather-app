import React from 'react'
import { render, fireEvent, screen } from '../../../util/test-utils'

import Home from '../Home'

describe('<Home />', () => {
    let wrapper;

    beforeEach(() => {
        const defaultProps = {}
        wrapper = render(<Home {...defaultProps} />)
    })

    test('render', () => {
        expect(wrapper).toMatchSnapshot()
    })

})
