export class EmployeModel{
  name: string;
  lastname: string;
  information: string;
  image: string;
  constructor(name: string, lastname: string,  information: string, url: string) {
    this.information = information;
    this.lastname = lastname;
    this.name = name;
    this.image = url;
  }
}
