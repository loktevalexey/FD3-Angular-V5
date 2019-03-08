import { TestBed, async } from '@angular/core/testing';
import { TestMeComponent } from './testme.component';

describe('тестируем TestMeComponent: ', () => {

  // перед каждым тестом (вызов it) конфигурируем тестовый модуль
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestMeComponent
      ],
    }).compileComponents();
  }));

  it('компонент должен успешно создаваться', async(() => { // внимание - здесь async это имя функции, а не ключевое слово JS
    const fixture = TestBed.createComponent(TestMeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('свойство класса title должно содержать ожидаемое значение', async(() => {
    const fixture = TestBed.createComponent(TestMeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('testing app');
  }));

  it('свойство title должно быть привязано к содержимому тега h1', async(() => {
    const fixture = TestBed.createComponent(TestMeComponent);
    fixture.detectChanges(); // чтобы привязки обновились
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to testing app!');
  }));

});
