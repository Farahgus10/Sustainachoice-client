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

  it('calls handleSearchSubmit prop when form is submitted', () => {
    const handleSearchSubmitFn = jest.fn();
    const wrapper = mount(<SearchForm handleSearchSubmit={handleSearchSubmitFn}/>);

    const form = wrapper.find('form');
    form.simulate('submit');
    expect(handleSearchSubmitFn).toHaveBeenCalledTimes(1);
  });

})
