import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators, FormArray } from "@angular/forms";

@Component({
  selector: "app-employee-shell",
  templateUrl: "./employee-shell.component.html",
})
export class EmployeeShellComponent implements OnInit {
  employeeForm: FormGroup;
  employeeBenefitCost: string;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.employeeForm = this.fb.group({
      employeeName: ["", Validators.required],
      dependents: this.fb.array([]),
    });
  }

  onFormSubmit() {
    this.employeeBenefitCost = "I Have Submitted the Form";
  }

  addDependent() {
    (<FormArray>this.employeeForm.get("dependents")).push(
      this.fb.group({
        dependentName: ["", Validators.required],
      })
    );
  }

  dependentIsInvalid(i) {
    return (
      (<FormArray>this.employeeForm.get("dependents")).at(i).invalid &&
      ((<FormArray>this.employeeForm.get("dependents")).at(i).dirty ||
        (<FormArray>this.employeeForm.get("dependents")).at(i).touched)
    );
  }

  get dependents() {
    return (<FormArray>this.employeeForm.get("dependents")).controls;
  }

  removeDependent(i) {
    (<FormArray>this.employeeForm.get("dependents")).removeAt(i);
  }
}
