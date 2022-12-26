import { Component, OnInit } from '@angular/core';

import { TitlePageService } from './../../service/title-page.service';
import { faHouseChimneyWindow } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

	currentRoute: any;
	faHouse = faHouseChimneyWindow;

	constructor(private service: TitlePageService) {

	}

	ngOnInit(): void {
		this.currentRoute = this.service.getRoute();
	}

}
