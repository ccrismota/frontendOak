import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Produto } from '../models/produto';
import { ProdutoService } from '../services/produto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  produtoForm: FormGroup


  constructor(
    private fb: FormBuilder,
    private produtoService: ProdutoService,
    private router: Router) {

    this.produtoForm = this.fb.group({
      nomeProduto: ['', Validators.required],
      descricaoProduto: ['', Validators.required],
      valorProduto: ['', Validators.required],
      disponivelParaVenda: ['']
    })
  }

  ngOnInit(): void {
   
  }

  onSubmit() {
    const produto: Produto = {
      nomeProduto: this.produtoForm.value.nomeProduto,
      descricaoProduto: this.produtoForm.value.descricaoProduto,
      valorProduto: this.produtoForm.value.valorProduto,
      disponivelParaVenda: this.produtoForm.value.disponivelParaVenda
    }
    this.produtoService.cadastrarProduto(produto).subscribe(
      (produto) => {
        console.log(produto);
        alert('Produto cadastrado com sucesso!');
        this.produtoForm.reset();
        this.router.navigate(['/produto-list']);
      },
      (error) => {
        console.error(error);
        alert('Erro ao cadastrar produto!');
      }
    );
  }

}
