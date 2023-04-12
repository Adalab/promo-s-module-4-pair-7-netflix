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

// Función que limpia todo el local storage
const clear = () => {
  localStorage.clear();

};

const objToExport = {
  get: get,
  clear: clear,
  set: set
};

export default objToExport;
