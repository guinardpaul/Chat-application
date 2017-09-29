export class User {
  _id: number;
  nickname: string;
  connected: boolean;
  updated_at: Date;

  constructor(value: Object = {}) {
    Object.assign(this, value);
  }
}