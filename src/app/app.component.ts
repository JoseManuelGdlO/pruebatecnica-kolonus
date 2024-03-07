import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { TaskService } from './modules/home/services/task.service';
import { StorageService } from './shared/utils/storage.service';
import { TASK_STORAGE_KEY } from './shared/utils/reservate-strings';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private taskService: TaskService,
    private storageService: StorageService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.pause.subscribe(async () => {
      await this.storageService.save(TASK_STORAGE_KEY, this.taskService.tasks);
    });

    window.addEventListener('beforeunload', async () => {
      await this.storageService.save(TASK_STORAGE_KEY, this.taskService.tasks);
    });
  }
}
