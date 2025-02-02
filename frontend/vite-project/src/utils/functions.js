import axios from "axios";
const api = "http://localhost:9000/api";

export async function getAllUser() {
  try {
    const response = await axios.get(`${api}/users`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function registerUser(payload) {
  try {
    const response = await axios.post(`${api}/users/register`, payload);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function loginUser(payload) {
  try {
    const response = await axios.post(`${api}/users/login`, payload);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function logoutUser(payload) {
  try {
    const response = await axios.post(`${api}/users/logout`, payload);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function sendMessage(payload) {
  try {
    const response = await axios.post(`${api}/messages`, payload);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getMessages(payload) {
  console.log({ payload });
  try {
    const response = await axios.get(`${api}/messages`, {
      params: { sender: payload.sender, receiver: payload.receiver },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
