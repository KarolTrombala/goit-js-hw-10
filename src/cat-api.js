import axios from "axios";
import Notiflix from "notiflix";

export function fetchBreeds() {
    return axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then(response => response.data)
    .catch(error => {
        Notiflix.Notify.failure('Błąd podczas pobierania kolekcji ras:');
        throw error;
    });
}

function fetchCatByBreed(breedId) {
    return axios
    .get('https://api.thecatapi.com/v1/images/search?breed_ids=${breedId')
    .then(response => response.data)
    .catch(error => {
        Notiflix.Notify.failure('Błąd podczas pobierania informacji o kocie:');
        throw error;
    });
}