<template>
  <v-container>
    <h1>Bem-vindo à Tech Store</h1>
    <p>Aqui vc encontra os melhores produtos Tec</p>
  </v-container>
  <v-container>
    separados por idj
    <div style="display: flex; gap: 12px; flex-wrap: wrap; margin-top: 8px;">
      <router-link
        v-for="i in 10"
        :key="i"
        :to="`/produto/${i}`"
        style="text-decoration: none; color: inherit;"
      >
        <div style="background: #eee; border: 1px solid #ccc; padding: 48px; border-radius: 4px; width: fit-content; min-width: 180px; min-height: 48px;">
          produto
        </div>
      </router-link>
    </div>
  </v-container>
</template>
