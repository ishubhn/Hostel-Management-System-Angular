import { Component, OnInit } from '@angular/core';

import { faBowlFood, faWifi, faSink, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  
	faBowlFood = faBowlFood;
	faWifi = faWifi;
	faSink = faSink;
	faFb = faFacebookF;
	faTwitter = faTwitter;
	faInsta = faInstagram;
	faEnv = faEnvelope;

  constructor() { }

  ngOnInit(): void {
  }

}
