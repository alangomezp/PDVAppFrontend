import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Result } from 'src/app/models/result';
import { Student } from 'src/app/models/student';
import { HttpClient } from '@angular/common/http';
import { StudentEdit } from 'src/app/models/studentEdited';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
private readonly API_URL = 'https://localhost:7271/api/Student';
  constructor(private httpClient: HttpClient) { }

  public getStudents(): Observable<Student[]>{
    return this.httpClient.get<Student[]>(this.API_URL)
  }

  public addStudent(student: Student): Observable<Result>{
    return this.httpClient.post<Result>(this.API_URL, student)
  }

  public updateStudent(student: StudentEdit, id: string): Observable<Result>{
    return this.httpClient.put<Result>(`${this.API_URL}?id=${id}`, student)
  }

  public deleteStudent(id: string): Observable<Result>{
    return this.httpClient.delete<Result>(`${this.API_URL}?id=${id}`)
  }
}
