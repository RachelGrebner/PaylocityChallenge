import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import { EmployeeShellComponent } from "./employee-shell/employee-shell.component";

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
  declarations: [EmployeeShellComponent],
})
export class EmployeeModule {}
