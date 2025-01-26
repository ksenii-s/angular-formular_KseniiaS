import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ComponentHeaderComponent } from "./component-ui/component-header/component-header.component";
import { ComponentFormularComponent } from "./component-ui/component-formular/component-formular.component"; // Импорт FormsModule для работы с ngModel
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ComponentFooterComponent } from "./component-ui/component-footer/component-footer.component";

@Component({
  selector: 'app-root',
  standalone: true, // Указываем, что это standalone-компонент
  imports: [FormsModule, ComponentHeaderComponent, ComponentFormularComponent, ComponentFooterComponent], // Подключаем необходимые модули
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None 
})
export class AppComponent {
  title = 'angular-formular';
    
  constructor(private router: Router) {
    // Подписка на события маршрутизации
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)  // Отслеживаем завершение навигации
    ).subscribe(() => {
      this.handleFocus();
    });
  }
   // Обработчик фокуса
   private handleFocus() {
    const body = document.querySelector('body');
    if (body) {
      body.blur();  // Убираем фокус с body
    }
  }

  // Данные формы
  formData = {
    name: '',
    email: '',
    anrede: ''
  };

  submitted = false;

  // Метод для обработки данных формы
  onSubmit() {
    console.log('Formulardaten:', this.formData);

    this.submitted = true;
  }
}

