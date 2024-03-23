import { v4 as uuidv4 } from 'uuid';

export class Todo {
  id: string = '';
  isComplete: boolean = false;

  constructor(public content: string) {
    this.id = uuidv4();
  }
}
