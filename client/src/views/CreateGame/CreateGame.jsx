import { useState } from 'react'
import axios from 'axios'
import style from './CreateGame.module.css'
import { Link } from 'react-router-dom'
import validateInput from './validate'
import { useSelector } from 'react-redux'

const CreateGame = () => {
  const genres = useSelector((state) => state.genres)
  const platforms = [
    'PC',
    'iOS',
    'Android',
    'macOS',
    'PlayStation 4',
    'PlayStation 5',
    'XBOX',
    'PS Vita'
  ]
  console.log(genres)
  const [errors, setErrors] = useState({
    name: '',
    description: '',
    platforms: [],
    background_image: '',
    releaseDate: '',
    rating: '',
    genres: []
  })

  const [form, setForm] = useState({
    name: '',
    description: '',
    platforms: [],
    background_image: '',
    releaseDate: '',
    rating: '',
    genres: []
  })

  const handlerInput = (event) => {
    const property = event.target.name
    const value = event.target.value
    setErrors(validateInput({ ...form, [property]: value }))
    setForm({ ...form, [property]: value })
  }

  const handlerCheckGenres = (event) => {
    const value = event.target.value
    const check = event.target.checked
    const valueN = parseInt(value)
    if (check) {
      setForm((prevState) => ({
        ...prevState,
        genres: form.genres.concat(valueN)
      }))
    } else {
      setForm((prevState) => ({
        ...prevState,
        genres: form.genres.filter((x) => valueN !== x)
      }))
    }
  }

  const handlerCheckPlataforms = (event) => {
    const value = event.target.value
    const check = event.target.checked
    if (check) {
      setForm((prevState) => ({
        ...prevState,
        platforms: form.platforms.concat(value)
      }))
    } else {
      setForm((prevState) => ({
        ...prevState,
        platforms: form.platforms.filter((x) => value !== x)
      }))
    }
  }

  const handlerSubmit = (event) => {
    event.preventDefault()
    validateInput(form)
    let errorsCkecks = []
    if (form.genres.length < 1) errorsCkecks.push('Genres is required')
    if (form.platforms.length < 1) errorsCkecks.push('Platforms is required')
    if (Object.values(errors).length || errorsCkecks.length) {
      return alert(Object.values(errors).concat(errorsCkecks).join('\n'))
    }
    console.log(form);
    axios
      .post('http://localhost:3001/videogames', form)
      .then((res) => alert('Created'))
      .catch((err) => alert(err))
  }
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
            step="0.01"
            value={form.rating}
            onChange={handlerInput}
          />
        </div>
        <div className={style.checkContainer}>
          <div className={style.genres}>
            <div className={style.genresTitle}>
              <h2>Genres: </h2>
            </div>
            <div className={style.checkboxs}>
              {genres.map((genre) => (
                <div key={genre.id} className={style.checkboxOption}>
                  <label>
                    <input
                      type="checkbox"
                      name={genre.name}
                      value={genre.id}
                      onChange={handlerCheckGenres}
                    />
                    {genre.name}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className={style.platformsContainer}>
            <div className="platform-title">
              <h2>Platforms: </h2>
            </div>
            <div className={style.platforms}>
              {platforms.map((platform, index) => (
                <div key={index} className={style.checkboxOption}>
                  <label>
                    <input
                      type="checkbox"
                      name={platform}
                      value={platform}
                      onChange={handlerCheckPlataforms}
                    />
                    {platform}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        <br />
        <button className={style.btnCreate}>Create</button>
        <Link to={'/home'} className={style.btnBack}>
          Back to Home
        </Link>
      </form>
    </main>
  )
}

export default CreateGame
