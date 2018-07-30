import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent {
  @Input('registration') registration: boolean;
  @Input('buttonText') buttonText: string;
  @Input('requestPending') requestPending: boolean;

  @Output() emitter = new EventEmitter();

  email = '';
  password = '';
  confirmPassword = '';

  constructor() { }

  emit() {
    const data = {
      password: this.password,
      confirmPassword: this.confirmPassword
    };
    this.registration ? data['email'] = this.email : data['username'] = this.email;

    return this.emitter.emit(data);
  }
}
