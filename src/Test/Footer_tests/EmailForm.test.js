import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import EmailForm from '../../Components/Footer/EmailForm';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

/*
When I submit the form, I expect:
  - the submit function to be called

When I type in the input, I expect:
  - the updateEmail prop to be called 
*/

describe('Email Form Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<EmailForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('calls emailSubmit prop when form is submitted', () => {
    const handleEmailSubmitFn = jest.fn();
    const wrapper = mount(<EmailForm emailSubmit={handleEmailSubmitFn}/>)
    
    const form = wrapper.find('form');
    form.simulate('submit');
    expect(handleEmailSubmitFn).toHaveBeenCalledTimes(1);
  })

  // it('calls updateEmail prop onChange', () => {
  //   const updateEmailFn = jest.fn();
  //   const wrapper = mount(<EmailForm updateEmail={updateEmailFn} value="some value"/>)
    
  //   const form = wrapper.find('input');
  //   form.simulate('change');
  //   expect(updateEmailFn).toBeCalledWith('some value');
  // })
})
