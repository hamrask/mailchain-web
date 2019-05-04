import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HttpClientModule } from '@angular/common/http';
import { HttpHelpersService } from './services/helpers/http-helpers/http-helpers.service';
import { SearchPipe } from './pipes/search-pipe/search-pipe.pipe';
import { AddressPipe } from './pipes/address-pipe/address-pipe.pipe';
import { LocationStrategy, HashLocationStrategy, APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    SearchPipe,
    AddressPipe,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BsDropdownModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    HttpHelpersService,
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LocationStrategy, useClass: HashLocationStrategy }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
