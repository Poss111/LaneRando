import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryComponent } from './entry.component';
import {NO_ERRORS_SCHEMA} from 'src/node_modules/@angular/core';
import {RouterTestingModule} from 'src/node_modules/@angular/router/testing';
import {routes} from 'src/src/app/app-routing.module';
import {RandomPickComponent} from 'src/src/app/components/random-pick/random-pick.component';

describe('EntryComponent', () => {
  let component: EntryComponent;
  let fixture: ComponentFixture<EntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes) ],
      declarations: [ EntryComponent, RandomPickComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
