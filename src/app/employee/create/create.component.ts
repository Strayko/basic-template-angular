import {Component} from "@angular/core";
import {EmployeeService} from "../../shared/employee.service";
import {FormBuilder} from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  contactForm

  constructor(
    private employeeService: EmployeeService,
    private formBuilder: FormBuilder,
    private router: Router) {
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

  createEmployee() {
    this.employeeService.createEmployee(this.contactForm.value).subscribe((data) => {
      this.router.navigate(['/'])
    })
  }

}
