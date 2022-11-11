import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  usuario = new FormGroup({
    nombre: new FormControl(''),
    email: new FormControl(''),
  });

  constructor() { }

  ngOnInit() {
  }
  
  cambiarNombre() {
    this.usuario.controls.nombre.setValue('Ornitorrinco');
  }
}
