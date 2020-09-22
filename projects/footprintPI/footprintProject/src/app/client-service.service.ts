import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ClientServiceService implements OnInit {

  // constructor() { }

  apiUrl = "http://localhost:8080/registerclient"
  
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  } 

  // toList(){
  //   return this.httpClient.get(this.apiUrl);
  // }

  toAdd(client: any) {
    return this.httpClient.post(this.apiUrl, client);
  }

  // toDelete(id: number) {
  //   return this.httpClient.delete(this.apiUrl + '/' + id);
  // }

  // toUpdate(agenda: any) {
  //   return this.httpClient.put(this.apiUrl+ '/' + agenda.id, agenda);
  // }

}
