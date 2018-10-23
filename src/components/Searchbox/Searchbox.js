import React from 'react';
import './Searchbox.css';

const Searchbox = ({searchChange}) => {
	return (
		<div className='pa2 search-box'>
			<input 
				className='pa3 ba b--green bg-lightest-blue search-text'
				type='search' 
				placeholder='Filter'
				onChange={searchChange} 
			/>
		</div>
	)
}

export default Searchbox;