// for abstract classes, the purpose is to provide us with a GENERAL structure of class,
// one which we expect to change somewhat.
// you CANNOT instantiate abstract classes, but you CAN inherit them. (AKA extend the class)

// an abstract function is a function that is setup but no logic is added.

// we would simply add the logic to the function when we inherit the class 

abstract class joe {
    abstract myFunction(thing: string): string;
}

//***************************************************************************************************************** */

// static properties/functions allow us to call/use them outside a class W/O having to instantiate the class.

//***************************************************************************************************************** */

// adding private before a constructor makes it so that a class is instantiated ONLY ONCE. (when it's created)

//***************************************************************************************************************** */

// protected and private properties CANNOT be accessed by instances of the class, only inside the class.
// protected however, CAN be accessed through class inheritance (aka extends)