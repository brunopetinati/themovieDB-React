import axios from "axios";
import { API_BASE_URL, API_KEY, EXAMPLE_URL} from '../../../constants/urls'
import { addMovies } from './actions'


/* export const addInputMoviesThunk = (inputMovies, setError) => (dispatch) => {
  axios
    .get(`https://sleepy-sea-69639.herokuapp.com/https://api.deezer.com/search?q=${inputMovies}`)
    .then((res) => {
      dispatch(addMovies(res.data.results));
    })
    .catch((err) => console.log(err));
}; */

export const addMoviesThunk = (setError) => (dispatch) => {
  axios
    .get(EXAMPLE_URL)
    .then((res) => {
      dispatch(addMovies(res.data.results));
    })
    .catch((err) => setError(true));
};
