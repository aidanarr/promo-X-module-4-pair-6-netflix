// login

const sendLoginToApi = (data) => {
  console.log("Se están enviando datos al login:", data);
  // CAMBIA ESTE FETCH PARA QUE APUNTE A UN ENDPOINT DE TU SERVIDOR, PIENSA SI DEBE SER GET O POST, PIENSA QUÉ DATOS DEBES ENVIAR, ETC
  return fetch(
    "http://localhost:4000/server/login"
  )
    .then((response) => response.json())
    .then((data) => {
      // CAMBIA EL CONTENIDO DE ESTE THEN PARA GESTIONAR LA RESPUESTA DEL SERVIDOR Y RETORNAR AL COMPONENTE APP LO QUE NECESITA
      return data
    });
};

// signup

const sendSignUpToApi = (data) => {
  console.log("Se están enviando datos al signup:", data);
  // CAMBIA ESTE FETCH PARA QUE APUNTE A UN ENDPOINT DE TU SERVIDOR, PIENSA SI DEBE SER GET O POST, PIENSA QUÉ DATOS DEBES ENVIAR, ETC
  return fetch(
    "http://localhost:4000/server/register"
  )
    .then((response) => response.json())
    .then((response) => {
      return response
    });
};

// profile

const sendProfileToApi = (userId, data) => {
  console.log("Se están enviando datos al profile:", userId, data);
  // CAMBIA ESTE FETCH PARA QUE APUNTE A UN ENDPOINT DE TU SERVIDOR, PIENSA SI DEBE SER GET O POST, PIENSA QUÉ DATOS DEBES ENVIAR, ETC
  return fetch(
    "//beta.adalab.es/curso-intensivo-fullstack-recursos/apis/netflix-v1/empty.json"
  );
};

const getProfileFromApi = (userId) => {
  console.log("Se están pidiendo datos del profile del usuario:", userId);
  // CAMBIA ESTE FETCH PARA QUE APUNTE A UN ENDPOINT DE TU SERVIDOR, PIENSA SI DEBE SER GET O POST, PIENSA QUÉ DATOS DEBES ENVIAR, ETC
  return fetch(
    "http://localhost:4000/user/profile", 
    {headers:
        {userId: userId}
    })
    .then((response) => response.json())
    .then((data) => {
      // CAMBIA EL CONTENIDO DE ESTE THEN PARA GESTIONAR LA RESPUESTA DEL SERVIDOR Y RETORNAR AL COMPONENTE APP LO QUE NECESITA
      return data
    });
};

// user movies

const getUserMoviesFromApi = (userId) => {
  console.log(
    "Se están pidiendo datos de las películas de la usuaria:",
    userId
  );
  // CAMBIA ESTE FETCH PARA QUE APUNTE A UN ENDPOINT DE TU SERVIDOR, PIENSA SI DEBE SER GET O POST, PIENSA QUÉ DATOS DEBES ENVIAR, ETC
  return fetch(
    "//beta.adalab.es/curso-intensivo-fullstack-recursos/apis/netflix-v1/empty.json"
  )
    .then((response) => response.json())
    .then(() => {
      // CAMBIA EL CONTENIDO DE ESTE THEN PARA GESTIONAR LA RESPUESTA DEL SERVIDOR Y RETORNAR AL COMPONENTE APP LO QUE NECESITA
      return {
        success: true,
        movies: [
          {
            id: 1,
            title: "Gambita de dama",
            genre: "Drama",
            image:
              "//beta.adalab.es/curso-intensivo-fullstack-recursos/apis/netflix-v1/images/gambito-de-dama.jpg",
          },
        ],
      };
    });
};

const objToExport = {
  sendLoginToApi: sendLoginToApi,
  sendSignUpToApi: sendSignUpToApi,
  sendProfileToApi: sendProfileToApi,
  getProfileFromApi: getProfileFromApi,
  getUserMoviesFromApi: getUserMoviesFromApi,
};

export default objToExport;
