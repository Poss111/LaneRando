import {Component} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {environment} from "../environments/environment";

declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LaneRando';

  constructor(public router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        gtag('config', environment.googleId, {
          'page_path': event.urlAfterRedirects
        });
      }
    });
  }
}
