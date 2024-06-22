import { Injectable } from '@angular/core';
import { Produto } from '../models/produto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { API_CONFIG } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  apiUrl = API_CONFIG.baseUrl +"/api/produto";

  constructor(private http: HttpClient) { }

  cadastrarProduto(produto: Produto): Observable<Produto[]> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Produto[]>(`${this.apiUrl}`, produto, { headers, responseType: 'text' as 'json' }).pipe(
      map((obj) => obj)
    );
  }

  getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${this.apiUrl}`).pipe(
      map((obj) => obj)
    );
  }

  getprodutoById(id: number): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${this.apiUrl}/${id}`);
  }
}
