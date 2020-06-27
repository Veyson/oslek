import { AlertController } from "ionic-angular";

export class IonAlert {

  private static alert: any;

  constructor() {
  }

  static async presentAlert(title: string, subTitle: string, message: string, alertController: AlertController) {
    this.alert = alertController.create({
      title: title,
      subTitle: subTitle,
      message: message,
      buttons: ['Feito']
    });

    this.alert.present();
  }
}