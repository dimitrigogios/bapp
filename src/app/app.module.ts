import { IonicStorageModule } from '@ionic/storage';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
//import { HttpModule } from '@angular/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from "@angular/common/http";
import { HomePage, BontiiApp } from './containers';
import { UserService } from './services';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, metaReducers } from './store/reducers';
import { UserEffects } from './store/effects';

@NgModule({
  declarations: [
    BontiiApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(BontiiApp),
    // Initialize the store with our effects
    EffectsModule.forRoot([UserEffects]),
    // Initialize the store with our reducers
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
    IonicStorageModule.forRoot({name: '_bontii'})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    BontiiApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    UserService
  ]
})
export class AppModule { }
