import React, { useState } from "react";

export default function AddGame() {
  const [gameForm, setGameForm] = useState({
    name: "",
    description: "",
    price: 0,
  });

  const [gameFormErrors, setGameFormErrors] = useState({
    name: null,
    description: null,
    price: null,
  });

  const handleFormChange = (event) => {
    // setGameForm({
    //   ...gameForm,
    //   [event.target.name] : event.target.value
    // })

    if (event.target.name === "name") {
      setGameForm({
        ...gameForm,
        name: event.target.value,
      });

      setGameFormErrors({
        ...gameFormErrors,
        name:
          event.target.value.length === 0
            ? "This field is required"
            : event.target.value.length < 3
            ? "Min length is 3"
            : null,
      });
    }

    if (event.target.name === "description") {
      setGameForm({
        ...gameForm,
        description: event.target.value,
      });
    }

    if (event.target.name === "price") {
      setGameForm({
        ...gameForm,
        price: event.target.value,
      });
    }
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(gameForm)
  }

  return (
    <div>
      <h2>Add Game</h2>
      <hr />
      <form onSubmit={handleSubmitForm}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Game name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="name"
            value={gameForm.name}
            onChange={handleFormChange}
            name="name"
          />
          {gameFormErrors.name && (
            <div id="name" className="form-text text-danger">
              {gameFormErrors.name}
            </div>
          )}
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Description
          </label>
          <textarea
            type="text"
            className="form-control"
            id="name"
            aria-describedby="name"
            rows={5}
            value={gameForm.description}
            onChange={handleFormChange}
            name="description"
          ></textarea>
          {/* <div id="name" className="form-text">
            We'll never share your email with anyone else.
          </div> */}
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="name"
            aria-describedby="name"
            value={gameForm.price}
            onChange={handleFormChange}
            name="price"
          />
          {/* <div id="name" className="form-text">
            We'll never share your email with anyone else.
          </div> */}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
