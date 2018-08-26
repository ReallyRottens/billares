import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

	organization: any = {name:'really rottens', contact:'under_pressure@esdenoche.com'};

  constructor() { }

  ngOnInit() {
  }

}
