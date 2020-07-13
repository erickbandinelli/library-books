const axios = require('axios');

class megaLibrary {
  constructor(request = axios) {
    this.request = request;
  }

  async getFollowerCount(login) {
    let response;
    try {
      const { data } = await this.request.get(`http://localhost:3001/`);
      response = { api: data };
    } catch (error) {
      const { status, data } = error.response;
      if (status == 404) {
        response = { error: data };
      } else {
        response = { error: 'Error' };
      }
    }
    return response;
  }

  async postLoginCount(login) {
    let response;
    try {
      const { data } = await this.request.get(`http://localhost:3001/`);
      response = { api: data };
    } catch (error) {
      const { status, data } = error.response;
      if (status == 404) {
        response = { error: data };
      } else {
        response = { error: 'Error' };
      }
    }
    return response;
  }
}

module.exports = megaLibrary;