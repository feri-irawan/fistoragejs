const axios = require("axios");

class Fistorage {
  constructor(key) {
    this.url = "https://fistorage.glitch.me";
    this.key = key;
  }

  /**
   * Login
   * @param {string} username - Username
   * @param {string} password - Password
   * @returns {object} - User info
   */
  async login(username, password) {
    return await axios
      .post(this.url + "/users/login", { username, password })
      .then(({ data }) => data);
  }
}

module.exports = Fistorage;
