import { Component, OnInit } from '@angular/core';
import * as M from "materialize-css";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    M.AutoInit();
  }

  public nav () {
    $(document).ready(function(){
      $('.sidenav').sidenav();
    });
 
  }

}
