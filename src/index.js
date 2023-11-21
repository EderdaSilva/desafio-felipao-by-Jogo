class heroi{
    constructor(nome, idade, tipoHeroi){
        this.name = nome
        this.age = idade 
        this.warriorType = tipoHeroi       
    }
    attack(){
        console.log(`O ${this.warriorType} atacou usando ${this.attackT} `)
    }
    attackType(){
        switch (this.warriorType){
            case "Mago":
                this.attackT = "Magia"
                break            
            case "Guerreiro":
                this.attackT = "Espada"
                break
            case "Monge":
                this.attackT = "Artes Marciais"
                break
            case "Nija":
                this.attackT = "Shuriken"
                break
        }
    }
}

let heroi1 = new heroi("Eder", 40, "Mago")
//console.log(heroi1)
heroi1.attackType()
heroi1.attack()
