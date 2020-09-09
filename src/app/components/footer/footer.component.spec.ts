import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import { HttpClientTestingModule } from 'src/node_modules/@angular/common/http/testing';
import { of } from 'src/node_modules/rxjs';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterComponent ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return with first version in the array from the Observable<string[]>', () => {
    const versions = [
      '10.2.1',
      '10.1.1'
    ];
    jest.spyOn((component as any).leagueVersionsService, 'getLeagueVersions').mockImplementation(() => of(versions));
    component.ngOnInit();
    expect(component.version).toEqual(versions[0]);
  });
});
