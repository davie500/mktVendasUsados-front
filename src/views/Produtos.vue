<template>
  <v-container>
    <h2>Cadastro de Produtos</h2>

    <v-form @submit.prevent="adicionarProduto">
      <v-text-field v-model="produto.nome" label="Nome" required />
      <v-text-field v-model="produto.preco" label="Preço" type="number" required />
      <v-text-field v-model="produto.quantidade" label="Quantidade" type="number" required />
      <v-btn type="submit" color="primary" :loading="saving">Adicionar</v-btn>
    </v-form>

    <v-divider class="my-4" />
    <v-table>
      <thead>
        <tr>
          <th class="font-weight-bold">Nome</th>
          <th class="font-weight-bold">Preço</th>
          <th class="font-weight-bold">Quantidade</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(p, i) in produtos" :key="i">
          <td>{{ p.nome }}</td>
          <td>{{ p.preco }}</td>
          <td>{{ p.quantidade }}</td>
        </tr>
      </tbody>
    </v-table>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import produtoService, { Produto } from '../services/produtoService'

const produtos = ref<Produto[]>([])
const produto = ref<Produto>({ nome: '', preco: 0, quantidade: 0 })
const loading = ref(false)
const saving = ref(false)
const error = ref('')

async function loadProdutos() {
  try {
    error.value = ''
    loading.value = true
    produtos.value = await produtoService.listar()
  } catch (e) {
    error.value = 'Erro ao carregar produtos.'
  } finally {
    loading.value = false
  }
}

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
