//TASK 1: Pensiya yaşını hesablamaq
let age = 77
if (age > 65 && age < 125) {
    console.log("pensiya yasina catmisiz")
}

// TASK 2: Üçbucağın növünü müəyyən etmək
let a = 5
let b = 6
let c = 7
if (a === b && b === c) {
    console.log("beraberterefli ucbucaqdir")
} else if (a === b || b === c || a === c) {
    console.log("beraberyanli ucbucaqdir")
} else {
    console.log("muxtelifterefli ucbucaqdir")
}

// TASK 3: Daxil edilən ədədin cüt və ya tək olduğunu tapan proqram
let n1 = 17
if (n1 > 0 && n1 % 2 === 0) {
    console.log("cut eded")
} else if (n1 > 0 && n1 % 2 === 1) {
    console.log("tek eded")
} else {
    console.log("eded teyin olunmayib")
}

// TASK 4: Daxil edilən 1–12 arası ədədə uyğun ay adını yazan proqram
let ay = 12
if (ay > 0 && ay < 13) {
    switch (ay) {
        case (ay = 1):
            console.log("Yanvar")
            break
        case (ay = 2):
            console.log("Fevral")
            break
        case (ay = 3):
            console.log("Mart")
            break
        case (ay = 4):
            console.log("Aprel")
            break
        case (ay = 5):
            console.log("May")
            break
        case (ay = 6):
            console.log("Iyun")
            break
        case (ay = 7):
            console.log("Iyul")
            break
        case (ay = 8):
            console.log("Avqust")
            break
        case (ay = 9):
            console.log("Sentyabr")
            break
        case (ay = 10):
            console.log("Oktyabr")
            break
        case (ay = 11):
            console.log("Noyabr")
            break
        case (ay = 12):
            console.log("Dekabr")
            break
    }
} else {
    console.log("bele bir ay yoxdur")
}

// TASK 5: Daxil edilən ədədin kvadratını tapan proqram
let n2 = 45
if (n2 >= 0) {
    square = n2 * n2
    console.log("Ededin kvadrati:", square)
} else {
    console.log("Teyin olunmayib")
}

// TASK 6: Daxil edilən ədədin 5-ə bölünüb-bölünmədiyini tapan proqram
let n3 = 257;
if (n3 > 0 && n3 % 5 == 0) {
    console.log("eded 5e qaliqsiz bolunur")
} else if (n3 > 0 && n3 % 5 != 0) {
    console.log("qaliq:", n3%5)
} else {
    console.log("ededler musbet olmalidir")
}

// TASK 7: Daxil edilən 2 ədədin hasilinin cüt və ya tək olduğunu göstərən proqram 
let n4 = 17
let n5 = 36
if (n4 > 0 && n5 > 0) {
    product = n4 * n5
    switch (product) {
        case (product % 2 == 0):
            console.log("hasil cut ededdir")
            break
        case (product % 2 == 1):
            console.log("hasil tek ededdir")
            break
    }
} else {
    console.log("ededler musbet olmalidir")
}

// TASK 8: Daxil edilən  ədədin 3-ə bölünüb-bölünmədiyini tapan proqram
let n6=17
if(n6>0 && n6%3==0) {
    console.log("eded 3e qaliqsiz bolunur")
} else if(n6>0 && n6%3!=0) {
    console.log("eded 3e qaliqsiz bolunmur")
} else {
    console.log("eded musbet olmalidir")
}

// TASK 9: Daxil edilən 3 müsbət ədədin ortalamasını tapan proqram
let n7=4
let n8=19
let n9=28
if(n7>0 && n8>0 && n9>0) {
    cem=n7+n8+n9
    edediorta=cem/3
    console.log("ededi orta:", edediorta)
} else {
    console.log("ededler musbet olmalidir")
}

// TASK 10: Tələbənin balına görə qiymətini təyin edən proqram
let bal = 90;
if (bal >= 0 && bal <= 100) {
  switch (true) {
    case (bal <= 59):
      console.log("F");
      break;
    case (bal <= 69):
      console.log("D");
      break;
    case (bal <= 79):
      console.log("C");
      break;
    case (bal <= 89):
      console.log("B");
      break;
    case (bal <= 100):
      console.log("A");
      break;
  }
} else {
  console.log("teyin olunmayib");
}

// TASK 11: Yaşa görə insanın kateqoriyasını müəyyən edən proqram

let age2=27
if(age2>0) {
    switch(true) {
        case(age2<18):
        console.log("yeniyetme");
        break;
        case(age2>=18 && age<64):
        console.log("yetkin");
        break;
        case(age2>=65):
        console.log("yasli");
    }
} else {
    console.log("teyin olunmayib")
}

// TASK 12: Daxil edilən saata uyğun salamlaşma çıxaran proqram
let saat=16
if(saat>=0 && saat<=24) {
    switch(true) {
        case(saat>=0 && saat<=11):
        console.log("Sabahiniz xeyir");
        break;
        case(saat>=12 && saat<=17):
        console.log("Gunortaniz xeyir");
        break;
        case(saat>=18 && saat<=24):
        console.log("Axsaminiz xeyir");
    }
} else {
    console.log("teyin olunmayib")
}

// TASK 13: Daxil edilən x və y ədədlərinə görə nəticə hesablayan proqram
let x=17
let y=15
switch(true) {
    case(x > 0 && y < 0):
    console.log(4*x + 2*y + 4);
    break;
    case(x > 0 && y == 0):
    console.log(2*x - y + 3);
    break;
    case( x < 0 && y > 0):
    console.log(3*x + 4*y + 3);
}

// TASK 14: 1-dən 100-ə qədər ədədlər üçün FizzBuzz proqramı
let n10=99
if(n10>=1 && n10<=100) {
    if(n10%15==0) {
        console.log("FizzBuzz")
    } else if(n10%5==0 && n10%3!=0) {
        console.log("Buzz")
    } else if(n10%3==0 && n10%5!=0) {
        console.log("Fizz")
    }
} else {
    console.log("teyin olunmayib")
}

// TASK 15: Verilmiş sözün palindrom olub-olmadığını yoxlayan proqram
let word="ata"
let is_palindrome = true
const word_length=word.length
for(i=0, j=word_length-1;
    i<j;
    i++, j--
) {
    if (word[i].toLowerCase() !== word[j].toLowerCase()) {
        is_palindrome = false;
        break;
    }

}
if (is_palindrome) {
    console.log(`"${word}" sözü palindromdur.`);
} else {
    console.log(`"${word}" sözü palindrom deyil.`);
}

// TASK 16: Verilmiş ədədin faktorialını tapan proqram
let n11=12
let factorial_result=1
if(n11===0 || n11===1) {
    factorial_result=1
} else if(n11<0) {
    console.log("Teyin olunmayib")
    factorial_result=undefined
} else {
    for(let i=1; i<=n11; i++) {
        factorial_result=factorial_result*i
    }
}
if(factorial_result!=undefined) {
    console.log(n11 + "ededinin faktoriali" + factorial_result)
}

// TASK 17: Verilmiş bir array-dəki ən böyük ədədi tapan proqram
let array1=[1,3,7,11,27,99]
let max=array1[0]
for(let i=0; i<array1.length; i++) {
    if(array1[i]>max) {
        max=array1[i]
    }
} 
console.log(max)

// TASK 18: Verilmiş bir array-dəki ən kiçik ədədi tapan proqram
let array2=[3,5,11,29,37,89]
let min=array2[0]
for(let i=0; i<array2.length; i++) {
    if(array2[i]<min) {
        min=array2[i]
    }
}
console.log(min)

// TASK 19: Verilmiş bir array-in elementlərinin cəmini tapan proqram
let array3=[2,7,14,36,88,106]
let sum=0
for(let i=0; i<array3.length; i++) {
    sum+=array3[i]
} console.log(sum)

// TASK 20: Sözlərdən ibarət bir array-də ən uzun sözü tapan proqram
let array4=["apple", "banana", "cocktail", "chocolate"]
let longestWord = ""
for(let i=0; i<array4.length; i++) {
    if(array4[i].length>longestWord.length) {
        longestWord = array4[i];
    }
}
console.log("en uzun soz:", longestWord);

// TASK 21: Massivdə olmayan sözü massivə əlavə edən proqram
let array5=[12,16,23,37,55,69,84,107]
let array6=[]
let n12=127
let foundDuplicate=false
for(let i=0; i<array5.length; i++) {
    if(array5[i]===n12) {
        foundDuplicate=true;
        break;
    }
}
if (!foundDuplicate) {
    array5.push(n12);
    
    console.log(`eded '${n12}' massive elave edildi`);
    console.log("yenilenmis massiv:", array5);
    
} else {
    console.log(`eded '${n12}' artiq massivde var.`);
    console.log("massiv deyismedi:", array5);
}


// TASK 22: Massivdəki uyğun indeksə ədədi əlavə edən proqram
let array7 = [12, 16, 23, 37, 55, 69, 84, 107];
let n13 = 45; 

let Inserted = false; 

console.log("orijinal massiv:", array7);
console.log(`daxil edilecek eded: ${n13}`);
for (let i = 0; i < array7.length; i++) {
    if (n13 <= array7[i]) {
        array7.splice(i, 0, n13);
        
        console.log("\nnetice");
        console.log(`eded '${n13}' massive indeks [${i}] ile elave edildi.`);
        console.log("yenilenmis massiv:", array7);
        
        Inserted = true; 
        break; 
    }
}

if (!Inserted) {
    array7.push(n13);
    console.log("\nnetice");
    console.log(`eded '${n13}' massivin sonuna elave edildi.`);
    console.log("yenilenmis massiv:", array7);
}

// TASK 23: Massivdən sadə ədədləri yeni bir massivə yığan proqram
let array8 = [7, 12, 17, 21, 29, 30, 41, 51, 60, 73, 91];
let primes = [];
for (let j = 0; j < array8.length; j++) {
    let number = array8[j];
    let isPrime = true;
    if (number <= 1) {
        isPrime = false;
    } else {
        for (let i = 2; i * i <= number; i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }
    }
    if (isPrime) {
        primes.push(number);
    }
}

console.log("orijinal massiv:", array8);
console.log("sade ededlerden ibaret yeni massiv:", primes);
