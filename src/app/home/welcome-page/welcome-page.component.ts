import { Component, OnInit } from '@angular/core';

import { faBowlFood, faWifi, faSink, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

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
