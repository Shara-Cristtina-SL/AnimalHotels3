export interface Animal {
    id_animal: number;
    nome: string;
    especie: 'Gato' | 'Cachorro'; // Adicionar as espécies
    raca: string;
    idade: number;
    id_tutor: number; // Chave estrangeira para o Tutor
    foto?: string; // Opcional
}