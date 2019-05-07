import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import ResultsList from '../../Components/Results/ResultsList';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const resultsList = [ 
  {
    location_name: "Location name 1",
    location_type: "Locationt 1 type x",
    info: "Location 1 info", 
    location_address: "location 1 address",
    website: "location 1 website"
  },
  {
    location_name: "Location name 2",
    location_type: "Locationt 2 type x",
    info: "Location 2 info", 
    location_address: "location 2 address",
    website: "location 2 website"
  },
]


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ResultsList />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

// it('renders correctly when there are no results', () => {
//   const tree = renderer.create(<ResultsList />)
//     .toJSON();
//     expect(tree).toMatchSnapshot();
// })

// it('renders correctly when there are mulitples items', () => {
//   const tree = renderer.create(<ResultsList results={resultsList} />)
//     .toJSON();
//     expect(tree).toMatchSnapshot();
// })