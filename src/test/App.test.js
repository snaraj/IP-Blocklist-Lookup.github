import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import App from '../App';
import Displaybox from '../components/Displaybox/Displaybox';
import Tittle from '../components/Tittle/Tittle';
import Searchbox from '../components/Searchbox/Searchbox';

configure({ adapter: new Adapter() });

describe('App', () => {
	it('App renders correctly in "debug" mode', () => {
		const component = shallow(<App debug />);
		expect(component).toMatchSnapshot();
	});
});

describe('Tittle', () => {
	it('Tittle renders correctly', () => {
		const component = shallow(<Tittle />);
		expect(component).toMatchSnapshot();
	});
});

describe('Displaybox', () => {
	it('Diplays something given a limit, a filter and a list of ips', () => {
		const component = shallow(<Displaybox limit={50} searchFilter={''} ips = {['131.204.192.84', '43.117.236.241']} />);
		expect(component.find('.text')).toBeDefined();
	});
});

describe('Searchbox', () => {
	it('handles a searchChange input', () => {
		const component = shallow(<Searchbox searchChange={'10'} />);
		expect(component.find('.search-box')).toBeDefined();
	})
})

//testing endpoint
describe('Testing endpoint', () => {
	it('Should get ip file', () => {
		return fetch('http://localhost:3000/').then(response => {
			return response.json();
		}).then(ip => {
			expect(ip).toBeDefined()
		});
	});
});