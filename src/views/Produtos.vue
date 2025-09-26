<template>
  <v-container>
    <h1>Produtos</h1>
    <v-form @submit.prevent="adicionarProduto">
      <v-text-field label="Nome do Produto" v-model="nome" required></v-text-field>
      <v-text-field label="Preço" v-model="preco" type="number" required></v-text-field>
      <v-text-field label="Quantidade" v-model="quantidade" type="number" required></v-text-field>
      <v-btn color="primary" type="submit">Adicionar Produto</v-btn>
    </v-form>
    <v-divider class="my-4"></v-divider>
    <div v-if="produtos.length">
      <h2>Lista de Produtos</h2>
      <v-list>
        <v-list-item v-for="(produto, idx) in produtos" :key="idx">
          <v-list-item-content>
            <v-list-item-title>{{ produto.nome }}</v-list-item-title>
            <v-list-item-subtitle>Preço: {{ produto.preco }} | Quantidade: {{ produto.quantidade }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const nome = ref('')
const preco = ref('')
const quantidade = ref('')
const produtos = ref<{ nome: string; preco: number; quantidade: number }[]>([])

function carregarProdutos() {
  produtos.value = JSON.parse(localStorage.getItem('produtos') || '[]')
}

function adicionarProduto() {
  const novoProduto = {
    nome: nome.value,
    preco: Number(preco.value),
    quantidade: Number(quantidade.value)
  }
  const lista = JSON.parse(localStorage.getItem('produtos') || '[]')
  lista.push(novoProduto)
  localStorage.setItem('produtos', JSON.stringify(lista))
  carregarProdutos()
  nome.value = ''
  preco.value = ''
  quantidade.value = ''
}

onMounted(carregarProdutos)
</script>
onMounted(() => {
  loadProdutos()
})

async function adicionarProduto() {
  try {
    error.value = ''
    saving.value = true
    await produtoService.salvar(produto.value)
    produto.value = { nome: '', preco: 0, quantidade: 0 }
    await loadProdutos()
  } catch (e) {
    error.value = 'Erro ao salvar produto.'
  } finally {
    saving.value = false
  }
}
</script>
