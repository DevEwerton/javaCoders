import { Component, OnInit } from '@angular/core';

import { ClientServiceService } from '../client-service.service';


@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.css']
})

export class RegisterClientComponent implements OnInit {
  title = "Agenda"
  scredules = []
  operation = true
  status = "INSERIR"
  client = {id: '', name: '', surname: '', mail: '',password: '' };
  name = "Ewerton";

  // string registerClient = {id: '', }

  constructor(private clientService: ClientServiceService) { }

  // ngOnInit(): void {
  //   this.status = "INSERIR";
  //   this.getAllSchedules();
  // }

  // constructor() { }

  ngOnInit(): void {
  }

  registerClient(item){
    console.log('Será registrado o: ', item.value);
  }

  toAdd(name, surname, mail, password) {
    this.client = {
      id: '', 
      name: name.value,
      surname: surname.value,
      mail: mail.value,
      password: password.value
    };
   
    
    this.clientService.toAdd(this.client).subscribe(() => {
      this.client = {id: '', name: '', surname: '', mail: '',password: '' };
      // this.getAllSchedules();
    });
  }

  // getAllSchedules() {
  //   console.log('ponto 20')
  //   this.scheduleService.toList().subscribe(response =>
  //     this.scredules = response as any);
  // }
  // insertOrUpdate() {
  //   if(this.status == "INSERIR"){
  //     this.toAdd();
  //   }else{
  //     this.toUpdate();
  //   }
  // }
  // toEditclient: any) {
  //   this.ag = {id: ag.id, nome: ag.nome, telefone: ag.telefone};
  //   this.operation = false;
  //   this.status = "ALTERAR";
  // }
  // toUpdate() {
  //   this.scheduleService.toUpdate(this.ag).subscribe(() => {
  //   this.ag = {id: '', nome: '', telefone: ''};
  //   this.getAllSchedules();
  //   });
  // }

  // toDelete(id: number) {
  //   this.scheduleService.toDelete(id).subscribe(() => {
  //     this.getAllSchedules();
  //   });
  // }

}
