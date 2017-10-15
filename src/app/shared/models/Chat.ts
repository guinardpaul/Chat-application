import { Room } from './Room';

export class Chat {
  _id?: number;
  room: Room;
  nickname: string;
  message: string;
  updated_at: Date;

  constructor(value: Object = {}) {
    Object.assign(this, value);
  }
}
