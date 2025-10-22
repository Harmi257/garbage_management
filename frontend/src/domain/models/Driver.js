// domain/models/Driver.js
export class Driver {
  constructor({ name, email, mobileNo, address, area, binId, idNum }) {
    this.name = name;
    this.email = email;
    this.mobileNo = mobileNo;
    this.address = address;
    this.area = area;
    this.binId = binId;
    this.idNum = idNum;
  }

  // Optionally, add domain-specific validations here
  isValid() {
    return this.name && this.email && this.mobileNo;  // example validation
  }
}
