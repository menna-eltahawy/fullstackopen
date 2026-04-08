import axios from "axios";

const api = axios.create({
    baseURL: "/api",
});

let token = null;

const setToken = (newToken) => {
    token = `Bearer ${newToken}`;
};

const clearToken = () => {
    token = null;
};

const getAll = async () => {
    const response = await api.get("/blogs");
    return response.data;
};

const create = async (newBlog) => {
    const response = await api.post("/blogs", newBlog, {
        headers: {
            Authorization: token,
        },
    });
    return response.data;
};

const updateLike = async (id) => {
    const response = await api.patch(`/blogs/${id}/like`);
    return response.data;
};

const remove = async (id) => {
    const response = await api.delete(`/blogs/${id}`, {
        headers: {
            Authorization: token,
        },
    });
    return response.data;
};

export default {
    setToken,
    clearToken,
    getAll,
    create,
    updateLike,
    remove,
};
