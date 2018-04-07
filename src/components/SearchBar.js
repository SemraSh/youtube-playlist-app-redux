import React from 'react';

const SearchBar = ({ searchResults, updateQuery, query }) => {

	const submitHandler = (event) => {
		event.preventDefault();
		searchResults(query);
	};

	const onChangeHandler = (event) => {
		updateQuery(event.target.value);
	};
	return (
		<form
			className="d-flex justify-content-center"
			onSubmit={submitHandler}
		>
			<input
				type="text"
				name="query"
				placeholder="Search..."
				value={query}
				onChange={onChangeHandler}
			/>
			<button type="submit">Search</button>
		</form>
	);

};

export default SearchBar;
