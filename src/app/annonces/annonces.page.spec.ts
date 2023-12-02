import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnnouncesPage } from './annonces.page';

describe('AnnouncesPage', () => {
  let component: AnnouncesPage;
  let fixture: ComponentFixture<AnnouncesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AnnouncesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
