import React from "react";

export default function Form() {
  return (
    <div className="Form">
      <form id="submit-form">
        <div className="form-group">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter a City"
              aria-label="Type City"
              aria-describedby="basic-addon2"
              autoFocus="on"
              id="userInput"
              autocomplete="off"
            />
            <div className="input-group-append">
              <button
                id="submit-button"
                className="btn btn-info"
                type="submit"
                autoFocus="on"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
