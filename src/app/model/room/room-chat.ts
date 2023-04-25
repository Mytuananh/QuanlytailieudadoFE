import { User } from "../user/user";
import { Message } from "../message/message";

export interface RoomChat {
  id?: number;
  name?: string;
  messages?: Message[];
  user?: User[];
}

