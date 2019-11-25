import { Injectable } from "@angular/core";
import { HOST } from "../_shared/var.constant";
import { HttpClient } from "@angular/common/http";
import { UsuarioLogin } from "../_models/usuarioLogin";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  url: string = `${HOST}/usuario/login`;

  private _userIsAuthenticated = false;

  get userIsAuthenticated() {
    return this._userIsAuthenticated;
  }

  constructor(private http: HttpClient) {}

  login() {
    this._userIsAuthenticated = true;
  }

  logout() {
    this._userIsAuthenticated = false;
  }

  loginWithService(usernameOrEmail, password) {
    let usuario = new UsuarioLogin();
    usuario.usernameOrEmail = usernameOrEmail;
    usuario.password = password;
    return this.http.post(this.url, usuario);
  }
}
