import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { WelcomeComponent } from "./welcome/welcome.component";
import { EmployeeModule } from "./employees/employee.module";

const routes: Routes = [
  { path: "welcome", component: WelcomeComponent },
  {
    path: "employees",
    loadChildren: () => EmployeeModule,
  },
  { path: "", redirectTo: "welcome", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
