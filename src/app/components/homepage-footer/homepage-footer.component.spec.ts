import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageFooterComponent } from './homepage-footer.component';

describe('HomepageFooterComponent', () => {
  let component: HomepageFooterComponent;
  let fixture: ComponentFixture<HomepageFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
