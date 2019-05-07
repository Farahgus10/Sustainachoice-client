import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import ConsumerHowPage from '../../Components/InfoSection/ConsumerHowPage';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MemoryRouter><ConsumerHowPage /></MemoryRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });