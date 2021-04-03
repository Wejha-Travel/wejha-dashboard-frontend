import { Component, OnInit } from '@angular/core';
import { LocalizationService } from 'src/app/services/localization.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  cards: any[] = [22, 40, 68];


  constructor(public translate: LocalizationService) { }

  ngOnInit() {
  }

}
