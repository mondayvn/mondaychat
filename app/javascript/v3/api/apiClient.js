import axios from 'axios';

const { apiHost = '' } = window.mondaychatConfig || {};
const wootAPI = axios.create({ baseURL: `${apiHost}/` });

export default wootAPI;
