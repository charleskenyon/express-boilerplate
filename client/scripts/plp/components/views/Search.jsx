import React from 'react';
import { Debounce } from 'react-throttle';

const Search = ({ onInputChange }) => (
	<Debounce time="300" handler="onChange">
		<input type="text" name="search" placeholder="Search.." onChange={onInputChange} />
	</Debounce>
)

export default Search;