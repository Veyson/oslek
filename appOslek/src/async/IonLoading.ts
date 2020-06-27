import { LoadingController } from "ionic-angular";

export class IonLoading {

  private static loading: any;

  constructor() {
  }
  
  static async presentLoading(message: string, loadingController: LoadingController) {
    this.loading = loadingController.create({
      content: message,
    });
    this.loading.present();
  }

  static dismissLoading(){
    this.loading.dismiss();
  }

}