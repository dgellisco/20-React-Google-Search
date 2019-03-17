import React from "react";
import "./style.css";

function SearchForm({ q, handleInputChange, handleFormSubmit }) {
  return (
    <form className="form-inline">
      <div className="form-group">
        <input
          className="form-control"
          id="Title"
          type="text"
          value={q}
          placeholder="Search For A Book"
          name="q"
          onChange={handleInputChange}
          size="55"
          required
        />
      </div>
      <button
        onClick={handleFormSubmit}
        type="submit"
        className="btn search-button"
      >
        Search
      </button>
    </form>
  );
}

export default SearchForm;
