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

  /**
   * Create Storage
   */
  async createStorage({ title, description = "", contents = "" }) {
    return await axios({
      method: "POST",
      url: this.url + "/storages/create",
      headers: { Authorization: `token ${this.key}` },
      data: {
        title,
        description,
        contents,
      },
    }).then(({ data }) => data);
  }

  /**
   * Get Storage Contents
   * @param {string} id - Storage id
   * @returns {object} - Contents
   */
  async getContents(id) {
    return await axios({
      method: "GET",
      url: this.url + "/storages/contents/" + id,
      headers: { Authorization: `token ${this.key}` },
    }).then(({ data }) => data);
  }
}

module.exports = Fistorage;
