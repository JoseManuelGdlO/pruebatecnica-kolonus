import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ClasificationService } from '../../services/clasification.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.modal.html',
  styleUrls: ['./new-task.modal.scss'],
})
export class NewTaskPage {
  newTask!: string;
  clasification = 'todas';

  constructor(
    private modalController: ModalController,
    public clasificationService: ClasificationService
    ) {}

  saveTask() {
    this.modalController.dismiss({name :this.newTask, clasification: this.clasification});
  }

  closeModal() {
    this.modalController.dismiss();
  }

  disableButton(): boolean {
    const regex = /^\s+$/;
    if (this.newTask === undefined || this.newTask === '' || regex.test(this.newTask)) {
      return true;
    }
    return false
  }
}