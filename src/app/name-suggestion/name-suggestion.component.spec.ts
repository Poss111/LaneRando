import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameSuggestionComponent } from './name-suggestion.component';

describe('NameSuggestionComponent', () => {
  let component: NameSuggestionComponent;
  let fixture: ComponentFixture<NameSuggestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameSuggestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameSuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show no records if there are no suggestions passed', () => {
    component.nameSuggestions = [];
    component.ngOnInit();
    expect(component.showNa).toEqual(true);
  });

  it('should alphabetize the list before displaying', () => {
    const array = ['D', 'a', 'as', 'f', 'fsa'];
    component.nameSuggestions = array;
    fixture.detectChanges();
    component.ngOnInit();
    expect(component.showNa).toEqual(false);
    expect(component.nameSuggestions).toEqual(array.sort((a, b) => {
      return a.toLowerCase().localeCompare(b.toLowerCase());
    }));
    console.log(array);
  });

  it('should show no records if there are suggestions are undefined', () => {
    component.ngOnInit();
    expect(component.showNa).toEqual(true);
  });

  it('should clear suggested names', () => {
    component.nameSuggestions = ['Some', 'Awesome', 'Values'];
    component.clearSuggestions();
    expect(component.nameSuggestions.length).toEqual(0);
  });
});
