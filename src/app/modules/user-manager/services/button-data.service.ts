import { CommonResponse } from './../../../shared/interface/common-response.interface';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, catchError, throwError } from 'rxjs';
import { IButtonData } from '../interface/buttons.interface';
import { ButtonsData } from '../models/buttons.model';

@Injectable({
  providedIn: 'root'
})
export class ButtonDataService {

  constructor(private http: HttpClient) { }



  getAllButtonData(): Observable<CommonResponse<IButtonData[]>> {
    return this.http.get<CommonResponse<IButtonData[]>>('/api/button/find-all').pipe(
      catchError(this.handleError)
    );
  }

  createButton(buttonData: IButtonData): Observable<CommonResponse<object>> {
    return this.http.post<CommonResponse<object>>(`/api/button/create`, buttonData).pipe(
      catchError(this.handleError)
    );
  }


  private handleError(error: HttpErrorResponse): Observable<never> {
    return throwError(error);
  }
}
