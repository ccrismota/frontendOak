import { Component } from '@angular/core';
import { ProdutoService } from '../services/produto.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Produto } from '../models/produto';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css']
})
export class ProdutoListComponent {

  produtos$!: Produto[];

  constructor(
    private produtoService: ProdutoService,
    private router: Router) { }

  ngOnInit(): void {
    this.listarProdutos();
  }


  listarProdutos() {
    this.produtoService.getProdutos().subscribe(
      (produtos) => {
        produtos.sort((a, b) => a.valorProduto - b.valorProduto);
        this.produtos$ = produtos;
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
