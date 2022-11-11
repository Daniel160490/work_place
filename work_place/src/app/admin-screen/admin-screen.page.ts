import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-screen',
  templateUrl: './admin-screen.page.html',
  styleUrls: ['./admin-screen.page.scss'],
})
export class AdminScreenPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  goBack() {
    this.route.navigate(['/']);
  }
}
