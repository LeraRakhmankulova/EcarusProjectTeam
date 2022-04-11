import axios from "axios"
import MapCard from "../../components/Cards/MapCard/MapCard"
import MapCardPlug from "../../components/Plugs/MapCardPlug/MapCardPlug"
import cardInfo from '../../assets/images/mapCard.svg'

axios.defaults.baseURL = 'https://ecoapp.cloud.technokratos.com/eco-rus/api/v1/'
axios.interceptors.request.use(config => {
  const token = window.localStorage.getItem('token')
  if (token) {
    return {
      ...config,
      headers: {
        ...(config.headers || {}),
        Authorization: token,
        'Content-Type': 'application/json',
      }
    }
  }
  else {
    return config;
  }
})

axios.interceptors.response.use(response => {
  return response.data;
})

interface userProps {
  id?: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  photo_url?: string,
  token: string,
  firstname?: string,
  lastname?: string,
  username: string,
  email: string,
  phone_number: string,
  password: string,
  balance?: number
  role?: object
}

const AboutService = () => {


  // const login = () => {
  //   const data = {
  //     "login": "+78998998989",
  //     "password": "122333"
  //   };

  //   axios.post('login', data).then((res: any) => {
  //     const { token, ...data } = res;
  //     window.localStorage.setItem('token', res.token);
  //     window.localStorage.setItem('user', JSON.stringify(data));
  //     console.log(JSON.stringify(data));
  //   }).catch(
  //     err => {
  //       console.log(err)
  //     });
  // }

  // const getUser = () => {
  //   axios.get('profile').then(res => {
  //     console.log(res);
  //   }).catch(
  //     err => {
  //       console.log(err)
  //     });
  // }

  return (
    <div>
     
     {/* <butto>reg</butto> */}
    </div>

  )
}

export default AboutService;