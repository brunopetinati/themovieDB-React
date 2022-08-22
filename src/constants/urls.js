
export const API_KEY = '&api_key=1a1cc0b3ded0dcc3e62ac048fa48a924';
export const API_BASE_URL = 'https://api.themoviedb.org/3';
export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500'


export const KIDS = API_BASE_URL + '/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc' + API_KEY;
export const MOST_POPULAR = API_BASE_URL + '/discover/movie?sort_by=popularity.desc' + API_KEY;
export const DRAMA = API_BASE_URL + '/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10' + API_KEY;
export const NOW_ON_THE_CINEMA = API_BASE_URL +'/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22' + API_KEY;
export const BEST_OF_2022 = API_BASE_URL + '/discover/movie?primary_release_year=2022&sort_by=vote_average.desc' + API_KEY;
export const SCI_FY = API_BASE_URL + '/discover/movie?with_genres=878&sort_by=vote_average.desc&vote_count.gte=10' + API_KEY



//const searchURL = '/search/movie?query=${queryString}' //  API_BASE_URL + example + API_KEY
