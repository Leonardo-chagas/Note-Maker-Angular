import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Notes } from '../Notes';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private apiUrl = "http://localhost:5000/notes";

  constructor(private http:HttpClient) { }

  GetNotes(): Observable<Notes[]>{
    return this.http.get<Notes[]>(this.apiUrl);
  }

  DeleteNote(note: Notes): Observable<Notes>{
    const url = `${this.apiUrl}/${note.id}`;
    return this.http.delete<Notes>(url);
  }

  UpdateNote(note: Notes): Observable<Notes>{
    const url = `${this.apiUrl}/${note.id}`;
    return this.http.put<Notes>(url, note, httpOptions);
  }

  AddNote(note: Notes): Observable<Notes>{
    return this.http.post<Notes>(this.apiUrl, note, httpOptions);
  }
}
