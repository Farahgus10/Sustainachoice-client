import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import WhyPage from '../../Components/InfoSection/WhyPage';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MemoryRouter><WhyPage /></MemoryRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });