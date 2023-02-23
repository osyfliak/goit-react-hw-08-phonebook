import { privateApi, publicApi } from "http/http";

export const token = {
  set: (token) => {
    privateApi.defaults.headers.Authorization = `Bearer ${token}`;
  },
  unSet: () => {
    privateApi.defaults.headers.Authorization = "";
  },
};

export const getContacts = async () => {
  const { data } = await privateApi.get('contacts');
  return data;
};

export const addContacts = async contact => {
  const { data } = await privateApi.post('contacts', contact);
  return data;
};

export const deleteContacts = async id => {
  const { data } = await privateApi.delete(`contacts/${id}`);
  return data;
};

export const updateContact = async id => {
  const { data } = await privateApi.patch(`contacts/${id}`);
  return data;
};


export const signUpUser = async (credentials) => {
  const { data } = await publicApi.post('users/signup', credentials);
  return data;
};

export const loginUsers = async (credentials) => {
  const { data } = await publicApi.post('users/login', credentials);
  return data;
};

export const logoutUsers = async () => {
    return privateApi.post("users/logout");
    
};

export const getInfoUsers = async () => {
  const { data } = await privateApi.get('users/current');
  return data;
};
