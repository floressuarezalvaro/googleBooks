import React from "react";
import API from "../utils/API";

const SavedCard = ({data}) => {
	const handleDelete = async (e) => {
		try {
			const _id = e.target.getAttribute("data-value");
			await API.deleteBook(_id);
			window.location.reload();

		} catch (err) {
			console.log(err);
		}
	};
	const spacing = {
		margin: "20px 20px 10px 10px",
		padding: "15px 15px 15px 15px",
	}
	return (
		<>
			{data &&
				data.map((data) => (
					<div
						key={data._id}
						className="col s12 m7"
					>
						<h3 className="header" style={spacing}>{data.title}</h3>
						<div className="card horizontal">
							<div className="card-stacked">
								<div className="card-content">
									<p>{data.description}</p>
									<br />
									<p>Authors: {data.author}</p>
								</div>
								<div className="card-action">
									<a target="blank" href={data.link}>
										Preview
									</a>
									<button
										onClick={handleDelete}
										className="btn waves-effect waves-light"
										name="action"
										data-value={data._id}
									>
										Delete Book
									</button>
								</div>
							</div>
						</div>
					</div>
				))}
		</>
	);
};

export default SavedCard;