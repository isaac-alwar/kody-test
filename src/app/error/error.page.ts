import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.page.html',
  styleUrls: ['./error.page.scss'],
})
export class ErrorPage implements OnInit {

  constructor(private router: Router) { }

      refresh(ev) {
      setTimeout(() => {
        ev.detail.complete();
      }, 1000);
  }

  ngOnInit() {
  }

  retry(){
    this.router.navigate(['login']);
     }

}
