import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  constructor() {}

  isLogged: Boolean = false;

  users = [
    {
      email: 'admin@gmail.com',
      password: 'admin',
    },
    {
      email: 'hayyan@gmail.com',
      password: 'hayyan',
    },
    {
      email: 'me@gmail.com',
      password: 'hayyan',
    },
  ];

  login(email: string, password: string) {
    let user = this.users.find(
      (user) => user.email === email && user.password === password
    );

    if (user === undefined) this.isLogged = false;
    else this.isLogged = true;
    return user;
  }
}
