import React from "react";

export default function Form() {
  return (
    <div className="Form">
      <form id="submit-form">
        <div class="form-group">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Type City"
              aria-label="Type City"
              aria-describedby="basic-addon2"
              autofocus
              id="userInput"
              autocomplete="off"
            />
            <div class="input-group-append">
              <button
                id="submit-button"
                class="btn btn-info"
                type="submit"
                autofocus
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
