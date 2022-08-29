import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApisService } from './services/apis.service';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './modules/core/core.module';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule
  ],
  providers: [ApisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
