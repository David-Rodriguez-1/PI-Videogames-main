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
    axios
      .post('http://localhost:8001/videogames', form)
      .then((res) => alert('Created'))
      .catch((err) => alert(err))
  }
  return (
    <main className={style.main}>
      <h2 className={style.h2}>CREATING VIDEOGAME</h2>
      <form
        className={style.formContainer}
        action="form"
        onSubmit={handlerSubmit}>
        <div className={style.inputs}>
          <span className={style.errors}>{errors.name}</span>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handlerInput}
          />

          <span className={style.errors}>{errors.description}</span>
          <textarea
            type="text"
            id="description"
            name="description"
            placeholder="Descriptions"
            className={style.textarea}
            value={form.description}
            onChange={handlerInput}
          />

          <span className={style.errors}>{errors.background_image}</span>
          <input
            type="text"
            id="background_image"
            name="background_image"
            value={form.background_image}
            placeholder="Image/URLs"
            onChange={handlerInput}
          />

          <span className={style.errors}>{errors.releaseDate}</span>
          <input
            type="date"
            id="releaseDate"
            name="releaseDate"
            placeholder="Release Date"
            value={form.releaseDate}
            onChange={handlerInput}
          />

          <span className={style.errors}>{errors.rating}</span>
          <input
            type="number"
            id="rating"
            name="rating"
            step="0.01"
            value={form.rating}
            placeholder="Rating"
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
        <div className={style.btnContainer}>
          <button className={style.btnCreate}>Create</button>
          <Link to={'/home'} className={style.btnBack}>
            Back to Home
          </Link>
        </div>
      </form>
    </main>
  )
}

export default CreateGame
