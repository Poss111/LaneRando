import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomPickComponent } from './random-pick.component';
import { routes} from 'src/src/app/app-routing.module';
import {RouterTestingModule} from 'src/node_modules/@angular/router/testing';
import {NO_ERRORS_SCHEMA} from 'src/node_modules/@angular/core';
import {EntryComponent} from 'src/src/app/components/entry/entry.component';

describe('RandomPickComponent', () => {
  let component: RandomPickComponent;
  let fixture: ComponentFixture<RandomPickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes) ],
      declarations: [ RandomPickComponent, EntryComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomPickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
