import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import SavedCard from "../components/SavedCard";
import API from "../utils/API"

const Saved = () => {
	const [books, setbooks] = useState();
	const history = useHistory();
	
	useEffect(async () => {
		const savedBooks = await API.getBooks();
		setbooks(savedBooks.data);
	},[]);

	return (
		<div className="container">
			<h2>Saved Books</h2>
			{books && <SavedCard data={books} />}
		</div>
	);
};

export default Saved;