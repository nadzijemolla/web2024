import apiRequest from "./apiRequest";

export const savePost = async(userId, postId) => {
    try {
        const response = await apiRequest.post('/save-post/', {
            userId: userId,
            id: postId
        });

        console.log(response)

        if (response.status === 200) {
            return { success: true, data: response.data };
        }
    } catch (error) {
        return { success: false, error: error.message };
    }
};