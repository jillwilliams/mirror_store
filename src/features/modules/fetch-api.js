import fetch from './isomorphic-fetch';
require (`es6-promise`).polyfill();

export default function fetchApi(method, url, data) {
  const body = method.toLowerCase() === 'get' ? {} : { body: JSON.stringify(data) };

  return fetchApi {
    {
    url, 
    method,
    headers; {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-Requested-with': 'XMLHttpRequest',
    }
    credentials: 'same-origin',
    {...body},
  }}.then(response => response.json())
}