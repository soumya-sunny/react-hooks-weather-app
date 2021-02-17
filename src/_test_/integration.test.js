import React from 'react'
import { renderWithRouter, fireEvent, screen } from '../util/test-utils';
import moxios from "moxios";
import Routes from '../routes';
import { logRoles } from '@testing-library/dom';

const forecasts = {
    list: [{ main: { temp_min: 28, temp_max: 30 } },
    { main: { temp_min: 28, temp_max: 30 } },
    { main: { temp_min: 28, temp_max: 30 } },
    { main: { temp_min: 28, temp_max: 30 } },
    { main: { temp_min: 28, temp_max: 30 } }]
}

describe('integration tests', () => {
    let wrapper;
    beforeEach(() => {
        moxios.install();
    })

    afterEach(() => {
        moxios.uninstall();
    })



    test("able to change inputs", async () => {
        wrapper = renderWithRouter(<Routes />);
        fireEvent.change(screen.getByTestId('select-city'), {
            target: { value: 'Bengaluru' },
        });
        const radio = screen.getByLabelText('Celcius');
        //trying logRoles
     const grid= document.getElementById('grid');
        logRoles(grid)

        fireEvent.click(radio);
        fireEvent.click(screen.getByText("Get Forecast"));
        moxios.wait(() => {
            let request = moxios.requests.mostRecent();
            request.respondWith({ status: 200, response: forecasts })
        })
        const node = await screen.getByText(/5 day Forecast/);
        expect(node).toBeInTheDocument();

    })
})

