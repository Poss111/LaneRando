import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EntryComponent} from "./entry/entry.component";
import {RandomPickComponent} from "./components/random-pick/random-pick.component"; // CLI imports router

const routes: Routes = [
  { path: 'entry', component: EntryComponent },
  { path: 'lane-rando', component: RandomPickComponent },
  { path: '',   redirectTo: '/entry', pathMatch: 'full'},
  { path: '**', component: EntryComponent }]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
