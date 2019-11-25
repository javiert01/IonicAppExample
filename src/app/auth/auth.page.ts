import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  userOrEmail = "";
  password = "";


  isLoading = false;
  constructor(private authService: AuthService, private router: Router,
    private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }

  onLogin() {
    this.isLoading = true;
    this.authService.login();
    this.loadingCtrl.create({
      keyboardClose: true,
      message: 'Logging in...'
    }).then(loadingEl => {
      loadingEl.present();
      setTimeout(() => {
        this.isLoading = false;
        this.loadingCtrl.dismiss();
        this.router.navigateByUrl('/places/tabs/discover')
      }, 1500);
    });
    // this.router.navigateByUrl('/places/tabs/discover');
  }

  onLoginwithService(){
    // console.log(this.user);
    // console.log(this.password);
    this.authService.loginWithService(this.userOrEmail, this.password).subscribe(
      token => {console.log(token)}
    );

  }


}
