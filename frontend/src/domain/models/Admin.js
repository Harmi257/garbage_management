// src/domain/models/Admin.js
export class Admin {
    constructor(username, password, email) {
      this.username = username;
      this.password = password; // Note: Handle password securely in the frontend (avoid plain text)
      this.email = email;
    }
  }
  