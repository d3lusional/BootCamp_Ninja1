function Ninja(name) {
    this.name =name;
    this.health = 100;
    const speed = 3;
    const strenght = 3;
    this.sayName = function () {
        console.log (this.name);
    }
    this.showStats = function () { 
        console.log ("Name: " + this.name + ", " + "Health: " + this.health + ", Speed: " + strenght )
    }
    this.drinkSake = function () {
        this.health += 10 ;

    }

    this.punch = function (ninja) {
        ninja.health -= 5; 
        //console.log(this.name + ' was punched by' + ninja.name + ' and lost 5 health')

    }
}
const ninja1 = new Ninja("Hyabusa");
const blueNinja = new Ninja("Goemon");
blueNinja.showStats();
const redNinja = new Ninja("Bill Gates");
redNinja.punch(blueNinja);
// ninja1.sayName();
ninja1.showStats();
blueNinja.showStats();
redNinja.showStats();
//console.log(blueNinja);
