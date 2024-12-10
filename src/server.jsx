import axios from "axios";

const API_URL = "http://127.0.0.1:3002/userInfo";

export async function addUserFunc(data) {

    try {
        return axios.post(API_URL, data);
    } catch (error) {
        console.log("While addUser", error.message);
    }

};

export async function getUsersFunc() {

    try {
        return axios.get(API_URL);
    } catch (error) {
        console.log("While getUsers", error.message);
    }

};

export async function getUserByIdFunc(id) {

    try {
        return axios.get(`${API_URL}/${id}`);
    } catch (error) {
        console.log("While getUserById", error.message);
    }

};

export async function editUserByIdFunc(id, theEdit) {

    try {
        return axios.put(`${API_URL}/${id}`, theEdit);
    } catch (error) {
        console.log("While editUserById", error.message);
    }
    
};

export async function deleteUserFunc(id) {

    try {
        return axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        console.log("While deleteUser", error.message);
    }
    
};