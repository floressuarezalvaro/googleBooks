import React from "react";
import API from "../utils/API";
import { toast } from "react-toastify";

const SearchCard = ({ data }) => {
  const handleSave = async (e) => {
    try {
      const indexValue = e.currentTarget.getAttribute("data-value");
      const bookObject = data[indexValue].volumeInfo;

      let storeBars = {
        title: bookObject.title,
        author: bookObject.authors,
        description: bookObject.description,
        img: bookObject.imageLinks.thumbnail,
        link: bookObject.previewLink,
      };
      const newBook = await API.saveBook(storeBars);
      toast.success("Bar Added");
      console.log(newBook);
    } catch (err) {
      console.log(err);
    }
  };

  const spacing = {
    margin: "20px 20px 10px 10px",
    padding: "15px 15px 15px 15px",
  };

  return (
    <>
      {data &&
        data.map((data, index) => (
          <div key={index} className="col s12 m7">
            <h3 className="header" style={spacing}>
              {data.volumeInfo.title}
            </h3>
            <div className="card horizontal">
              <div className="card-image">
                <img
                  style={spacing}
                  src={
                    data.volumeInfo.imageLinks.thumbnail
                      ? data.volumeInfo.imageLinks.thumbnail
                      : "No image thumbnail provided by API, sorry"
                  }
                  alt={data.volumeInfo.title}
                />
              </div>
              <div className="card-stacked">
                <div className="card-content">
                  <p>{data.volumeInfo.description}</p>
                  <br />
                  <p>Authors: {data.volumeInfo.authors}</p>
                </div>
                <div className="card-action">
                  <button
                    onClick={handleSave}
                    className="btn waves-effect waves-light"
                    name="action"
                    data-value={index}
                  >
                    Save Book
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default SearchCard;
