import React from 'react';
import { Debounce } from 'react-throttle';

const Search = props => (
	<Debounce time="300" handler="onChange">
		<input type="text" name="search" placeholder="Search.." onChange={props.onInputChange} />
	</Debounce>
)

export default Search;