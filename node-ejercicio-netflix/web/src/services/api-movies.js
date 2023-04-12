// OBTENER EL LISTADO DE PELÍCULAS DISPONIBLES
const getMoviesFromApi = (params) => {
  // return fetch(`//localhost:4000/movies?genre=${params.genre}&sort=${params.sort}` (ENDPOINT MYSQL)
  return fetch(`//localhost:4000/movies_all_mongo?genre=${params.genre}&sort=${params.sort}`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

const objToExport = {
  getMoviesFromApi: getMoviesFromApi,
};

export default objToExport;
