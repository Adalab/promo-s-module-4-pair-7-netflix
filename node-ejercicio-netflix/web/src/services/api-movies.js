// login

const getMoviesFromApi = (params) => {
  console.log(params);
  // CAMBIA ESTE FETCH PARA QUE APUNTE A UN ENDPOINT DE TU SERVIDOR, PIENSA SI DEBE SER GET O POST, PIENSA QUÉ DATOS DEBES ENVIAR, ETC
  // return fetch(`//localhost:4000/movies?genre=${params.genre}&sort=${params.sort}`

  return fetch(`//localhost:4000/movies_all_mongo?genre=${params.genre}&sort=${params.sort}`, {
    headers: {
      method: 'GET',
    }
  })

    .then(response => response.json())
    .then(data => {

      return data;
    });
};

const objToExport = {
  getMoviesFromApi: getMoviesFromApi
};

export default objToExport;
