export enum Status {
  READY = 'ready',
  DONE = 'done',
}

export class Todo {
  id?: number;
  content: string;
  status: Status;
}
