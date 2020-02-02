export interface PostModel {
  detail: MessageData;
  reactions: {
    id?: string;
    user?: string;
  }[];
  comments: MessageData[];
}

export interface MessageData {
  id?: string;
  user?: string;
  message?: string;
  dateCreated?: Date;
}
