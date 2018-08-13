import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {


  allowNewServer:boolean = true;
  result = "Server: No Server exist";
  serverName = "";
  displayMessage = false;

  serverList = [];

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = false; 
    },200);
  }

  ngOnInit() {
  }

  addNewServer(){
    this.displayMessage = true;
    this.serverList.push(this.serverList.length + 1); 
    this.result = this.serverName;
  }
}
