import { Component, OnInit } from '@angular/core';
import { faHome, faUserGraduate, faDollarSign, faBusinessTime } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  faHome = faHome;
  faUserGraduate = faUserGraduate;
  faDollarSign = faDollarSign; 
  faBusinessTime = faBusinessTime;

  ngOnInit(): void {
      
  }
    
}
