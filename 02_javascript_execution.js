/*

// step 1: global execution context banaya jata hai
let v1 = 10;
let v2 = 5;

// step 2: memory allocation hota hai
function AddNum(n1, n2) {
  let total = n1 + n2;
  return total;
}

// step 3: execution phase
let result1 = AddNum(v1, v2); // 15
let result2 = AddNum(10, 2); // 12

## global execution context (GEC)--------------------------

jab koi JavaScript program chalta hai, to pahla kadam ek global execution context (GEC) banana hota hai. GEC ek object hai jismein program ke nirman ke samay uplabdh sabhi chijen hoti hain, jismein vaishvik char aur fonction shamil hain.

GEC ko banane ke liye, JavaScript engine nimnalikhit kadam uthata hai:

1. yah ek nai object banata hai.
2. yah object ko window object se jodata hai.
3. yah object mein vaishvik char aur fonction jodta hai.

window object ek vishesh object hai jo browser window ka pratinidhitv karta hai. yah kai visheshtaon aur vidhiyon ko pradan karta hai jinka upyog program browser window ke sath batchit karne ke liye kar sakta hai.

##  memory allocation ----------------------------- 

dusra kadam program ke sabhi char aur fonction ke liye memory allocate karna hai. ismein vaishvik char, fonction ke perameter aur fonction ke bhitar ghoshit koi bhi char shamil hain.

memory allocate karne ke liye, JavaScript engine nimnalikhit kadam uthata hai:

1. yah char ya fonction ke liye memory ke ek block ka anurodh karta hai.
2. yah memory block ko char ya fonction ko assign karta hai.

## execution phase ----------------------------------------

ant mein, execution phase shuru hota hai. is charan ke dauran, program ke nirdeshon ko ek-ek karke nishpadit kiya jata hai.

nirdeshon ko nishpadit karne ke liye, JavaScript engine nimnalikhit kadam uthata hai:

1. yah nirdesh ke prakar ki pahchan karta hai.
2. yah nirdesh ke prakar ke aadhar per uchit karvayi karta hai.
nirdeshon ke kuchh samanya prakaron mein shamil hain:

assignment nirdesh: ye nirdesh ek char ko ek man assign karte hain.
ganitiya sanchalan nirdesh: ye nirdesh do ya do se adhik manon per ganitiya sanchalan karte hain.
tulnatmak sanchalan nirdesh: ye nirdesh do manon ki tulna karte hain.
shakha nirdesh: ye nirdesh program ke nishpadan ke pravah ko niyantrit karte hain.
fonction call nirdesh: ye nirdesh fonction ko call karte hain.


## AddNum() fonction-----------------------------------------

AddNum() fonction do sankhyaon ko jodta hai aur parinaam lauta deta hai. fonction ke do perameter hain, n1 aur n2, jo jodne ke liye sankhyaen hain. fonction ek char, total bhi ghoshit karta hai, jo do sankhyaon ka yog rakhta hai. ant mein, fonction total char ko lauta deta hai.

AddNum() fonction ko nishpadit karne ke liye, JavaScript engine nimnalikhit kadam uthata hai:

1. yah n1 aur n2 perameter ke liye memory allocate karta hai.
2. yah n1 aur n2 perameter ko man assign karta hai.
3. yah total char ke liye memory allocate karta hai.
4. yah total char ko n1 aur n2 perameter ke yog ke liye assign karta hai.
5. yah total char ko lauta deta hai.

## result1 aur result2 char -------------------------------------

result1 aur result2 char AddNum() fonction ke call ke parinaam ko rakhte hain. result1 char 15 rakhta hai, jo 10 aur 5 ka yog hai. result2 char 12 rakhta hai, jo 10 aur 2 ka yog hai.

result1 aur result2 char ko nishpadit karne ke liye, JavaScript engine nimnalikhit kadam uthata hai:

1. yah result1 aur result2 char ke liye memory allocate karta hai.
2. yah AddNum() fonction ko n1 aur n2 perameter ke man ke sath call karta hai.
3. yah AddNum() fonction dwara lautaye gaye man ko result1 char ko assign karta hai.
4. yah AddNum() fonction dwara lautaye gaye man ko result2 char ko assign karta hai.
mujhe ummid hai ki yah vivaran madadgar hai. yadi aapke koi anya prashn hain to mujhe bataen.



*/

/* 

call stack lifo concespt use krta h  -> last in first out

*/