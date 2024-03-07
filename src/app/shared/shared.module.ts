import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { HomeRoutingModule } from "../modules/home/home-routing.module";
import { TaskListComponent } from "./components/task-list/task-list.component";

@NgModule({
    declarations: [
        TaskListComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomeRoutingModule
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    exports: [
        TaskListComponent,
    ]
  })
  export class SharedModule { } 