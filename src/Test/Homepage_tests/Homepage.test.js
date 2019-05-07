import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Homepage from '../../Components/Homepage/Homepage';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MemoryRouter><Homepage /></MemoryRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });