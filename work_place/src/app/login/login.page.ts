import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../services/users/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = '';
  password: string = '';

  /**
   * Credenciales de administrador
   * Da acceso a la ventana de admin
   */
  adminUser = 'admin';
  adminPassword = 'admin';

  constructor(private route: Router, public userService: UsersService) { }

  ngOnInit() {
  }

  /**
   * Recogemos los datos de inicio de sesión del usuario.
   */
  login() {
    console.log(this.email);
    console.log(this.password);
    const user = { email: this.email, password: this.password };
    this.userService.login(user).subscribe(data => {
      console.log(data);

    });

    /**
     * Comprobamos el acceso del usuario
     * Si las credenciales son las de admin, nos redirecciona a la ventana de administrador.
     * TODO: Cambiar las credenciales admin.
     */
    if(this.adminUser === this.email && this.adminPassword === this.password) {
      this.goAdminPage();
    } else {
      this.goHome();
    }

  }

  /**
     * Nos redirige a la ventana principal
     */
    goHome() {
      this.route.navigate(['/tabs/tab1']);
    }

    /**
     * Nos redirecciona a la ventana de administración
     */
    goAdminPage() {
      this.route.navigate(['/admin-screen']);
    }

}
