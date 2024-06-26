import axios from "axios";
import {getItem} from "../../utils/localStorage.ts";

export async function addFavorites(filmId: number, userId: number) {
    axios.post(`${import.meta.env.VITE_API_URL}/user/add_favorite`, {
        filmId: filmId,
        userId: userId
    }, {
        headers: {
            Authorization: `Bearer ${getItem("token")}`
        }
    }).then((response) => {
        return response.data;
    }).catch(err => {
        console.log(err);
    });
}

export async function deleteFavorite(filmId: number, userId: number) {
    axios.post(`${import.meta.env.VITE_API_URL}/user/delete_favorite`, {
        filmId: filmId,
        userId: userId
    }, {
        headers: {
            Authorization: `Bearer ${getItem("token")}`
        }
    }).then((response) => {
        console.log(response.data);
    }).catch(err => {
        console.log(err);
    });
}