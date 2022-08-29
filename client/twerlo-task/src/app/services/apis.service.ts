import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Word } from '../modules/practice/models/word';
import { ApiResponse } from '../modules/practice/models/api-response';

@Injectable()
export class ApisService {
  baseUrl = environment.apiEndPoint
  constructor(private http: HttpClient) { }
  getWordsList(limit: number) : Observable<ApiResponse<Word[]>> {
    const params = new HttpParams();
    if(limit) params.append('limit',limit)
    return this.http.get<ApiResponse<Word[]>>(`${this.baseUrl}/words`,{params})
  }
  getRank(score: number) :Observable<ApiResponse<number>> {
    return this.http.post<ApiResponse<number>>(`${this.baseUrl}/rank`,{score})
  }
  getPosTypes() :Observable<ApiResponse<string[]>> {
    return this.http.get<ApiResponse<string[]>>(`${this.baseUrl}/pos`)
  }
}
