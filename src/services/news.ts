import { api } from './api';

export const getBrazilNews = async () => {
  const { data } = await api.get(
    'https://newsapi.org/v2/top-headlines?country=br&category=business&apiKey=f0447bb3076f4967b9e97404ad7c75df'
  );
  return data;
};
