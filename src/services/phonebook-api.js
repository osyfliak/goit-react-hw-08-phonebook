import axios from 'axios';

const contactService = axios.create({
  baseURL: 'https://63f33e9efe3b595e2eddd9fa.mockapi.io/',
});

export const getContacts = async () => {
  const { data } = await contactService.get('contacts/');
  return data;
};

export const addContacts = async (contact) => {
  const { data } = await contactService.post('contacts/', contact);
  return data;
};

export const deleteContacts = async id => {
  const { data } = await contactService.delete(`contacts/${id}`);
  return data;
};
