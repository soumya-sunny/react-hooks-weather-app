import React from 'react'
import { ReduxWrapper } from '../util/test-utils';
import moxios from "moxios";
import Routes from '../routes';
import { mount } from 'enzyme'
import { BrowserRouter } from 'react-router-dom';
import Select from '@material-ui/core/Select';
import RadioGroup from '@material-ui/core/RadioGroup';
import { act } from 'react-dom/test-utils';
import Button from '@material-ui/core/Button';

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



    test("able to change inputs", async (done) => {
        wrapper = mount(<BrowserRouter>
            <ReduxWrapper>
                <Routes />
            </ReduxWrapper>
        </BrowserRouter>);
        act(() => {
            wrapper.find(Select)
                .at(0)
                .props()
                .onChange({ target: { value: 'Bengaluru' } })
            const radioInputs = wrapper.find(RadioGroup);
            radioInputs.at(0).props().onChange({ target: { value: "metric" } });
        });
        wrapper.update();
        wrapper.find(Button).simulate("click")
        moxios.wait(() => {
            let request = moxios.requests.mostRecent();
            request.respondWith({ status: 200, response: forecasts });
            done();
        })
        const path = await window.location.pathname;
        expect(path).toEqual('/forecast');

    })
})