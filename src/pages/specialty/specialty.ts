import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
/**
 * Generated class for the SpecialtyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-specialty',
  templateUrl: 'specialty.html',
})
export class SpecialtyPage {

  constructor(public navCtrl: NavController,public nativePageTransitions:NativePageTransitions) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpecialtyPage');
  }

  pushConsultCategory () : void {
    let options: NativeTransitionOptions = {
      direction: 'left',
      duration: 500,
      slowdownfactor: 3,
      slidePixels: 20,
      iosdelay: 100,
      androiddelay: 150,
      fixedPixelsTop: 0,
      fixedPixelsBottom: 60
     };

    this.nativePageTransitions.slide(options)
    this.navCtrl.push('CategoryPage')
  }


}
