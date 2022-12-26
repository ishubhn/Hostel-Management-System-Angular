import { Injectable } from '@angular/core';
import { Router, NavigationEnd, Event as NavigationEvent } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TitlePageService {
	currentRoute?: string;

	constructor(private router: Router) {

		this.router.events
			.subscribe(
				(event: NavigationEvent) => {
					if (event instanceof NavigationEnd) {
						this.currentRoute = event.url;
						console.log(this.currentRoute);
					}
				});
	}

	getRoute() {
		return this.currentRoute;
	}
}
