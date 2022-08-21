export const API_KEY = '&api_key=1a1cc0b3ded0dcc3e62ac048fa48a924';
export const API_BASE_URL = 'https://api.themoviedb.org/3';
export const searchURL = API_BASE_URL + '/search/movie/'
export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500'

export const KIDS_URL = API_BASE_URL + '/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc' + API_KEY
export const MOST_POPULAR_URL = API_BASE_URL + '/discover/movie?sort_by=popularity.desc' + API_KEY;

export const DRAMA_URL = API_BASE_URL + '/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10' + API_KEY;
