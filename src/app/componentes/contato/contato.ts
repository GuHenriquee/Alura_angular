export interface Contato {
    id: number
    nome: string
    telefone: string
    email?: string
    aniversario?: string
    redes?: string
    observacoes?: string
    avatar: string | ArrayBuffer /*Lidar com dados binarios */
}

