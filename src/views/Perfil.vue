<template>
  <v-container>
    <h1>Perfil do Usuário</h1>
    <p>Bem-vindo à sua página de perfil.</p>
    <div style="display: flex; gap: 12px; margin-top: 24px;">
      <router-link to="/login" style="text-decoration: none;">
        <v-btn color="primary">Login</v-btn>
      </router-link>
      <router-link to="/cadastro" style="text-decoration: none;">
        <v-btn color="primary">Cadastro</v-btn>
      </router-link>
    </div>
  </v-container>
</template>
