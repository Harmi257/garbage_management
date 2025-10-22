// src/domain/models/Complaint.js
export class Complaint {
    constructor(binName, locality, landmark, city, userEmail, complaint, status = 'Pending', dateCreated = new Date()) {
      this.binName = binName;
      this.locality = locality;
      this.landmark = landmark;
      this.city = city;
      this.userEmail = userEmail;
      this.complaint = complaint;
      this.status = status; // Default to 'Pending'
      this.dateCreated = dateCreated; // Defaults to current date if not provided
    }
  }
  