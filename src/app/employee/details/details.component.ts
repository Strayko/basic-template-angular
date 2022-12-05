import {Component, OnInit} from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';
import {EmployeeService} from "../../shared/employee.service";
import {FormBuilder} from "@angular/forms";

@Component({
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class EmployeeDetails implements OnInit {

  contactForm
  public employee: any
  public employeeId: any

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private formBuilder: FormBuilder) {
    this.contactForm = formBuilder.group({
      name: [""],
      code: [""],
      mobile: [""],
      email: [""],
      address: [""],
      departmentId: [""],
      birthdate: [""]
    })
  }

  ngOnInit() {
    this.employeeId = this.activeRoute.snapshot.paramMap.get('id')
    this.employeeService.getEmployeeById(this.employeeId).subscribe((data) => {
      this.employee = data
    })

    this.contactForm.get("name").valueChanges.subscribe(selectedValue => {
      this.employee.name = selectedValue
    })
    this.contactForm.get("code").valueChanges.subscribe(selectedValue => {
      this.employee.code = selectedValue
    })
    this.contactForm.get("mobile").valueChanges.subscribe(selectedValue => {
      this.employee.mobile = selectedValue
    })
    this.contactForm.get("email").valueChanges.subscribe(selectedValue => {
      this.employee.email = selectedValue
    })
    this.contactForm.get("address").valueChanges.subscribe(selectedValue => {
      this.employee.address = selectedValue
    })
    this.contactForm.get("departmentId").valueChanges.subscribe(selectedValue => {
      this.employee.departmentId = selectedValue
    })
    this.contactForm.get("birthdate").valueChanges.subscribe(selectedValue => {
      this.employee.birthdate = selectedValue
    })
  }

  updateEmployee() {
    this.employeeService.updateEmployee(this.employee, this.employeeId).subscribe((data) => {
      this.router.navigate(['/'])
    })
  }

  deleteEmployee(employeeId) {
    this.employeeService.deleteEmployee(employeeId).subscribe((data) => {
      this.router.navigate(['/'])
    })
  }
}
