import { Component, OnInit } from '@angular/core';
import {CommonService} from '../common.service';

@Component({
  selector: 'app-list',
  templateUrl:'./list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  pageTitle = 'Product List';

  public details:any;
  // pageTitle:ProductList;

  constructor(private commonService:CommonService) { }

  ngOnInit(): void {
     this.commonService.getRestoList().subscribe((result)=>{
        this.details=result;
       console.log(this.details);
     });
  }

}
