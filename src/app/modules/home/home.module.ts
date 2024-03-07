import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { TasksPage } from "./pages/tasks/tasks.page";
import { HomeRoutingModule } from "./home-routing.module";
import { SharedModule } from "src/app/shared/shared.module";
import { NewTaskPage } from "./modales/new-task/new-task.modal";
import { AddClasificationPage } from "./modales/add-classification/add-clasification.modal";

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      HomeRoutingModule,
      SharedModule
    ],
    declarations: [
        TasksPage,
        NewTaskPage,
        AddClasificationPage
    ]
  })
  export class HomePageModule {}
  