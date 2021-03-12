import React, { Component } from 'react';
import axios from 'axios'

import Blog from './containers/Blog/Blog';

axios.interceptors.request.use(request => {

  console.log(request)
  return request
},error =>{
  console.log(error)
  return Promise.reject(error)
})
axios.interceptors.response.use(response => {

  console.log(response)
  return response
},error =>{
  console.log(error)
  return Promise.reject(error)
})


class App extends Component {
  render() {
    return (
      <div className="App">
        <Blog />
      </div>
    );
  }
}

export default App;
