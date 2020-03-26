class Pessoa{
    constructor(nome, altura, sexo){
        this.nome = nome;
        this._altura = altura;
        this.sexo = sexo;

    }
    getAltura(){
        return this.altura;
    }
    get altura(){
        return this._altura;
    }
}
//criando um objeto da classe Pessoa
const pessoa = new Pessoa('luiz', 1.88, 'm');
console.log(pessoa);
console.log(pessoa.altura);