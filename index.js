const axios = require("axios");

class Fistorage {
  constructor(token) {
    this.url = "https://fistorage.glitch.me";
    this.token = token;
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
      headers: { Authorization: `token ${this.token}` },
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
      headers: { Authorization: `token ${this.token}` },
    }).then(({ data }) => data);
  }

  /**
   * Update Storage Contents
   * @param {string} id - Storage id
   * @param {{title: string|null, description: string|null, contents: any}} updates - Which will be updated
   * @returns {object} - The new contents
   */
  async updateContents(id, updates) {
    return await axios({
      method: "PUT",
      url: this.url + "/storages/update/" + id,
      headers: { Authorization: `token ${this.token}` },
      data: updates,
    }).then(({ data }) => data);
  }

  /**
   * Delete Storage Contents
   * @param {string} id - Storage id
   * @returns {boolean}
   */
  async deleteContents(id) {
    return await axios({
      method: "DELETE",
      url: this.url + "/storages/delete/" + id,
      headers: { Authorization: `token ${this.token}` },
    }).then(({ data }) => data);
  }
}

module.exports = Fistorage;
