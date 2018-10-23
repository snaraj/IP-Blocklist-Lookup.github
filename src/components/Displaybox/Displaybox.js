import React from 'react';
import './Displaybox.css';

const Displaybox = (props) => {

	const getFilteredIps = ()  => {
		return props.ips.filter((ip) => {
			const stringIp = ip[0];
			return stringIp.includes(props.searchFilter);
		}).slice(0, props.limit);
	}

	return (
		<div className='text'>
			{JSON.stringify(getFilteredIps())}
		</div>
	)
}

export default Displaybox;