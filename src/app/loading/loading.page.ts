import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  constructor(private router: Router, private loadingController: LoadingController) { }

  ngOnInit(): void {
    const x = this.authenticator().valueOf();
    // For Debug
    console.log(this.authenticator().toString() + '!!!!!!!!');

    if (x === false) {
      this.router.navigate(['error']);
        } else {
          setTimeout(() => this.handleLogin(), 2000);
          // this.handleLogin();
      }
    }

  async handleLogin() {
    const loader = await this.loadingController.create({
      message: 'Please wait...',
      // duration: 3000  >> shows data page behind the loading screen
    });
    await loader.present().then(() => {
      this.goToDone();
      loader.dismiss();
    });
  }

  authenticator(): boolean {
    return (Math.random() >= 0.5 ? false : true);
    // Math.floor(Math.random() * 2) === 0 ? false : true;
      }

  goToDone(){
    this.router.navigate(['done']);
     }

}
