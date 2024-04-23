import { Component, OnInit } from '@angular/core';
import { routes, Page } from '../../../assets/data';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html'
})
export class HomePage implements OnInit {

  title: string = 'Menú principal';
  pages: Page[] = routes;

  constructor(private iab: InAppBrowser) {
  }

  ngOnInit() {
  }

  errorImg(ev){}

  openRecarga(){
    const browser = this.iab.create('https://byplus.io/wimx');
    browser.show();
  }

}
