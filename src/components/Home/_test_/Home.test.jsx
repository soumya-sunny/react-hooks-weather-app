import React from 'react'
import {mount} from 'enzyme'

import Home from '../Home'
import {ReduxWrapper } from "../../../util/test-utils";


describe('<Home />', () => {
    const defaultProps = {}
    const wrapper = mount(<ReduxWrapper><Home {...defaultProps} /></ReduxWrapper>)

    test('render', () => {
        expect(wrapper).toMatchSnapshot()
    })
})
