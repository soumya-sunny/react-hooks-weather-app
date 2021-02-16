import React from 'react'
import { mount } from 'enzyme'
import toJSON from 'enzyme-to-json'

import Forecast from '../Forecast'
import { ReduxWrapper } from "../../../util/test-utils";


describe('<Forecast />', () => {
    const data = {
        forecasts: [
        { main: { temp_min: 28, temp_max: 30 } },
        { main: { temp_min: 28, temp_max: 30 } },
        { main: { temp_min: 28, temp_max: 30 } },
        { main: { temp_min: 28, temp_max: 30 } },
        { main: { temp_min: 28, temp_max: 30 } },
    ]};
    const wrapper = mount(<ReduxWrapper state={data}><Forecast /></ReduxWrapper>)

    test('render', () => {
        expect(toJSON(wrapper)).toMatchSnapshot()
    })

    test('It should display forecast for 5 days', () => {
        expect(wrapper.find('div[data-testid="forecast-container"]').length).toBe(5)
    })
})
