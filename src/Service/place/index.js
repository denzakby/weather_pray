import {
  getNews,
  TodosPost,
  getPharms,
  getEzan,
  getPharms2,
} from '../NetworkUrl';
import {get, post} from '../main';

const getNewsApi = body => {
  const TodosUrl = getNews + body;
  return get(TodosUrl);
};
const getPharmsApi = body => {
  const TodosUrl = getPharms2 + body;
  console.log('todos url in pharms api', TodosUrl);

  return get(TodosUrl);
};
const getEzanApi = body => {
  console.log('todos url in ezan api', TodosUrl);
  const TodosUrl = getEzan + body;

  return get(TodosUrl);
};
const TodosListApi = () => {
  return get(Todos);
};
const PlaceApi = body => {
  return post(TodosPost, body);
};

export default {getNewsApi, PlaceApi, getPharmsApi, getEzanApi};
