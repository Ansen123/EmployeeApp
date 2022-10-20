import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private myapi:ApiService) { }
  name=""
  address=""
  email=""
  designation=""
  department=""
  mob=""
  salary=""
  readvalues=()=>{
    let data={
      "name":this.name,
      "address":this.address,
      "email":this.email,
      "designation":this.designation,
      "department":this.department,
      "mob":this.mob,
      "salary":this.salary,
    }
    console.log(data)
    this.myapi.addEmployee(data).subscribe(
      (response)=>{
        alert("Data Added")
      }
    )


  }
  ngOnInit(): void {
  }

}
