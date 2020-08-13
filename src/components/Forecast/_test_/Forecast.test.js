
import React from 'react'
import { render, fireEvent, screen } from '../../../util/test-utils'


import Forecast from '../Forecast'


describe('Forecast data', () => {
    let wrapper;
    beforeEach(()=>
   wrapper= render(<Forecast />, {
        initialState: {
            forecasts: [
             {   main:{ temp_min: 28, temp_max: 30 }},
             {   main:{ temp_min: 28, temp_max: 30 }},
             {   main:{ temp_min: 28, temp_max: 30 }},
             {   main:{ temp_min: 28, temp_max: 30 }},
             {   main:{ temp_min: 28, temp_max: 30 }},
                ]
        },
    })
    )
    test('render', () => {
        expect(wrapper).toMatchSnapshot()
    })
    test('It should display forecast for 5 days', () => {
        expect(screen.queryAllByText(/28/).length).toBe(5)
    })


})
