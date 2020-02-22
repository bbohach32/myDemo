import { Component, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
})
export class LoginPage {
  login: UserOptions = { email: '', password: '' };
  submitted = false;

  constructor(
    public userData: UserData,
    public router: Router,
    public toastCtrl: ToastController
  ) { }

  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.userData.login(this.login.email);
      this.router.navigateByUrl('/app/tabs/home');
    }
  }

  onSignup() {
    this.router.navigateByUrl('/signup');
  }

  async forgotPassword() {
    let message = 'No email will be sent.'

    const toast = await this.toastCtrl.create({
      message: message,
      showCloseButton: true,
      position: 'bottom',
      closeButtonText: `Dismiss`,
      duration: 5000
    });
    await toast.present()
  }
}