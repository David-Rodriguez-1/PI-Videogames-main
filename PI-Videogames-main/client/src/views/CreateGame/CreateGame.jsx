import { useState } from "react";
import axios from "axios";

const CreateGame = () => {

  const [errors, setErrors] = useState({ form: "Must complete the form" });

  const [form, setForm] = useState({
    name: "",
    description: "",
    platforms: [],
    background_image: "",
    releaseDate: "",
    rating: 0,
    genres: [],
  });
  const handlerInput = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [property]: value });
    setErrors(validateInput({ ...errors, [property]: value }));
  };

  const handlerCheckGenres = (event) => {
    const value = event.target.value;
    const check = event.target.checked;
    const valueN = parseInt(value)

    if (check) {
      setForm((prevState) => ({
        ...prevState,
        genres: form.genres.concat(valueN),
      }));
    } else {
      setForm((prevState) => ({
        ...prevState,
        genres: form.genres.filter((x) => valueN !== x),
      }));
    }
    setErrors(validateCheckBox({ ...form, [check]: valueN }));
  };

  const handlerCheckPlataforms = (event) => {
    const value = event.target.value;
    const check = event.target.checked;
    if (check) {
      setForm((prevState) => ({
        ...prevState,
        platforms: form.platforms.concat(value),
      }));
    } else {
      setForm((prevState) => ({
        ...prevState,
        platforms: form.platforms.filter((x) => value !== x),
      }));
    }
    setErrors(validateCheckBox({ ...form, [check]: value }));
  };

  const validateInput = (form) => {
    let errors = {};
    if (!form.name) {
      errors.name = "Name is required";
    } else if (form.name.length < 3) {
      errors.name = "Game Name must have at least 3 characters";
    }
    if (!form.description) {
      errors.description = "Description is required";
    } else if (form.description.length < 15) {
      errors.description = "Description must have at least 15 characters";
    }
    if (!form.rating) {
      errors.rating = "Rating is required";
    } else if (!/^[1-5]$/.test(form.rating)) {
      errors.rating = "Rating must be between 1 and 5";
    }
    return errors;
  };

  const validateCheckBox = (form) => {
    let errorsCkecks = [];
    if (form.genres.length < 1) errorsCkecks.push("Genres is required");
    if (form.platforms.length < 1) errorsCkecks.push("Platforms is required");
    return errorsCkecks;
  };

  const handlerSubmit = (event) => {
    event.preventDefault();
    validateInput(form);
    validateCheckBox(form);
    axios
      .post("http://localhost:3001/videogames", form)
      .then((res) => alert(res))
      .catch((err) => alert(err));
  };
  return (
    <main>
      <h1>CREATING VIDEOGAME</h1>
      <form action="form" onSubmit={handlerSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handlerInput}
        />

        <label htmlFor="description">Descriptions:</label>
        <input
          type="text"
          id="description"
          name="description"
          value={form.description}
          onChange={handlerInput}
        />

        <label htmlFor="background_image">Image:</label>
        <input
          type="text"
          id="background_image"
          name="background_image"
          value={form.background_image}
          onChange={handlerInput}
        />

        <label htmlFor="releasedDate">Release Date: </label>
        <input
          type="date"
          id="releaseDate"
          name="releaseDate"
          value={form.releaseDate}
          onChange={handlerInput}
        />

        <label htmlFor="rating">Rating:</label>
        <input
          type="number"
          id="rating"
          name="rating"
          value={form.rating}
          onChange={handlerInput}
        />

        <label className="title-name">
          <strong>Genres: </strong>
        </label>
        <div id="genres">
          <div className="Action">
            <label htmlFor="Action">Action.</label>
            <input
              name="Action"
              value="4"
              type="checkbox"
              id="Action"
              onChange={handlerCheckGenres}
            />
          </div>
          <div className="Indie">
            <label htmlFor="Indie">Indie.</label>
            <input
              name="Indie"
              value="51"
              type="checkbox"
              id="Indie"
              onChange={handlerCheckGenres}
            />
          </div>
          <div className="Adventure">
            <label htmlFor="Adventure">Adventure.</label>
            <input
              name="Adventure"
              value="3"
              type="checkbox"
              id="Adventure"
              onChange={handlerCheckGenres}
            />
          </div>
          <div>
            <label htmlFor="RPG">RPG.</label>
            <input
              name="RPG"
              value="5"
              type="checkbox"
              id="RPG"
              onChange={handlerCheckGenres}
            />
          </div>
          <div>
            <label htmlFor="Strategy">Strategy.</label>
            <input
              name="Strategy"
              value="Strategy"
              type="checkbox"
              id="Strategy"
              onChange={handlerCheckGenres}
            />
          </div>
          <div>
            <label htmlFor="Shooter">Shooter.</label>
            <input
              name="Shooter"
              value="Shooter"
              type="checkbox"
              id="Shooter"
              onChange={handlerCheckGenres}
            />
          </div>
          <div>
            <label htmlFor="Casual">Casual.</label>
            <input
              name="Casual"
              value="Casual"
              type="checkbox"
              id="Casual"
              onChange={handlerCheckGenres}
            />
          </div>
          <div>
            <label htmlFor="Simulation">Simulation.</label>
            <input
              name="Simulation"
              value="Simulation"
              type="checkbox"
              id="Simulation"
              onChange={handlerCheckGenres}
            />
          </div>
          <div>
            <label htmlFor="Puzzle">Puzzle.</label>
            <input
              name="Puzzle"
              value="Puzzle"
              type="checkbox"
              id="Puzzle"
              onChange={handlerCheckGenres}
            />
          </div>
          <div>
            <label htmlFor="Arcade">Arcade.</label>
            <input
              name="Arcade"
              value="Arcade"
              type="checkbox"
              id="Arcade"
              onChange={handlerCheckGenres}
            />
          </div>
          <div>
            <label htmlFor="Platformer">Platformer.</label>
            <input
              name="Platformer"
              value="Platformer"
              type="checkbox"
              id="Platformer"
              onChange={handlerCheckGenres}
            />
          </div>
          <div>
            <label htmlFor="Racing">Racing.</label>
            <input
              name="Racing"
              value="Racing"
              type="checkbox"
              id="Racing"
              onChange={handlerCheckGenres}
            />
          </div>
          <div>
            <label htmlFor="Massively-Multiplayer">
              <input
                name="Massively-Multiplayer"
                value="Massively-Multiplayer"
                type="checkbox"
                id="Massively-Multiplayer"
                onChange={handlerCheckGenres}
              />
              Massively-Multiplayer.
            </label>
          </div>
          <div>
            <label htmlFor="Sports">Sports.</label>
            <input
              name="Sports"
              value="Sports"
              type="checkbox"
              id="Sports"
              onChange={handlerCheckGenres}
            />
          </div>
          <div>
            <label htmlFor="Fighting">Fighting.</label>
            <input
              name="Fighting"
              value="Fighting"
              type="checkbox"
              id="Fighting"
              onChange={handlerCheckGenres}
            />
          </div>
        </div>

        <label className="title-name">
          <strong>Platforms: </strong>{" "}
        </label>
        <div id="platforms" className="plat-div">
          <div>
            <label htmlFor="PC">PC.</label>
            <input
              name="PC"
              value="PC"
              type="checkbox"
              id="PC"
              onChange={handlerCheckPlataforms}
            />
          </div>
          <div>
            <label htmlFor="iOS">iOS.</label>
            <input
              name="iOS"
              value="iOS"
              type="checkbox"
              id="iOS"
              onChange={handlerCheckPlataforms}
            />
          </div>
          <div>
            <label htmlFor="Android">Android.</label>
            <input
              name="Android"
              value="Android"
              type="checkbox"
              id="Android"
              onChange={handlerCheckPlataforms}
            />
          </div>
          <div>
            <label htmlFor="macOS">macOS.</label>
            <input
              name="macOS"
              value="macOS"
              type="checkbox"
              id="macOS"
              onChange={handlerCheckPlataforms}
            />
          </div>
          <div>
            <label htmlFor="PlayStation 4">PlayStation 4.</label>
            <input
              name="PlayStation 4"
              value="PlayStation 4"
              type="checkbox"
              id="PlayStation 4"
              onChange={handlerCheckPlataforms}
            />
          </div>
          <div>
            <label htmlFor="PlayStation 5">PlayStation 5.</label>
            <input
              name="PlayStation 5"
              value="PlayStation 5"
              type="checkbox"
              id="PlayStation 5"
              onChange={handlerCheckPlataforms}
            />
          </div>
          <div>
            <label htmlFor="XBOX">XBOX.</label>
            <input
              name="XBOX"
              value="XBOX"
              type="checkbox"
              id="XBOX"
              onChange={handlerCheckPlataforms}
            />
          </div>
          <div>
            <label htmlFor="PS Vita">PS Vita.</label>
            <input
              name="PS Vita"
              value="PS Vita"
              type="checkbox"
              id="PS Vita"
              onChange={handlerCheckPlataforms}
            />
          </div>
        </div>
        <br />
        <button>Create</button>
      </form>
    </main>
  );
};

export default CreateGame;
