class Project {

  constructor(client, baseUrl) {
    this.client_ = client;
    this.baseUrl_ = baseUrl;
  }

  async getById(projectId, options) {
    const urlparams = new URLSearchParams(options);
    const queryString = urlparams.toString();
    const response = (
      await this.client_.fetch(`${this.baseUrl_}/groups/${projectId}?${queryString}`)
    ).json();
    return response;
  }

  async getByName(projectName, options) {
    const urlparams = new URLSearchParams(options);
    const queryString = urlparams.toString();
    const response = (
      await this.client_.fetch(`${this.baseUrl_}/groups/byName/${projectName}?${queryString}`)
    ).json();
    return response;
  }

  async getTeamsByProjectId(projectId, options) {
    const urlparams = new URLSearchParams(options);
    const queryString = urlparams.toString();
    const response = (
      await this.client_.fetch(`${this.baseUrl_}/groups/${projectId}/teams?${queryString}`)
    ).json();
    return response;
  }

  async getAll(options) {
    const urlparams = new URLSearchParams(options);
    const queryString = urlparams.toString();
    const response = (
      await this.client_.fetch(`${this.baseUrl_}/groups?${queryString}`)
    ).json();
    return response;
  }

  async delete(projectId, options) {
    const urlparams = new URLSearchParams(options);
    const queryString = urlparams.toString();
    await this.client_.fetch(`${this.baseUrl_}/groups/${projectId}?${queryString}`, {
      "method": "DELETE"
    });
    return true;
  }

  async removeUserFromProject(projectId, userId, options) {
    const urlparams = new URLSearchParams(options);
    const queryString = urlparams.toString();
    await this.client_.fetch(`${this.baseUrl_}/groups/${projectId}/users/${userId}?${queryString}`, {
      "method": "DELETE"
    });
    return true;
  }

  async assignTeams(projectId, body, options) {
    const urlparams = new URLSearchParams(options);
    const queryString = urlparams.toString();
    const response = (
      await this.client_.fetch(`${this.baseUrl_}/groups/${projectId}/teams?${queryString}`, {
        "method": "POST",
        "body": JSON.stringify(body),
        "headers": {"Content-Type": "application/json"}
      })
    ).json();
    return response;
  }

  async create(body, options) {
    const urlparams = new URLSearchParams(options);
    const queryString = urlparams.toString();
    const response = (
      await this.client_.fetch(`${this.baseUrl_}/groups?${queryString}`, {
        "method": "POST",
        "body": JSON.stringify(body),
        "headers": {"Content-Type": "application/json"}
      })
    ).json();
    return response;
  }
}

module.exports = Project;

