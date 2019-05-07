import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

import ResultsPage from '../../Components/Results/ResultsPage';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MemoryRouter><ResultsPage /></MemoryRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });