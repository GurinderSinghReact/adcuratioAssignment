import axios from 'axios';

export async function apiReq(
  endPoint: string,
  data: any,
  method: string,
  headers: object,
) {
  return new Promise(async (res, rej) => {
    console.log('API Endpoint :-> ', endPoint);
    console.log('API Data :-> ', data);
    console.log('API Headers :-> ', headers);

    axios({
      method,
      url: endPoint,
      params: data,
      headers,
      data,
    })
      .then(result => {
        console.log('API Result :-> ', result);
        if (result.data.status === false) {
          return rej(result.data);
        }
        return res(result.data);
      })
      .catch(error => {
        console.log('API error =>', error);
        if (error?.response?.data) {
          if (!error?.response?.data?.message) {
            return rej({
              ...error?.response?.data,
              msg: error?.response?.data?.message || 'Network Error',
            });
          }
          return rej(error?.response?.data);
        } else {
          return rej({message: 'Network Error', msg: 'Network Error'});
        }
      });
  });
}

export function apiPost(endPoint: string, data: any, headers = {}) {
  return apiReq(endPoint, data, 'post', headers);
}

export function apiDelete(endPoint: string, data: any, headers = {}) {
  return apiReq(endPoint, data, 'delete', headers);
}

export function apiGet(endPoint: string, data: any, headers = {}) {
  return apiReq(endPoint, data, 'get', headers);
}

export function apiPut(endPoint: string, data: any, headers = {}) {
  return apiReq(endPoint, data, 'put', headers);
}
