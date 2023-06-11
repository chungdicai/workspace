import axios from "axios";
import Swal from "sweetalert2";

// 創建一個axios自定義實例，在預設值當中放入預設網址
const axiosInstance = axios.create({
  baseURL: '/service/api',
});

// 發送請求前的動作
axiosInstance.interceptors.request.use(function (config) {
  const { headers, ...configSetting } = config
  return {...configSetting, headers};
},function (error) {
  return Promise.reject(error);
});

axiosInstance.interceptors.response.use(function (response) {

  const { status,  data:respData = {}} = response
  const {data, message, success} = respData
  if(!success){
    Swal.fire({
      icon: 'warning',
      text: message,
      timer: 1500,
      timerProgressBar: true,
    })
  }

  return {status , data, message, success};

}, function (error) {

  return Promise.reject(error);
});


export { axiosInstance }