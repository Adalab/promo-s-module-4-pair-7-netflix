const get = (key, defaultData) => {
  const data = localStorage.getItem(key);
  if (data === null) {
    return defaultData;
  } else {
    return JSON.parse(data);
  }
};

const set = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

//AÑADIMOS FUNCION PARA LIMPIAR LS EN LOGOUT
const clear = () => {
  localStorage.clear();

};

const objToExport = {
  get: get,
  clear: clear,
  set: set
};

export default objToExport;
