import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AgmCoreModule } from '@agm/core'
import { HttpClientModule } from '@angular/common/http';
import { Key } from './api-key';

@NgModule({
  
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: Key
    })
    
  ],
  declarations: [AppComponent,HelloComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
