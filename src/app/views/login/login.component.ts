import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsersService } from '../../services/users.service'
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user:User= new User()
  message:string =''

  constructor(private _snackBar: MatSnackBar, private us:UsersService) { }

  ngOnInit() {
  }

  cadastrar(user){
    this.us.cadastrarUser(user)
        .then(data=>{
          if(data){
            this.message = 'Usuario criado com sucesso, redirecionado para o sistema'
            this._snackBar.open(this.message, 'Criação de Usuário', {
              duration: 6000,
            });
          }
        })
  }

}
