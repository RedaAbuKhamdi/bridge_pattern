function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
class Ability{

    name:string;
    description:string;

    constructor(name:string, description:string) {

        this.name = name
        this.description = description

    }

}
// Класс Class соответствует реализации в терменалогии Паттерна
abstract class Class {

    abilities:Ability[];
    resource:number;

    constructor(availableAbilities:Ability[], startingResource:number) {

        this.abilities = availableAbilities
        this.resource = startingResource

    }

    show_abilities(){

        console.log("Available abilities: ")
        for (let ability in this.abilities){

            console.log(this.abilities[ability])

        }

    }

    abstract use_an_ability();
    abstract get_resource_type();

}

class Wizard extends Class {


    constructor(startingResource:number) {
        let abilities:Ability[] = [
            new Ability("Fireball", "Classic spell in a wizard's arsenal"),
            new Ability("Silent Image", "Create a visual only illusion of an object")
        ]
        super(abilities, startingResource);
    }

    use_an_ability(){

        console.log("Choosing an ability....")
        this.show_abilities()
        let resp:number = getRandomIntInclusive(1,3)
        if (this.resource < 20){

            this.resource+=20
            console.log("Unfortunately your character does not have enough mana, so he calmly meditated to restore 20 mana and now has "+this.resource)

        }else if (resp == 1){

            this.resource-=10
            console.log(" An orange ball of fire escapes you character's palm, you now have "+this.resource+" mana");

        }else if (resp == 2){

            this.resource-=10
            console.log(" The onlookers watch in awe you make an illusory object appear out of thin air. You now have "+this.resource+" mana");

        }else{

            this.resource+=20;
            console.log("Your character chose to calmly meditated and restore 20 mana. You now have "+this.resource);


        }

    }

    get_resource_type() {

        return "mana"

    }


}

class Fighter extends Class {


    constructor(startingResource:number) {
        let abilities:Ability[] = [
            new Ability("Dash", "Make a quick dash forward"),
            new Ability("Strike", "A mighty strike with your weapon")
        ]
        super(abilities, startingResource);
    }

    use_an_ability(){

        this.show_abilities()
        console.log("Choosing an ability...")
        let resp = getRandomIntInclusive(1,3);

        if (this.resource < 20){

            this.resource+=20
            console.log("Unfortunately your character does not have enough stamina, he took a deep breath to restore some stamina and now has "+this.resource)

        }else if (resp == 1){

            this.resource-=10
            console.log(" You make a quick dash forward, you now have "+this.resource+" stamina");

        }else if (resp == 2){

            this.resource-=10
            console.log(" You swing your mighty weapon, making a swoosh sound before hitting the target. You now have "+this.resource+" stamina");

        }else{

            this.resource+=20;
            console.log("Your character chose to take a few deep breaths and restore 20 stamina. You now have "+this.resource);


        }

    }

    get_resource_type() {

        return "stamina"

    }

}

// Класс Character соответствует абстракции в терменологии паттерна
abstract class Character {

    class: Class;

    protected constructor(characterClass: Class) {

        this.class = characterClass

    }

    abstract act();

}

class Human extends Character{

    constructor(characterClass:Class) {
        super(characterClass);
    }

    act(){

        console.log("Humans have the tireless ability, allowind them to restore 5 "+this.class.get_resource_type()+" at the end of turn")
        this.class.use_an_ability()
        this.class.resource+=5

    }

}

class Halfling extends Character{

    constructor(characterClass:Class) {
        super(characterClass);
    }

    act(){

        console.log("Halflings are quick, allowing them to take 2 actions each turn, but at the cost of losing 2 "+this.class.get_resource_type()+" at the end of turn")
        this.class.use_an_ability()
        this.class.resource -= 2;
        console.log(" use second action ")
        this.class.use_an_ability()

    }

}


// Код для демонстрации работы

let humanWizard =  new Human(new Wizard(500));
let halflingFighter = new Halfling(new Fighter(400));

for (let i:number = 0; i < 10; i++){

    let choice = getRandomIntInclusive(1,2)
    if (choice == 1){

        console.log("This turn Halfling fighter will act")
        halflingFighter.act()

    }else if (choice == 2) {

        console.log("This turn Human wizard will act")
        humanWizard.act()
    }

}

