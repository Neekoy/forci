import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageSubheaderComponent } from './homepage-subheader.component';

describe('HomepageSubheaderComponent', () => {
  let component: HomepageSubheaderComponent;
  let fixture: ComponentFixture<HomepageSubheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageSubheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageSubheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
