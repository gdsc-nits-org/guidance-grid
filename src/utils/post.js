import axios from "axios";
import { getIdToken } from "./firebase.js"

const BACKEND_URI = "http://localhost:5000";

const getAllPost = async () => {
    try{
        return await axios.get(`${BACKEND_URI}/p/get`)
    } catch (e) {
        console.log(e);
    }
}

const getPostById = async (id) => {
    try{
        return await axios.get(`${BACKEND_URI}/p/get`, {
            params: {
                id
            }
        })
    } catch (e) {
        console.log(e);
    }
}

const postArticle = async (title, body) => {
    let publishedDate = new Date();
    let dd = String(publishedDate.getDate()).padStart(2, '0');
    let mm = String(publishedDate.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = publishedDate.getFullYear();
    publishedDate = yyyy + '-' + mm + '-' + dd;
    console.log("Published Date", publishedDate)
    console.log("title", title)
    console.log("body", body)
    const idToken = await getIdToken();
    try {
        return await axios.post(`${BACKEND_URI}/p/create`, {
            title,
            body,
            publishedDate
        }, {
            headers: {
                Authorization : `Bearer ${idToken}`
            }
        })
    } catch (e){
        console.log(e);
    }
}

export { getPostById, getAllPost, postArticle }