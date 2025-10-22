// src/domain/models/Work.js
export class Work {
    constructor(binId, driverEmail, workDate = new Date(), status = 'Pending') {
      this.binId = binId; // This will be a string or ObjectId (depending on how it's handled in the frontend)
      this.driverEmail = driverEmail;
      this.workDate = workDate; // Default to current date if not provided
      this.status = status; // Default to 'Pending' if not provided
    }
  }
  