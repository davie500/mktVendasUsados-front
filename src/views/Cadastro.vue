<template>
  <v-container>
    <h1>Cadastro</h1>
    <v-form>
      <v-text-field label="Nome" v-model="nome" required></v-text-field>
      <v-text-field label="E-mail" v-model="email" required type="email"></v-text-field>
      <v-text-field label="Senha" v-model="senha" required type="password"></v-text-field>
      <v-btn color="primary" @click="cadastrar">Cadastrar</v-btn>
    </v-form>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const nome = ref('')
const email = ref('')
const senha = ref('')

function cadastrar() {
  const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]')
  usuarios.push({ nome: nome.value, email: email.value, senha: senha.value })
  localStorage.setItem('usuarios', JSON.stringify(usuarios))
  nome.value = ''
  email.value = ''
  senha.value = ''
  alert('Cadastro realizado com sucesso!')
}
</script>
