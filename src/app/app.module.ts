import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler } from '@angular/core';
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
import { ConnectApiProvider } from '../providers/connect-api/connect-api';

import { HttpModule } from '@angular/http';

import {NgModule, LOCALE_ID} from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

import { ModalPage } from '../pages/modal/modal';



// Dans déclaration et entryComponents, on va importer le nom qu'on a entre {}
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MaSuperPage,
    ListPage,
    FormPage,
    ModalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    PipesModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MaSuperPage,
    ListPage,
    FormPage,
    ModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ConnectApiProvider,
    { provide: ErrorHandler,
    useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

registerLocaleData(localeFr, 'fr');
