import { Injectable } from '@angular/core';
import { ITask } from 'src/app/shared/interfaces/task.interface';
import { TASK_STORAGE_KEY } from 'src/app/shared/utils/reservate-strings';
import { StorageService } from 'src/app/shared/utils/storage.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: ITask[] = [];

  constructor(
    private storageService: StorageService
  ) { 
    this.getTask();
  }

  async getTask() {
   const value = await this.storageService.load(TASK_STORAGE_KEY) || [];
    if (value.length > 0) {
      this.tasks = value;
    }
  }

  addTask(task: ITask) {
    this.tasks.push(task);
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }

  completeTask(index: number) {
    this.tasks[index].done = true;
  }

  filterPeerCalification(clasification: string) {
    return this.tasks.filter(tarea => tarea.clasification === clasification);
  }
}