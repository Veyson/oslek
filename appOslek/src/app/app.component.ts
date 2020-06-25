import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ChamadoClientePage } from '../pages/chamado-cliente/chamado-cliente';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = ChamadoClientePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

