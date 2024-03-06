import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EvenementListComponent } from './evenement-list/evenement-list.component';
import { EvenementEditionComponent } from './evenement-edition/evenement-edition.component';
import { EvenementCreationComponent } from './evenement-creation/evenement-creation.component';
import { EvenementUpdateComponent } from './evenement-update/evenement-update.component';
import { EvenementComponent } from './evenement/evenement.component';
import { EvenementDeleteComponent } from './evenement-delete/evenement-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    EvenementListComponent,
    EvenementEditionComponent,
    EvenementCreationComponent,
    EvenementUpdateComponent,
    EvenementComponent,
    EvenementDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
