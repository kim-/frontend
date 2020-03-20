import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-outbound-nav-list',
  templateUrl: './outbound-nav-list.component.html',
  styleUrls: ['./outbound-nav-list.component.css']
})
export class OutboundNavListComponent implements OnInit {

  
  data: Array<{ id: number, icon: string, text: string }> = [
    { id: 10, icon: "assets/img/outbound/auto.png", text: "拣货任务清单" },
  ];

  constructor(private router: Router
    ,private _location:Location) { }

  ngOnInit() {
  }

  click(event): void {
    let val = event.data.id;
    if (val == 10) { this.router.navigateByUrl("outbound/pick-task-list");}
    if (val == 11) { this.router.navigateByUrl("outbound/pick-scan");}
    console.log(val);
  }

  goBack():void{
    this._location.back();
  }

}
