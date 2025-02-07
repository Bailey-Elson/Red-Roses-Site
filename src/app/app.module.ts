import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module'
import { SharedComponentsModule } from './shared-components/shared-components.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { ModalsModule } from './modals/modals.module';
import { SimpleModalModule } from 'ngx-simple-modal';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    SharedComponentsModule,
    ModalsModule,
    NgbModule,
    SimpleModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
