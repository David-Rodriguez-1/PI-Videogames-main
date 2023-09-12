import { useState } from "react";
import axios from "axios";
import style from "./CreateGame.module.css";
import { Link } from "react-router-dom";
import validateInput from "./validate";

const CreateGame = () => {
  const [errors, setErrors] = useState({
    name: "",
    description: "",
    platforms: [],
    background_image: "",
    releaseDate: "",
    rating: "",
    genres: [],
  });

  const [form, setForm] = useState({
    name: "",
    description: "",
    platforms: [],
    background_image: "",
    releaseDate: "",
    rating: "",
    genres: [],
  });

  const handlerInput = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setErrors(validateInput({ ...form, [property]: value }));
    setForm({ ...form, [property]: value });
  };

  const handlerCheckGenres = (event) => {
    const value = event.target.value;
    const check = event.target.checked;
    const valueN = parseInt(value);
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
  };

  const handlerSubmit = (event) => {
    event.preventDefault();
    validateInput(form);
    let errorsCkecks = [];
    if (form.genres.length < 1) errorsCkecks.push("Genres is required");
    if (form.platforms.length < 1)
      errorsCkecks.push("Platforms is required");
    if (Object.values(errors).length || errorsCkecks.length) {
      return alert(Object.values(errors).concat(errorsCkecks).join("\n"));
    }
    axios
      .post("http://localhost:3001/videogames", form)
      .then((res) => alert(res))
      .catch((err) => alert(err));
  };
  return (
    <main className={style.main}>
      <h1 className={style.h1}>CREATING VIDEOGAME</h1>
      <form
        className={style.formContainer}
        action="form"
        onSubmit={handlerSubmit}>
        <div className={style.inputs}>
          <label htmlFor="name">Name: </label>
          <span className={style.errors}>{errors.name}</span>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handlerInput}
          />

          <label htmlFor="description">Descriptions:</label>
          <span className={style.errors}>{errors.description}</span>
          <textarea
            type="text"
            id="description"
            name="description"
            value={form.description}
            onChange={handlerInput}
          />

          <label htmlFor="background_image">Image:</label>
          <span className={style.errors}>{errors.background_image}</span>
          <input
            type="text"
            id="background_image"
            name="background_image"
            value={form.background_image}
            placeholder="URLs"
            onChange={handlerInput}
          />

          <label htmlFor="releasedDate">Release Date: </label>
          <span className={style.errors}>{errors.releaseDate}</span>
          <input
            type="date"
            id="releaseDate"
            name="releaseDate"
            value={form.releaseDate}
            onChange={handlerInput}
          />

          <label htmlFor="rating">Rating:</label>
          <span className={style.errors}>{errors.rating}</span>
          <input
            type="number"
            id="rating"
            name="rating"
            value={form.rating}
            onChange={handlerInput}
          />
        </div>
        <div className={style.genres}>
          <div className={style.genresTitle}>
            <h2>Genres: </h2>
          </div>
          <div className={style.checkboxs}>
            <label htmlFor="Action">Action.</label>
            <input
              name="Action"
              value="4"
              type="checkbox"
              id="Action"
              onChange={handlerCheckGenres}
            />
            <label htmlFor="Indie">Indie.</label>
            <input
              name="Indie"
              value="51"
              type="checkbox"
              id="Indie"
              onChange={handlerCheckGenres}
            />
            <label htmlFor="Adventure">Adventure</label>
            <input
              name="Adventure"
              value="3"
              type="checkbox"
              id="Adventure"
              onChange={handlerCheckGenres}
            />
            <label htmlFor="RPG">RPG</label>
            <input
              name="RPG"
              value="5"
              type="checkbox"
              id="RPG"
              onChange={handlerCheckGenres}
            />
            <label htmlFor="Strategy">Strategy</label>
            <input
              name="Strategy"
              value="10"
              type="checkbox"
              id="Strategy"
              onChange={handlerCheckGenres}
            />
            <label htmlFor="Shooter">Shooter</label>
            <input
              name="Shooter"
              value="2"
              type="checkbox"
              id="Shooter"
              onChange={handlerCheckGenres}
            />
            <label htmlFor="Casual">Casual</label>
            <input
              name="Casual"
              value="40"
              type="checkbox"
              id="Casual"
              onChange={handlerCheckGenres}
            />
            <label htmlFor="Simulation">Simulation</label>
            <input
              name="Simulation"
              value="14"
              type="checkbox"
              id="Simulation"
              onChange={handlerCheckGenres}
            />
            <label htmlFor="Puzzle">Puzzle</label>
            <input
              name="Puzzle"
              value="7"
              type="checkbox"
              id="Puzzle"
              onChange={handlerCheckGenres}
            />
            <label htmlFor="Arcade">Arcade</label>
            <input
              name="Arcade"
              value="11"
              type="checkbox"
              id="Arcade"
              onChange={handlerCheckGenres}
            />
            <label htmlFor="Platformer">Platformer</label>
            <input
              name="Platformer"
              value="83"
              type="checkbox"
              id="Platformer"
              onChange={handlerCheckGenres}
            />
            <label htmlFor="Racing">Racing</label>
            <input
              name="Racing"
              value="1"
              type="checkbox"
              id="Racing"
              onChange={handlerCheckGenres}
            />
            <label htmlFor="Massively-Multiplayer">Massively-Multiplayer</label>
            <input
              name="Massively-Multiplayer"
              value="59"
              type="checkbox"
              id="Massively-Multiplayer"
              onChange={handlerCheckGenres}
            />
            <label htmlFor="Sports">Sports</label>
            <input
              name="Sports"
              value="15"
              type="checkbox"
              id="Sports"
              onChange={handlerCheckGenres}
            />
            <label htmlFor="Fighting">Fighting</label>
            <input
              name="Fighting"
              value="6"
              type="checkbox"
              id="Fighting"
              onChange={handlerCheckGenres}
            />
            <label htmlFor="Family">Family</label>
            <input
              name="Family"
              value="19"
              type="checkbox"
              id="Family"
              onChange={handlerCheckGenres}
            />
            <label htmlFor="Board Games">Board Games</label>
            <input
              name="Board Games"
              value="28"
              type="checkbox"
              id="Board Games"
              onChange={handlerCheckGenres}
            />
            <label htmlFor="Educational">Educational</label>
            <input
              name="Educational"
              value="34"
              type="checkbox"
              id="Educational"
              onChange={handlerCheckGenres}
            />
            <label htmlFor="Card">Card</label>
            <input
              name="Card"
              value="17"
              type="checkbox"
              id="Card"
              onChange={handlerCheckGenres}
            />
          </div>
        </div>

        <div className="platform-title">
          <h2>Platforms: </h2>
        </div>
        <div className={style.platforms}>
          <label htmlFor="PC">PC</label>
          <input
            name="PC"
            value="PC"
            type="checkbox"
            id="PC"
            onChange={handlerCheckPlataforms}
          />
          <label htmlFor="iOS">iOS</label>
          <input
            name="iOS"
            value="iOS"
            type="checkbox"
            id="iOS"
            onChange={handlerCheckPlataforms}
          />
          <label htmlFor="Android">Android</label>
          <input
            name="Android"
            value="Android"
            type="checkbox"
            id="Android"
            onChange={handlerCheckPlataforms}
          />
          <label htmlFor="macOS">macOS</label>
          <input
            name="macOS"
            value="macOS"
            type="checkbox"
            id="macOS"
            onChange={handlerCheckPlataforms}
          />
          <label htmlFor="PlayStation 4">PlayStation 4</label>
          <input
            name="PlayStation 4"
            value="PlayStation 4"
            type="checkbox"
            id="PlayStation 4"
            onChange={handlerCheckPlataforms}
          />
          <label htmlFor="PlayStation 5">PlayStation 5</label>
          <input
            name="PlayStation 5"
            value="PlayStation 5"
            type="checkbox"
            id="PlayStation 5"
            onChange={handlerCheckPlataforms}
          />
          <label htmlFor="XBOX">XBOX</label>
          <input
            name="XBOX"
            value="XBOX"
            type="checkbox"
            id="XBOX"
            onChange={handlerCheckPlataforms}
          />
          <label htmlFor="PS Vita">PS Vita</label>
          <input
            name="PS Vita"
            value="PS Vita"
            type="checkbox"
            id="PS Vita"
            onChange={handlerCheckPlataforms}
          />
        </div>

        <br />
        <button className={style.btnCreate}>Create</button>
        <Link to={"/home"} className={style.btnBack}>
          Back to Home
        </Link>
      </form>
    </main>
  );
};

export default CreateGame;
