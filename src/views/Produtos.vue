<template>
  <v-container>
    <h1>cadastro de produtos</h1>
    <v-form @submit.prevent="adicionarProduto">
      <v-text-field label="Nome do Produto" v-model="nome" required></v-text-field>
      <v-text-field label="Preço" v-model="preco" type="number" required></v-text-field>
      <v-text-field label="Quantidade" v-model="quantidade" type="number" required></v-text-field>
      <v-btn color="primary" type="submit">Adicionar Produto</v-btn>
    </v-form>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const nome = ref('')
const preco = ref('')
const quantidade = ref('')
const produtos = ref<{ nome: string; preco: number; quantidade: number }[]>([])

function carregarProdutos() {
  produtos.value = JSON.parse(localStorage.getItem('') || '[]')
}

function adicionarProduto() {
  const novoProduto = {
    nome: nome.value,
    preco: Number(preco.value),
    quantidade: Number(quantidade.value)
  }
  const lista = JSON.parse(localStorage.getItem('') || '[]')
  lista.push(novoProduto)
  localStorage.setItem('', JSON.stringify(lista))
  carregarProdutos()
  nome.value = ''
  preco.value = ''
  quantidade.value = ''
}

onMounted(carregarProdutos)
</script>

