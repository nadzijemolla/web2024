import { defer } from "react-router-dom";
import apiRequest from "./apiRequest";

export const singlePageLoader = async({ request, params }) => {
    try {
        const res = await apiRequest(`/post/${params.id}`);
        return res.data;
    } catch (error) {
        console.error("Error fetching single post data:", error);
        return null; // Možete vratiti null ili neku drugu vrednost u slučaju greške
    }
};
export const listPageLoader = async({ request, params }) => {
    const query = request.url.split("?")[1];
    const postPromise = apiRequest("/post?" + query);
    return defer({
        postResponse: postPromise,
    });
};

export const profilePageLoader = async() => {
    const userId = JSON.parse(localStorage.getItem("user")).id;
    const postPromise = apiRequest("/post?userId=" + userId);
    const savedPostPromise = apiRequest('save-post?userId=' + userId);
    return defer({
        postResponse: postPromise,
        savedPostResponse: savedPostPromise
    });
};