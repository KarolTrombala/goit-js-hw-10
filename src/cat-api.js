import axios from "axios";

export function fetchBreeds() {
    return axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then(response => response.data)
    .catch(error => {
        console.error('Błąd podczas pobierania kolekcji ras', error);
        throw error;
    });
}