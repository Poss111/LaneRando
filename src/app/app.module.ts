import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RandomPickComponent } from './components/random-pick/random-pick.component';
import { EntryComponent } from './components/entry/entry.component';
import {FormsModule} from '@angular/forms';
import { NameSuggestionComponent } from './components/name-suggestion/name-suggestion.component';

@NgModule({
  declarations: [
    AppComponent,
    RandomPickComponent,
    EntryComponent,
    NameSuggestionComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
