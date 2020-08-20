import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EntryComponent} from './entry/entry.component';
import {RandomPickComponent} from './components/random-pick/random-pick.component';

const routes: Routes = [
  { path: 'entry', component: EntryComponent },
  { path: 'lane-rando', component: RandomPickComponent },
  { path: '',   redirectTo: '/entry', pathMatch: 'full'},
  { path: '**', component: EntryComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
