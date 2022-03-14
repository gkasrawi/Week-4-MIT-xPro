switch-//The switch statement evaluates an expression, matching the expression's value to a case clause, 
//and executes statements associated with that case, as well as statements in case s that follow the matching case.
function isDelicous(food) {
    switch (food) {
        case 'burger';
        console.log('Mmmmmmmmm..' + food + 'is delicous');
        break;
        case 'green beans':
         console.log(food + 'is ok and edible');
        break;
        default:
         console.log('yuck ' + food + ' is awful');
        break;
    }
}

isDelicous( 'burger');
iaDelicous('green beans');
isDelicous('tofu');