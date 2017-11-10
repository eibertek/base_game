// Link.react-test.js
import React from 'react';
import App from "../../App.jsx";
import { shallow, configure  } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Link changes the class when hovered', () => {

    it('works AppProvider', ()=>{
        const store = {};
        const component = shallow(<App store={store} location="localhost" />);
        expect(component).toMatchSnapshot();

    });
});