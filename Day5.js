//  Diziler

// Boş dizi tanımlama
const arr = Array()
//or
const arr2 = new Array()
//or
const arr3 = []     //  Tavsiye edilen tanımlam türü


// Başlangıç değerine-değerlerine sahip bir dizi tanımlama
var numbers = [0, 1, 5, 55]

console.log(numbers) //diziyi yazar
console.log(numbers.length) //dizinin uzunluğunu yazar


// Dizi farklı türlerde elemanlar alabilir
const a = [true, 0, 1, "Hello", { id: 1, Name: Ali, Class: "11/A" }, 2]


//Split kullanarak dizi oluşturmak
let js = "JavaScript";
const charsInJavaScript = js.split('')

// index kullanarak dizi elemanlarına ulaşmak


var numbers = [0, 3.14, 9.81, 37, 98.6, 100] // sayı dizisi
console.log(numbers.length) // => dizinin uzunluğunu bilebiliriz. O da 6'dır
console.log(numbers) // -> [0, 3.14, 9.81, 37, 98.6, 100]
console.log(numbers[0]) // -> 0
console.log(numbers[5]) // -> 100
let lastIndex = numbers.length - 1;
console.log(numbers[lastIndex]) // -> 100


//Array:Bir dizi yaratmak için kullanılır.
const eightEmptyValues = Array(8) // sekiz tane boş değer yaratır
console.log(eightEmptyValues) // [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]

// fill: Bütün dizi elemanlarını statik değerle doldurur.
const eightXvalues = Array(8).fill('X') // 'X'değerine sahip 8 tane eleman oluşuturur.
console.log(eightXvalues) // ['X', 'X','X','X','X','X','X','X']

// concat: İki diziyi birbiri ile birleştirir.
const firstList = [1, 2, 3]
const secondList = [4, 5, 6]
const thirdList = firstList.concat(secondList)
console.log(thirdList) // [1, 2, 3, 4, 5, 6]

//Length:Dizi uzunluğunu bildirir.
const numbers = [1, 2, 3, 4, 5]
console.log(numbers.length) // -> Dizinin uzunluğu 5'tir

// indexOf: O elemanın dizide olup olmadığını kontrol eder.Eğer o eleman dizide mevcutsa index numarasını, mevcut değilse -1 döner.
const numbers = [1, 2, 3, 4, 5]
console.log(numbers.indexOf(5)) // -> 4
console.log(numbers.indexOf(0)) // -> -1
console.log(numbers.indexOf(1)) // -> 0
console.log(numbers.indexOf(6)) // -> -1

// Listedeki elemanları kontrol edin.
// dizide bir banana olup olmadığını kontrol edelim
const fruits = ['muz', 'portakal', 'mango', 'limon']
let index = fruits.indexOf('mango') // 2
index === -1
    ? console.log('Bu meyve dizide yok')
    : console.log('Bu meyve dizide var')


// lastIndexOf: Dizideki son elemanın pozisyonunu verir. Eğer mevcutsa o elemanın index numarasını döner, mevcut değilse -1 döner.
const numbers = [1, 2, 3, 4, 5, 3, 1, 2]
console.log(numbers.lastIndexOf(2)) // 7
console.log(numbers.lastIndexOf(0)) // -1
console.log(numbers.lastIndexOf(1)) // 6 diznin en sonundaki elemanın indis değerini döner
console.log(numbers.lastIndexOf(4)) // 3
console.log(numbers.lastIndexOf(6)) // -1


//Array.isArray: Veri tipinin bir dizi olup olmadığını kontrol etmek için kullanılır.
const numbers = [1, 2, 3, 4, 5]
console.log(Array.isArray(numbers)) // true

// toString:Diziyi string bir ifadeye çevirir.
const numbers = [1, 2, 3, 4, 5]
console.log(numbers.toString()) // "1,2,3,4,5"

//join: Dizinin elemanlarını birleştirmek için kullanılır, join yönteminde ilettiğimiz argüman dizide birleştirilir ve bir dizi olarak döndürülür. Varsayılan olarak bir virgül ile birleşir, ancak elemanlar arasında birleştirilebilecek farklı dizi parametreleri iletebiliriz.
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
console.log(names.join()) // Asabeneh,Mathias,Elias,Brook
console.log(names.join('')) //AsabenehMathiasEliasBrook
console.log(names.join(' ')) //Asabeneh Mathias Elias Brook
console.log(names.join(', ')) //Asabeneh, Mathias, Elias, Brook
console.log(names.join(' # ')) //Asabeneh # Mathias # Elias # Brook

//Slice: Bir aralıktaki çoklu elemanları dilimler İki parametre alır. Bu parametreler, başlangıç ve bitiş konumlarıdır. Bitiş konumunu dahil etmez.
const numbers = [1, 2, 3, 4, 5]
console.log(numbers.slice())                  // -> Bütün öğeyi kopyalar
console.log(numbers.slice(0))                 // -> Bütün öğeyi kopyalar
console.log(numbers.slice(0, numbers.length)) // Bütün öğeyi kopyalar
console.log(numbers.slice(1, 4)) // -> [2,3,4] // son elemanı dahil etmez

// Push: Dizinin sonuna eleman ekler.Varolan bir diziye eleman eklemek için push metodunu kullanırız.
const item = ['item1', 'item2', 'item3']
item.push('new item')
console.log(item) // ['item1', 'item2','item3','new item']

//pop: Dizinin sonundaki elemanı siler.
const numbers = [1, 2, 3, 4, 5]
numbers.pop() // -> Sondaki elemanı siler
console.log(numbers) // -> [1,2,3,4]

//shift: Dizinin en başındaki elemanı siler.
const numbers = [1, 2, 3, 4, 5]
numbers.shift() // -> baştan bir elemanı kaldırır.
console.log(numbers) // -> [2,3,4,5]

// unshift: Dizinin başına dizi elemanı ekler.
const numbers = [1, 2, 3, 4, 5]
numbers.unshift(0) // -> en başa eleman ekler
console.log(numbers) // -> [0,1,2,3,4,5]

// reverse: Dizi sıralamasını terse çevirir.
const numbers = [1, 2, 3, 4, 5]
numbers.reverse() // -> ters dizi sırası
console.log(numbers) // [5, 4, 3, 2, 1]
numbers.reverse()
console.log(numbers) // [1, 2, 3, 4, 5]

// sort: Dizi elemanlarını alfabetik sırada düzenleyin.Sort call back fonksyonu alır, sort'un call back fonksiyonu ile nasıl kullandığımızı ilerleyen bölümlerde göreceğiz.
const webTechs = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB']
webTechs.sort()
console.log(webTechs) // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]
webTechs.reverse()    // sortladıktan sonra reverse edebiliriz.
console.log(webTechs) // ["Redux", "React", "Node", "MongoDB", "JavaScript", "HTML", "CSS"]