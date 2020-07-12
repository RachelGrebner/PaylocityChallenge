import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { EmployeeShellComponent } from "./employee-shell/employee-shell.component";
import { EmployeeDetailComponent } from "./employee-detail/employee-detail.component";

import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: "",
        component: EmployeeShellComponent,
      },
    ]),
  ],
  declarations: [
    EmployeeListComponent,
    EmployeeShellComponent,
    EmployeeDetailComponent,
  ],
})
export class EmployeeModule {}
