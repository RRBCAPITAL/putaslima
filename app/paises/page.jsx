"use client"

import React, { useEffect, useState } from "react";
import axios from "axios";

function TuComponente() {
  const [authToken, setAuthToken] = useState("");
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [cities, setCities] = useState([]);

  useEffect(() => {
    // Paso 1: Obtener el token de autorización
    axios
      .get("https://www.universal-tutorial.com/api/getaccesstoken", {
        headers: {
          "api-token":
            "6W_1UmYsBIA_8AYgc_riys95wgTWSekZxEGMZ2wVfaAGGVNq5iSpGkzhFW1FXY2zOYM",
          "user-email": "demovalorant22@gmail.com",
        },
      })
      .then((response) => {
        const token = response.data.auth_token;
        setAuthToken(token);
      })
      .catch((error) => {
        console.error("Error al obtener el token de autorización:", error);
      });
  }, []);

  useEffect(() => {
    if (authToken) {
      // Paso 2: Usar el token para obtener países
      axios
        .get("https://www.universal-tutorial.com/api/countries", {
          headers: {
            Authorization: `Bearer ${authToken}`,
            Accept: "application/json",
          },
        })
        .then((response) => {
          setCountries(response.data);
        })
        .catch((error) => {
          console.error("Error al obtener países:", error);
        });
    }
  }, [authToken]);

  // Función para procesar y simplificar los nombres
  const simplifyName = (name) => {
    // Reemplazar espacios por guiones y dividir en palabras
    const words = name.replace(/\s+/g, "-").split("-");
    // Filtrar palabras comunes que deseas eliminar
    const filteredWords = words.filter(
      (word) =>
        !["y", "de", "el", "la"].includes(word.toLowerCase()) && word !== ""
    );
    // Unir las palabras en un solo nombre
    return filteredWords;
  };

  // Función para obtener estados basados en el país seleccionado
  const obtenerEstados = (countryName) => {
    axios
      .get(`https://www.universal-tutorial.com/api/states/${countryName}`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
          Accept: "application/json",
        },
      })
      .then((response) => {
        // Simplificar nombres de estados
        const statesWithSimplifiedNames = response.data.map((state) => ({
          ...state,
          state_name: simplifyName(state.state_name),
        }));
        setStates(statesWithSimplifiedNames);
        setSelectedCountry(countryName);
        setSelectedState("");
        setCities([]);
      })
      .catch((error) => {
        console.error("Error al obtener estados:", error);
      });
  };

  // Función para obtener ciudades basadas en el estado seleccionado
  const obtenerCiudades = (stateName) => {
    axios
      .get(`https://www.universal-tutorial.com/api/cities/${stateName}`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
          Accept: "application/json",
        },
      })
      .then((response) => {
        // Simplificar nombres de ciudades
        const citiesWithSimplifiedNames = response.data.map((city) => ({
          ...city,
          city_name: simplifyName(city.city_name),
        }));
        setCities(citiesWithSimplifiedNames);
        setSelectedState(stateName);
      })
      .catch((error) => {
        console.error("Error al obtener ciudades:", error);
      });
  };

  return (
    <div className="flex">
      <div className="my-[200px]">
        <h1>Seleccionar País:</h1>
        <select
          value={selectedCountry}
          onChange={(e) => obtenerEstados(e.target.value)}
        >
          <option value="">Seleccione un país</option>
          {countries.map((country) => (
            <option
              key={country.country_short_name}
              value={country.country_name}
            >
              {country.country_name}
            </option>
          ))}
        </select>

        {selectedCountry && (
          <div>
            <h1>Seleccionar Estado:</h1>
            <select
              value={selectedState}
              onChange={(e) => obtenerCiudades(e.target.value)}
            >
              <option value="">Seleccione un estado</option>
              {states.map((state) => (
                <option key={state.state_name} value={state.state_name}>
                  {state.state_name}
                </option>
              ))}
            </select>
          </div>
        )}

        {selectedState && (
          <div>
            <h1>Seleccionar Ciudad:</h1>
            <select>
              <option value="">Seleccione una ciudad</option>
              {cities.map((city) => (
                <option key={city.city_name} value={city.city_name}>
                  {city.city_name}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
    </div>
  );
}

export default TuComponente;
