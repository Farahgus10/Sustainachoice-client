import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import BusinessHowPage from '../../Components/InfoSection/BusinessHowPage';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MemoryRouter><BusinessHowPage /></MemoryRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });