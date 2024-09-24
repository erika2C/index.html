const nomes = ["Arlen", "Jardir", "Ivy", "Snake", "RonaldoFenômeno", "Danielle", "Oráculo"];


export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)
