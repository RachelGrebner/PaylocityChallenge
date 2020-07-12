import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-employee-shell",
  templateUrl: "./employee-shell.component.html",
})
export class EmployeeShellComponent implements OnInit {
  employeeForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.employeeForm = this.fb.group({
      name: ["", Validators.required],
    });
  }
}
