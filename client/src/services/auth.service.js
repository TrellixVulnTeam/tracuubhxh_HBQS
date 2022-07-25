
import axios from 'axios';
const API_URL = `http://14.224.129.177:8888/api/users/`;
class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'mst/login', {
        MA_DONVI: user.MA_DONVI,
        MS_THUE: user.MS_THUE,
        SDT_NGUOI_DD: user.SDT_NGUOI_DD,
      })
      .then(response => {        
        if (response.data.token) {
          localStorage.setItem('user', JSON.stringify(response.data.user));
        }
        return response.data.user;
      });      
  }
  login2(user) {
    return axios
      .post(API_URL + 'mst2/login', {
        MA_DONVI: user.MA_DONVI,
        MS_THUE: user.MS_THUE,
        DIEN_THOAI_DONVI: user.DIEN_THOAI_DONVI,
      })
      .then(response => {        
        if (response.data.token) {
          localStorage.setItem('user', JSON.stringify(response.data.user));
        }
        return response.data.user;
      });      
  }
  login3(user) {
    return axios
      .post(API_URL + '/auth/login', {
        email: user.email,
        password: user.password,
      })
      .then(response => {        
        if (response.data.token) {
          localStorage.setItem('user', JSON.stringify(response.data.user));
        }
        return response.data.user;
      });      
  }
  logout() {
    localStorage.removeItem('user');
  }
}
export default new AuthService();