export class User {
  _id: number;
  nickname: string;
  connected: boolean;

  onstructor(value: Object = {}) {
    Object.assign(this, value);
  }
}