import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ClasificationService } from '../../services/clasification.service';

@Component({
  selector: 'app-add-clasification',
  templateUrl: './add-clasification.modal.html',
  styleUrls: ['./add-clasification.modal.scss'],
})
export class AddClasificationPage {
  newClasification!: string;

  constructor(
    private modalController: ModalController,
    private clasificationService: ClasificationService
  ) {}

  saveClasification() {
    this.clasificationService.addClasifications(this.newClasification);
    this.modalController.dismiss();
  }

  closeModal() {
    this.modalController.dismiss();
  }

  
  disableButton(): boolean {
    const regex = /^\s+$/;
    if (this.newClasification === undefined || this.newClasification === '' || regex.test(this.newClasification)) {
      return true;
    }
    return false
  }
}