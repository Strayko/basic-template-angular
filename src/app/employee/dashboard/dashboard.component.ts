import {Component, OnInit} from "@angular/core";
import {EmployeeService} from "../../shared/employee.service";


@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public employees: any
  statusValue = '1'
  options = [
    'not select',
    'active',
    'inactive'
  ]
  departments = [
    'not select',
    'Development',
    'Management',
    'HR'
  ]

  constructor(private employeeService: EmployeeService) {
  }

  onChangeDepartment(event: any) {
    switch (event.target.value) {
      case "Development": {
        this.getDepartment("0", this.statusValue)
        break;
      }
      case "Management": {
        this.getDepartment("1", this.statusValue)
        break;
      }
      case "HR": {
        this.getDepartment("2", this.statusValue)
        break;
      }
      case "not select": {
        this.getAllEmployees()
        break;
      }
    }
  }

  onChangeStatus(event: any){
    switch (event.target.value) {
      case "active": {
        this.statusValue = "1"
        this.getStatus("1")
        break;
      }
      case "inactive": {
        this.statusValue = "0"
        this.getStatus("0")
        break;
      }
      case "not select": {
        this.getAllEmployees()
      }
    }
  }

  getDepartment(departmentId: any, status: any) {
    this.employeeService.getDepartmentEmployees(departmentId, status).subscribe((data) => {
      this.employees = data
    })
  }

  getStatus(status: any) {
    this.employeeService.getStatusEmployees(status).subscribe((data) => {
      this.employees = data
    })
  }

  getAllEmployees() {
    this.employeeService.getEmployees().subscribe((data) => {
      this.employees = data
    })
  }

  ngOnInit() {
    this.getAllEmployees()
  }
}
