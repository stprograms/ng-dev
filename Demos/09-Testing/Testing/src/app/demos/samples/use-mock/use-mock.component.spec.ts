import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { MockAuthService } from './auth.service.mock';
import { UseMockComponent } from './use-mock.component';

describe('UseMockComponent with MockAuth Service', () => {
  const ms = new MockAuthService();
  let comp: UseMockComponent;
  let fixture: ComponentFixture<UseMockComponent>;

  beforeEach(() => {
    comp = new UseMockComponent(ms);
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      declarations: [UseMockComponent],
      providers: [{ provide: AuthService, useValue: ms }],
    }).compileComponents();

    fixture = TestBed.createComponent(UseMockComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(comp).toBeTruthy();
  });

  it('should return Authenticated true', () => {
    expect(comp.loggedIn).toBe(true);
  });

  it('should have the correct login state on the Template', () => {
    expect(fixture.nativeElement.querySelector('#auth').textContent).toContain(
      'true'
    );
  });
});
