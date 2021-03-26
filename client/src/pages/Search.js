import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import SearchCard from "../components/SearchCard";
import axios from "axios";

const Search = (props) => {
	const [searchBooks, setSearchBooks] = useState();
	const [books, setbooks] = useState();
	const history = useHistory();

	const onChange = (e) => {
		setSearchBooks(e.target.value);
	};

	const onSearch = async (e) => {
		e.preventDefault();
		try {
			const {data} = await axios.put(`book/api`, {searchBooks: searchBooks})
			console.log(data.items)
			setbooks(data.items);
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<div>
			<div className="background"></div>
			<br />

			<div className="container">
				<br />
				<form onSubmit={onSearch} className="col s12">
					<div className="input-field col s8">
						<input
							onChange={onChange}
							name="search"
							type="text"
							className="validate"
						/>
						<label>Search for a book</label>
					</div>
				</form>
				<SearchCard data={books} />
			</div>
		</div>
	);
};

export default Search;