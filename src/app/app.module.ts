import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
// On importe la nouvelle page
import { MaSuperPage } from '../pages/ma-super/ma-super';

import { PipesModule } from '../pipes/pipes.module';

import { ListPage } from '../pages/list/list';

import { FormPage } from '../pages/form/form';


// Dans déclaration et entryComponents, on va importer le nom qu'on a entre {}
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MaSuperPage,
    ListPage,
    FormPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    PipesModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MaSuperPage,
    ListPage,
    FormPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
