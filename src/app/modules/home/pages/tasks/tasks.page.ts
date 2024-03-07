import { Component, OnInit } from '@angular/core';
import { NewTaskPage } from '../../modales/new-task/new-task.modal';
import { ModalController } from '@ionic/angular';
import { TaskService } from '../../services/task.service';
import { AddClasificationPage } from '../../modales/add-classification/add-clasification.modal';
import { ClasificationService } from '../../services/clasification.service';

@Component({
  selector: 'app-tasks',
  templateUrl: 'tasks.page.html',
  styleUrls: ['tasks.page.scss'],
})
export class TasksPage {
  filterClasification = '';

  constructor(
    private modalController: ModalController,
    private taskService: TaskService,
    public clasificationService: ClasificationService
  ) {}

  async addNewTask() {
    const modal = await this.modalController.create({
      component: NewTaskPage,
      componentProps: {},
    });

    modal.onDidDismiss().then((data: any) => {
      if (data.data) {
        const newTask = data.data;
        this.taskService.addTask({
          name: newTask.name,
          clasification: newTask.clasification,
          done: false,
        });
      }
    });

    return await modal.present();
  }

  async addNewClasification() {
    const modal = await this.modalController.create({
      component: AddClasificationPage,
      componentProps: {},
    });

    return await modal.present();
  }

  selectClasification() {
    this.taskService.filterPeerCalification(this.filterClasification);
  }
}
