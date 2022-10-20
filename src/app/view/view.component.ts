import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
  }
  fetchData=()=>{
   this.myapi.viewData().subscribe(
     (data)=>{
       this.view=data
     }
   )
  
   }
view:any=[]
  ngOnInit(): void {
  }

}
