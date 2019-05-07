import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ResultsMap from '../../Components/Results/ResultsMap';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ResultsMap />, div);
    ReactDOM.unmountComponentAtNode(div);
  });