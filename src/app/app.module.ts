import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
// adding the additional pages - RG
import { PostsPage } from '../pages/posts/posts';
import { UploadPage } from '../pages/upload/upload';
import { PostListPage } from '../pages/post-list/post-list';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import { AuthProvider } from '../providers/auth/auth';
import { HttpClientModule } from '@angular/common/http';
import { CameraPreview } from '@ionic-native/camera-preview';


// importing GEO plugins
import { Geolocation } from '@ionic-native/geolocation';
import { IonicStorageModule } from '@ionic/storage';

/** Firebase Config */
export const firebaseConfig = {
  apiKey: "AIzaSyDxZ6x0efH_7uCWum1wNbxhCW2LaWFsWQY",
  authDomain: "beacon-to.firebaseapp.com",
  databaseURL: "https://beacon-to.firebaseio.com",
  projectId: "beacon-to",
  storageBucket: "beacon-to.appspot.com",
  messagingSenderId: "479494665670"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LoginPage,
    TabsPage,
    PostsPage,
    UploadPage,
    PostListPage
  ],
  imports: [
    BrowserModule,
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    LoginPage,
    HomePage,
    TabsPage,
    PostsPage,
    UploadPage,
    PostListPage
  ],
  providers: [
    Camera,
    CameraPreview,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Geolocation
    , { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthProvider
  ]
})
export class AppModule { }
