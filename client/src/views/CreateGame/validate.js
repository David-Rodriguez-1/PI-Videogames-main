const regexImage =
  /(http|https|ftp|ftps)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?/;
const regexRating = /^[1-5](\.\d+)?$/;
const regexDate =
  /^(17\d{2}|18\d{2}|19\d{2}|20[0123]\d)-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;

const validateInput = (form) => {
  let errors = {};
  if (form.name === "") errors.name = "Name is required";
  else if (form.name.length < 3)
    errors.name = "Game Name must have at least 3 characters";

  if (form.description === "") errors.description = "Description is required";
  if (form.description.length < 15)
    errors.description = "Description must have at least 15 characters";

  if (form.background_image === "")
    errors.background_image = "Image is required";
  else if (!regexImage.test(form.background_image))
    errors.background_image = "Image invalid";

  if (form.releaseDate === "") errors.releaseDate = "Release Date is required";
  else if (!regexDate.test(form.releaseDate))
    errors.releaseDate = "Invalid date";

  if (form.rating === "") {
    errors.rating = "Rating is required";
  } else if (!regexRating.test(form.rating)) {
    errors.rating = "Rating must be between 1 and 5";
  }
  return errors;
};

export default validateInput;
