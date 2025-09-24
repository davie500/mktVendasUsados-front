import axios from 'axios'

const api = axios.create({
  baseURL: 'https://localhost:7294/api'
})

export interface Produto {
  id?: number
  nome: string
  preco: number
  quantidade: number
}

export default {
  async listar(): Promise<Produto[]> {
    const response = await api.get('/produtos')
    return response.data
  },
  async salvar(produto: Produto): Promise<void> {
    await api.post('/produtos', produto)
  }
}
