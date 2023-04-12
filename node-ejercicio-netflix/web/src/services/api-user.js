// LOGIN: ENVIA DATOS DE INICIO DE SESIÓN AL SERVIDOR Y RECIBE UNA RESPUESTA
const sendLoginToApi = data => {
  return fetch('http://localhost:4000/login', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .then((data) => {
      return data;
    });
};

// SINGUP: SIMULA ENVÍO DE DATOS DE REGISTRO
const sendSingUpToApi = data => {
  return fetch('//beta.adalab.es/curso-intensivo-fullstack-recursos/apis/netflix-v1/empty.json')
    .then(response => response.json())
    .then(() => {
      return {
        success: false,
        errorMessage: 'Usuario ya existente'
      };
    });
};

// PROFILE: SIMULA ENVÍO DATOS
const sendProfileToApi = (userId, data) => {
  return fetch('//beta.adalab.es/curso-intensivo-fullstack-recursos/apis/netflix-v1/empty.json');
};


// OBTIENE EL PERFIL DE MARICARMEN
const getProfileFromApi = userId => {
  return fetch('//beta.adalab.es/curso-intensivo-fullstack-recursos/apis/netflix-v1/empty.json')
    .then(response => response.json())
    .then(() => {
      return {
        success: true,
        name: 'Maricarmen',
        email: 'mari@mail.com',
        password: '1234567'
      };
    });
};

//OBTIENE LAS PELIS
const getUserMoviesFromApi = userId => {
  return fetch('//beta.adalab.es/curso-intensivo-fullstack-recursos/apis/netflix-v1/empty.json')
    .then(response => response.json())
    .then(() => {
      return {
        success: true,
        movies: [
          {
            id: 1,
            title: 'Gambita de dama',
            genre: 'Drama',
            image:
              '//beta.adalab.es/curso-intensivo-fullstack-recursos/apis/netflix-v1/images/gambito-de-dama.jpg'
          }
        ]
      };
    });
};

const objToExport = {
  sendLoginToApi: sendLoginToApi,
  sendSingUpToApi: sendSingUpToApi,
  sendProfileToApi: sendProfileToApi,
  getProfileFromApi: getProfileFromApi,
  getUserMoviesFromApi: getUserMoviesFromApi
};

export default objToExport;
