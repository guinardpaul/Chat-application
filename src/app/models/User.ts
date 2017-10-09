import { Room } from './Room';

export class User {
  _id?: number;
  nickname: string;
  password: string;
  email: string;
  rooms?: Room[];
  connected?: boolean;
  updated_at?: Date;

  constructor(value: Object = {}) {
    Object.assign(this, value);
  }
}
