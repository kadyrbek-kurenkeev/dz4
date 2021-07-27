// задание 1

    var numbers = [2,5,7];
    var square = numbers.map(function(num){
        return num * 2;
    });

console.log(square);

// заданик 2

    var arr = [2,3,5,6,8,10];

    var result = arr.filter(
        function(even){
            return even % 2 == 0;
        }
    );

    console.log(result);

    // задание 3

    let summa = arr.reduce(function(sum,elem){
        if(elem >= 0){
            return sum + elem;
        }else{
            return sum;
        }
    });

    console.log(summa);

    // задание 4
    var car = ["honda","mazda","lexus","toyota","volkswagen","bmw",];

    let three = car.map(car => car.substr(0,3));

    console.log(three);

    // задание 5

    let endA = car.filter(i =>/a$/.exec(i));

    console.log(endA);

    // задание 6
     
    let longest = car .reduce(function(a,b){
        return a.length > b.length ? a:b
    });

    console.log(longest);

