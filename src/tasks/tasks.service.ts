import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  private tasks = [{ name: 'Asif ahmed hanagi' }];

  getAllTask() {
    return this.tasks;
  }
}
