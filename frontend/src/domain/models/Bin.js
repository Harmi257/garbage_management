// src/domain/models/Bin.js
export class Bin {
    constructor(locality, landmark, city, loadType, driverEmail, cyclePeriod, status) {
      this.locality = locality;
      this.landmark = landmark;
      this.city = city;
      this.loadType = loadType || 'Light'; // Default to 'Light' if not provided
      this.driverEmail = driverEmail;
      this.cyclePeriod = cyclePeriod; // Example: 'Daily', 'Weekly', etc.
      this.status = status || 'Empty'; // Default to 'Empty' if not provided
    }
  }
  