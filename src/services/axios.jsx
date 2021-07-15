import axios from 'axios'
import { toast } from 'react-toastify'

axios.interceptors.response.use((response) => response, (err) => {
  if (err.response.status === 401) {
    toast.error(err.response.data.message, {
      position: 'bottom-left',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    })
  }

  if (err.response.status === 406) {
    err.response.data?.errors?.map((error) => toast.error(error.msg, {
      position: 'bottom-left',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    }))
  }

  if (err.response.status === 404) {
    toast.error(err.response.data.message, {
      position: 'bottom-left',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    })
  }

  return Promise.reject(err)
})

export default axios
