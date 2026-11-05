type Person = {
    nome: string;
    atk: number;
    def: number;
    vida: number;
}

const player: Person = {
    nome: 'Ryan',
    atk: 17,
    def: 8,
    vida: 100
}

console.log(player)

player.atk = 18

console.log(player)