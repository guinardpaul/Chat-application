import { User } from './User';

export class Room {
  _id?: number;
  name: string;
  users: User[];

  constructor(value: Object = {}) {
    Object.assign(this, value);
  }
}
