import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { AppComponent } from './app.component';
import { MapboxGLModule } from 'ngx-mapbox-gl';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxMapboxGLModule,
    MapboxGLModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
