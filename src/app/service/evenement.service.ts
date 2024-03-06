import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { Evenement } from '../models/evenement';
import { EvenementDtoUp } from '../models/evenementDtoUp';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class evenementService {

  private evenementsUrl = 'Evenements'; // URL to AzureFunction

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  /** GET evenements from the server*/
  getevenements(): Observable<Evenement[]> {
    return this.http.get<Evenement[]>(`${environment.apiUrl}${this.evenementsUrl}`);
  }

  /** GET evenement by ID from the server */
  getevenementById(id: number): Observable<Evenement> {
    const url = `${environment.apiUrl}${this.evenementsUrl}/${id}`;
    return this.http.get<Evenement>(url);
  }

  /** POST: add a new evenement to the server*/
  addevenement(name: string, description: string, date: string, place: string ): Observable<EvenementDtoUp> {
    return this.http.post<EvenementDtoUp>(
      `${environment.apiUrl}${this.evenementsUrl}`,
      this.evenementDto(name, description, date, place),
      this.httpOptions
    );
  }

  /** DELETE: delete de evenement*/
  deleteevenement(id: number): Observable<Evenement> {
    const url = `${environment.apiUrl}${this.evenementsUrl}/${id}`;
    return this.http.delete<Evenement>(url, this.httpOptions);
  }

  /** PUT: update evenement on the server */
  updateevenement(evenement: Evenement): Observable<Evenement> {
    const url = `${environment.apiUrl}${this.evenementsUrl}`;
    return this.http.put<Evenement>(url, evenement, this.httpOptions).pipe(
      catchError((error) => {
        console.error('Error updating evenement:', error);
        throw error;
      })
    );
  }

  /** createDto */
  evenementDto(name: string, descr: string, date: string, place: string): EvenementDtoUp {
    return {
      Name: name,
      Description: descr,
      Date: date,
      Location: place,
    };
  }
}
