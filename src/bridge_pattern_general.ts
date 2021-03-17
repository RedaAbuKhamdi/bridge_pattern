// General Case

// Слой реализации
abstract class Implementation{

    // Какие-то поля
    state:number = 0;

    constructor(currentState:number) {

        this.state = currentState

    }

    // Методы общие для всех конкретизаций
    get_current_state(){

        console.log(" Текущее состояние "+this.state)

    }

    // Методы которые различаются в каждой конкретизации
    abstract change_state();



}

// Конкретизации Имплементации
class ImplementationConcretizationA extends Implementation {

    constructor(currentState:number) {
        super(currentState);
    }

    change_state() {

        this.state++;
        this.get_current_state()

    }


}

class ImplementationConcretizationB extends Implementation {

    constructor(currentState:number) {
        super(currentState);
    }

    change_state() {

        this.state--;
        this.get_current_state()

    }


}


// Слой абстракции

abstract class Abstraction {

    // Инстанция реализации
    implementation:Implementation;

    constructor(particularImplementation:Implementation) {

        this.implementation = particularImplementation;

    }

    // Делегация работы реализации
    change_state(){

        this.implementation.change_state()

    }

    abstract abstraction_specific_action();

}

// Конкретизация абстракции
class AbstractionExtentionA extends Abstraction {

    constructor(particularImplementation:Implementation) {

        super(particularImplementation);

    }

    abstraction_specific_action() {

        console.log(" Действия конкретизации абстракции A")

    }


}

class AbstractionExtentionB extends Abstraction {

    constructor(particularImplementation:Implementation) {

        super(particularImplementation);

    }

    abstraction_specific_action() {

        console.log(" Действия конкретизации абстракции B")

    }


}

let version_a:AbstractionExtentionA = new AbstractionExtentionA(new ImplementationConcretizationB(0))
let version_b:AbstractionExtentionA = new AbstractionExtentionB(new ImplementationConcretizationA(0))

version_a.change_state()
version_a.abstraction_specific_action()

version_b.change_state()
version_b.abstraction_specific_action()
