import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import InfoSection from '../../Components/InfoSection/InfoSection';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MemoryRouter><InfoSection /></MemoryRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });