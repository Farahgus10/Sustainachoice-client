import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import SearchForm from '../../Components/SearchForm/SearchForm';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Search Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SearchForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('calls handleSubmit prop when form is submitted', () => {
    const handleSubmitFn = jest.fn();
    const wrapper = mount(<SearchForm handleSubmit={handleSubmitFn}/>);

    const form = wrapper.find('form');
    form.simulate('submit');
    expect(handleSubmitFn).toHaveBeenCalledTimes(1);
  });

  it('renders a zip code input', () => {
    expect(shallow(<SearchForm />).find('#zip-code').length).toEqual(1)
  });
})
