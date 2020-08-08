import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomPickComponent } from './random-pick.component';
import * as cloneDeep from 'lodash.cloneDeep';

describe('RandomPickComponent', () => {
  let component: RandomPickComponent;
  let fixture: ComponentFixture<RandomPickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomPickComponent ]
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

  it('should shift the array twice if called', () => {
    const array = [1, 2, 3, 4, 5];
    const expectedArray = cloneDeep(array);
    expectedArray.push(expectedArray.shift());
    expectedArray.push(expectedArray.shift());
    expect(component.shuffleArrayWithUniqueness(cloneDeep(array))).toEqual(expectedArray);
  });
});
