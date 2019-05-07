import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import SearchForm from '../../Components/SearchForm/SearchForm';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SearchForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  });