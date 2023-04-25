import { User } from "../user/user";

export interface Message {
  id?: number;
  content?: string;
  date?: string;
  sender?: User;
  status?: boolean;
}
