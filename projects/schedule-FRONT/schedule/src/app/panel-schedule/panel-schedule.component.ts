import { Component, OnInit } from '@angular/core';
import { ScheduleServiceService } from '../schedule-service.service';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'; 


@Component({
  selector: 'app-panel-schedule',
  templateUrl: './panel-schedule.component.html',
  styleUrls: ['./panel-schedule.component.css']
})
export class PanelScheduleComponent implements OnInit {
  title = "Agenda"
  scredules = []
  operation = true
  status = "INSERIR"
  ag = {id: '', nome: '', telefone: ''};
    
  constructor(private scheduleService: ScheduleServiceService) { }

  ngOnInit(): void {
    this.status = "INSERIR";
    this.getAllSchedules();
  }

  getAllSchedules() {
    console.log('ponto 20')
    this.scheduleService.toList().subscribe(response =>
      this.scredules = response as any);
  }
  insertOrUpdate() {
    if(this.status == "INSERIR"){
      this.toAdd();
    }else{
      this.toUpdate();
    }
  }
  toEdit(ag: any) {
    this.ag = {id: ag.id, nome: ag.nome, telefone: ag.telefone};
    this.operation = false;
    this.status = "ALTERAR";
  }
  toUpdate() {
    this.scheduleService.toUpdate(this.ag).subscribe(() => {
    this.ag = {id: '', nome: '', telefone: ''};
    this.getAllSchedules();
    });
  }
  toAdd() {
    console.log('inserir')
    console.log(this.ag)
    this.scheduleService.toAdd(this.ag).subscribe(() => {
      this.ag = {id: '',  nome: '', telefone: ''};
      this.getAllSchedules();
    });
  }
  toDelete(id: number) {
    this.scheduleService.toDelete(id).subscribe(() => {
      this.getAllSchedules();
    });
  }

}
