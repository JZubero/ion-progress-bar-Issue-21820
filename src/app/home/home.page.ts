import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private timer;

  value = 0;

  ionViewDidEnter() {
    this.timer = setInterval(() => {
      this.value = Math.random();
    }, 100);
  }

}
