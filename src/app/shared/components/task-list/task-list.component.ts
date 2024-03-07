import { Component, Input, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { TaskService } from 'src/app/modules/home/services/task.service';
import { ITask } from '../../interfaces/task.interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  @Input() set filterClasification(value: string) {
    if (
      value === '' ||
      value === undefined ||
      value === null ||
      value === 'todos'
    ) {
      this.tasks = this.taskService.tasks;
      return;
    }
    this.tasks = this.taskService.filterPeerCalification(value);
  }

  tasks!: ITask[];

  constructor(
    public taskService: TaskService,
    private alertController: AlertController
  ) {}

  ngOnInit(): void {
    this.tasks = this.taskService.tasks;
  }

  async confirmRemoveTask(task: any) {
    const alert = await this.alertController.create({
      header: 'Confirmar Eliminación',
      message: '¿Estás seguro de que deseas eliminar esta tarea?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelado');
          },
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.removeTask(task);
          },
        },
      ],
    });

    await alert.present();
  }

  removeTask(task: any) {
    this.taskService.removeTask(task);
  }
}
