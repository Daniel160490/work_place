import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hours-screen',
  templateUrl: './hours-screen.page.html',
  styleUrls: ['./hours-screen.page.scss'],
})
export class HoursScreenPage implements OnInit {

  fechaCorta: string = new Date().toISOString();
  fecha: string = this.fechaCorta;
  minFecha: string = (new Date().getFullYear() - 5).toString();
  maxFecha: string = (new Date().getFullYear() + 5).toString();

  public event = {
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }
  constructor() { }

  ngOnInit() {
  }

}
