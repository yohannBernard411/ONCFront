import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  enter($event: any){
    $event.target.firstChild.setAttribute("sens", "true");
  }

  leave($event: any){
    $event.target.firstChild.setAttribute("sens", "false");
  }
}
