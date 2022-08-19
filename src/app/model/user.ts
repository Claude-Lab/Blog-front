import {Role} from "./role";

export class User {
  id: number;
  firstName: string;
  lastName: string;
  fullname: string;
  email: string;
  password: string;
  avatar: string;
  validated: boolean;
  createdAt: Date;
  updatedAt: Date;
  roles: Role[];
  token?: any;

  constructor(id: number,
              firstName: string,
              lastName: string,
              email: string,
              password: string,
              avatar: string,
              validated: boolean,
              roles: Role[],
              token: any,
              createdAt: Date,
              updatedAt: Date) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullname = this.firstName + ' ' + this.firstName;
    this.email = email;
    this.password = password;
    this.avatar = avatar;
    this.validated = validated;
    this.roles = roles;
    this.token = token;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
