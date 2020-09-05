import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RandomPickComponent } from './components/random-pick/random-pick.component';
import { EntryComponent } from './components/entry/entry.component';
import {FormsModule} from '@angular/forms';
import { NameSuggestionComponent } from './components/name-suggestion/name-suggestion.component';
import { WhatsNewComponent } from './components/whats-new/whats-new.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    RandomPickComponent,
    EntryComponent,
    NameSuggestionComponent,
    WhatsNewComponent,
    FooterComponent
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
