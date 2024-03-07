class Funcionario{
    constructor(nome, idade, salarioBase,){
        this.nome = nome
        this.idade = idade
        this.salarioBase = salarioBase
    }
}

class Professor extends Funcionario{
    constructor(nome,idade, disciplina, horasPorSemana){
        super(nome,idade)
        this.disciplina =disciplina
        this.horasPorSemana = horasPorSemana
        this.valorDaAula = this.valorDaAula
    }

    calcularSalario(valorDaAula){
        this.salario = valorDaAula * this.horasPorSemana
        
        console.log("O salário do professor " + this.nome + ' é R$' + this.salario.toFixed(2))
    }
}

let profProgr = new Professor("Cris", 35, 'Programação', 40)

profProgr.calcularSalario(300)

let profMat = new Professor('Pizzo', 35, 'Matemática', 20)
profMat.calcularSalario(200)