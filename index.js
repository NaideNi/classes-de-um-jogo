// Definindo a classe Heroi
class Heroi {
    // Construtor da classe que inicializa as propriedades do herói
    constructor(nome, idade, tipo) {
        this.nome = nome;  // Nome do herói
        this.idade = idade; // Idade do herói
        this.tipo = tipo;   // Tipo do herói (ex: guerreiro, mago, etc.)
    }

    // Método para simular o ataque do herói
    atacar() {
        let ataque;

        // Verifica o tipo do herói e define o tipo de ataque correspondente
        switch (this.tipo.toLowerCase()) {
            case 'mago':
                ataque = 'magia'; // Mago usa magia
                break;
            case 'guerreiro':
                ataque = 'espada'; // Guerreiro usa espada
                break;
            case 'monge':
                ataque = 'artes marciais'; // Monge usa artes marciais
                break;
            case 'ninja':
                ataque = 'shuriken'; // Ninja usa shuriken
                break;
            default:
                ataque = 'ataque desconhecido'; // Para tipos não especificados
        }
        
        // Exibe a mensagem de ataque formatada
        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

// Exemplo de uso da classe Heroi

// Criando uma instância de Heroi do tipo Guerreiro e chamando o método atacar
const heroi1 = new Heroi("Aragon", 30, "Guerreiro");
heroi1.atacar(); // Saída: o Guerreiro atacou usando espada

// Criando uma instância de Heroi do tipo Mago e chamando o método atacar
const heroi2 = new Heroi("Merlin", 40, "Mago");
heroi2.atacar(); // Saída: o Mago atacou usando magia

// Criando uma instância de Heroi do tipo Monge e chamando o método atacar
const heroi3 = new Heroi("Li", 25, "Monge");
heroi3.atacar(); // Saída: o Monge atacou usando artes marciais

// Criando uma instância de Heroi do tipo Ninja e chamando o método atacar
const heroi4 = new Heroi("Shadow", 22, "Ninja");
heroi4.atacar(); // Saída: o Ninja atacou usando shuriken