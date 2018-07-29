import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent {
  @Input('registration') registration: boolean;
  @Input('buttonText') buttonText: string;

  @Output() emitter = new EventEmitter();

  email = '';
  password = '';
  confirmPassword = '';

  constructor() { }

  emit() {
    return this.emitter.emit({
      username: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword
    });
  }
}
