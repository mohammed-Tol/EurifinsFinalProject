import { Component, OnInit } from '@angular/core';
import { ManagerapiService } from '../service/Managerapi.service';
import { Enquiry } from '../model/Enquiry';

@Component({
  selector: 'app-manager-view-enquiry',
  templateUrl: './manager-view-enquiry.component.html',
  styleUrl: './manager-view-enquiry.component.css'
})
export class ManagerViewEnquiryComponent implements OnInit{
  EnquiryDetais:Enquiry = <Enquiry>{};
  ngOnInit(): void {
    this.apiservices.getEnquiry(2).subscribe(
      (data)=>{
        console.log(data);
        this.EnquiryDetais=data;
      }
      
    )
  }
  
  constructor(
    public apiservices:ManagerapiService
    
  ) {
    
  }


}
