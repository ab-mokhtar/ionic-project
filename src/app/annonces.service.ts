import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Action } from 'rxjs/internal/scheduler/Action';
@Injectable({
  providedIn: 'root'
})
export class AnnoncesService {

  constructor(private http: HttpClient) {}

  getAllAnnonces():Observable<any> {
    return this.http.get('https://ionicproject-57569-default-rtdb.firebaseio.com/Annonces.json');
  }

 
  deleteAnnonces(idAnnonce:any) {
    return this.http.delete(
      `https://ionicproject-57569-default-rtdb.firebaseio.com/Annonces/${idAnnonce}.json`
    );
  }

  addAnnonces(annonce:any) {
    return this.http.post(
      'https://ionicproject-57569-default-rtdb.firebaseio.com/Annonces.json',
      annonce
    );
  }
}
