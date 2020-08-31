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

  it('should populate suggested name in name1 if box is null', () => {
    const input = 'test';
    component.populateSuggestedName(input);
    expect(component.name1).toEqual(input);
  });

  it('should populate suggested name in name2 if box is null and name1 is populated', () => {
    const input = 'test';
    component.name1 = 'populated';
    component.populateSuggestedName(input);
    expect(component.name2).toEqual(input);
  });

  it('should populate suggested name in name3 if box is null and name1 and name2 are populated', () => {
    const input = 'test';
    component.name1 = 'populated';
    component.name2 = 'populated';
    component.populateSuggestedName(input);
    expect(component.name3).toEqual(input);
  });

  it('should populate suggested name in name4 if box is null and name1, name2, and name3 are populated', () => {
    const input = 'test';
    component.name1 = 'populated';
    component.name2 = 'populated';
    component.name3 = 'populated';
    component.populateSuggestedName(input);
    expect(component.name4).toEqual(input);
  });

  it('should populate suggested name in name5 if box is null and name1, name2, name3, and name4 are populated', () => {
    const input = 'test';
    component.name1 = 'populated';
    component.name2 = 'populated';
    component.name3 = 'populated';
    component.name4 = 'populated';
    component.populateSuggestedName(input);
    expect(component.name5).toEqual(input);
  });
});
