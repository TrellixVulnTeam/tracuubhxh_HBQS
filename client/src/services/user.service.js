
import axios from 'axios';
import authHeader from './auth-header';
const API_URL = `http://14.224.129.177:8888/api/users/mst/login`;
class UserService {
  getUserBoard() {
    return axios.get(API_URL, { headers: authHeader() });
  }

  /* getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  } */
}
export default new UserService();