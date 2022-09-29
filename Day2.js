/*
-> İlkel veri türleri
- Numbers - Tamsayılar - Ondalık sayılar
- Strings - Tek tırnak, çift tırnak veya ters tırnak içerisindeki tüm veriler..
- Booleans - true yada false (true = 1 false = 0 bu iki terimi bu şekilde öğrenin. Çevirilerine çok girmeyin kısaca var yada yok )
- Null - Boş değer yada değeri yok
- Undefined - Bir değer verilmeyen değişken. ( Örn: let variables; )
- Symbol - Sembol yapıcısı tarafından oluşturulabilen benzersiz bir değer

-> JavaScript'teki ilkel olmayan veri türleri şunları içerir:
- Objects ( Nesneler )
- Arrays ( Diziler )
*/

let nums = [1, 2, 3]
let numbers = [1, 2, 3]
console.log(nums == numbers)

/************************************************************/
//Math
const PI = Math.PI // Buraya kısa bir açıklama getirelim. Math objesi sayesinde PI sayısının değerini otomatik alıyoruz.

console.log(PI)                            // 3.141592653589793

// En yakın sayıya yuvarlama
// Eğer .5'in altındaysa aşağıya üstündeyse yukarıya yuvarlar. Örn: 3.14 ise 3 yapar 3.51 ise 4 yapar.

console.log(Math.round(PI))                // 3.14 olduğu için 3 e yuvarlama yapıyor

console.log(Math.round(9.81))              // Ondası 0.5 üstünde olduğu için 10 yapar

console.log(Math.floor(PI))                // floor aşağı yuvarlar Bu 3 olur

console.log(Math.ceil(PI))                 // ceil yukarı yuvarlar Bu 4 olur

console.log(Math.min(-5, 3, 20, 4, 5, 10)) // En küçük sayıyı bulmaya yaradığı için sonuç -5 döner

console.log(Math.max(-5, 3, 20, 4, 5, 10)) // En büyük sayıyı bulmaya yaradığı için sonuç 20 döner

const randNum = Math.random() // 0 ile 0.999999 arasında rastgele bir sayı üretir.
console.log(randNum)

// 0 ile 10 arasında rastgele bir sayı oluşturalım.

const num = Math.floor(Math.random() * 11) // 0 ile 10 arasında rastgele sayı oluşturur
console.log(num)

//Mutlak değer
console.log(Math.abs(-10))      // 10

//Kare kök
console.log(Math.sqrt(100))     // 10

console.log(Math.sqrt(2))       // 1.4142135623730951

// Üs
console.log(Math.pow(3, 2))     // 9

console.log(Math.E)             // 2.718

// Logaritma
// Returns the natural logarithm with base E of x, Math.log(x)
console.log(Math.log(2))        // 0.6931471805599453
console.log(Math.log(10))       // 2.302585092994046

// Sırasıyla 2 ve 10'un doğal logaritmasını döndürür
console.log(Math.LN2)           // 0.6931471805599453
console.log(Math.LN10)          // 2.302585092994046

// Trigonometri
Math.sin(0)
Math.sin(60)

Math.cos(0)
Math.cos(60)



/********************************************************/
/*
String'lerdeki Kaçış Dizileri
JavaScript ve diğer programlama dillerinde \ (ters eğik çizgi ) ardından bazı karakterler kaçış dizisidir. En yaygın kaçış karakterlerini görelim:
\n: yeni satır
\t: Tab, 8 boşluk anlamına gelir ( klavyedeki tab tuşunu temsil eder )
\\: Ters eğik çizgi
\': Tek Tırnak (')
\": Çift Tırnak (")
 */




/******************************************************/

//Dinamik  Consollog kullanımı
console.log(`The sum of 2 and 3 is 5`)              // statik bir veri
let a = 2
let b = 3
console.log(`The sum of ${a} and ${b} is ${a + b}`) // verileri dinamik olarak ekleme




/*********************************************************/
//-> String Metotları

//length: String içerisindeki karakterlerin sayısını belirtir. Boşluklar dahildir.
let js = 'JavaScript'
console.log(js.length)         // 10

//toUpperCase(): bu metot string verisini büyük harflere dönüştürür.
let string0 = 'JavaScript'
console.log(string.toUpperCase())     // JAVASCRIPT

//toLowerCase(): bu metot string verisini küçük harflere dönüştürür.
let string1 = 'JavasCript'
console.log(string.toLowerCase())     // javascript

//substr(): İki arrgüman alır, başlangıç indeksi ve silenecek karakter sayısı.
let string2 = 'JavaScript'
console.log(string.substr(4, 6))    // Script

//substring(): Başlangıç indeksi ve durma indeksi olmak üzere iki argüman almaktadır.
let string3 = 'JavaScript'
console.log(string3.substring(0, 4))     // Java
console.log(string3.substring(4, 10))    // Script
console.log(string3.substring(4))

//split(): Bu metot bir stringi belirtilen yerden bölmeye yarar. ( array oluşturuyor )
let string4 = '30 Days Of JavaScript'
console.log(string4.split())     // bu kısımda birşey belirtmediğin için 1 elementli array oluştu -> ["30 Days Of JavaScript"]
console.log(string4.split(' '))  // bu kısımda boşluktan böl dediğimiz için 4 elementli array oluştu -> ["30", "Days", "Of", "JavaScript"]
console.log(string4.split('a'))  // bu kısımda boşluktan böl dediğimiz için 4 elementli array oluştu -> ["30 D", "ys Of J", "v", "Script"]

//trim(): String'in başında ve sonundaki boşlukları silmeye yarar.
let string5 = '   30 Days Of JavaScript   '
console.log(string5)
console.log(string5.trim(' ')) // Çıktı -> "30 Days Of JavaScript"

//includes(): Bu metot string içerisinde varlık kontrolü yapmaya yarar. Eğer bulursa true, bulamazsa false döner. ( birebir arama yapar )
let string6 = '30 Days Of JavaScript'
console.log(string6.includes('Days'))     // true
console.log(string6.includes('days'))     // false - birebir arama yapar!
console.log(string6.includes('Script'))   // true
console.log(string6.includes('script'))   // false
console.log(string6.includes('java'))     // false
console.log(string6.includes('Java'))     // true

//replace(): Bu metot string içerisinde değiştirme yapmamızı sağlar. Eski ve Yeni olmak üzere iki argüman alır.
let string7 = '30 Days Of JavaScript'
console.log(string7.replace('JavaScript', 'Python')) // 30 Days Of Python

//charAt(): Stringdeki indeksi belirttiğinizde o indeksin değerini yazdırır.
let string8 = '30 Days Of JavaScript'
console.log(string8.charAt(0))        // 3 (0. indeksin değerini döndürdü)

//charCodeAt(): String'teki vermiş olduğunuz index değerinin ASCII numarasını döndürür.
let string9 = '30 Days Of JavaScript'
console.log(string9.charCodeAt(3))        // D ASCII 68

//indexOf(): Bu metot belirtilen değerin indeksini verir. Değer bulunamazsa -1 sonucunu döndürür. ( Birebir arama yapar örneğe bakın )
let string10 = '30 Days Of JavaScript'
console.log(string10.indexOf('D'))          // 3. indis
console.log(string10.indexOf('Days'))       // 3. indis
console.log(string10.indexOf('days'))       // -1. indis
console.log(string10.indexOf('a'))          // 4. indis
console.log(string10.indexOf('JavaScript')) // 11. indis
console.log(string10.indexOf('Script'))     // 15. indis
console.log(string10.indexOf('script'))     // -1. indis

//lastIndexOf(): Bu metot belirtilen değerin son değer indeksini verir. Değer bulunamazsa -1 sonucunu döndürür.
let string11 = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string11.lastIndexOf('love'))       // 67. indis
console.log(string11.lastIndexOf('you'))        // 63. indis
console.log(string11.lastIndexOf('JavaScript')) // 38. indis

//concat(): Bu metot birleştirme işlemini sağlar, birden fazla değer alabilir
let string12 = '30'
console.log(string12.concat("Days", "Of", "JavaScript")) // 30DaysOfJavaScript

//startsWith: String'in belirtilen değer ile başlayıp başlamadığını kontrol eder. true yada false döndürür.
let string13 = 'Love is the best to in this world'
console.log(string13.startsWith('Love'))   // true
console.log(string13.startsWith('love'))   // false
console.log(string13.startsWith('world'))  // false

//endsWith: String'in belirtilen değer ile bitip bitmediğini kontrol eder. true yada false döndürür.
let string14 = 'Love is the most powerful feeling in the world'
console.log(string14.endsWith('world'))         // true
console.log(string14.endsWith('love'))          // false
console.log(string14.endsWith('in the world'))  // true

//search: Argüman olarak bir alt dize alır ve ilk eşleşmenin dizinini döndürür. Arama değeri bir dize veya normal ifade kalıbı olabilir.
let string15 = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string15.search('love'))          // 2
console.log(string15.search(/javascript/gi))  // 7 buradaki gi açıklaması bir alt örnekte var - g-bütün metinde ara, i - büyük küçük harf duyarsız

//match: Argüman olarak bir alt dize veya normal ifade kalıbı alır ve eşleşme varsa bir dizi döndürür, değilse null döndürür. Normal bir ifade kalıbının nasıl göründüğünü görelim. / işareti ile başlar ve / işareti ile biter.
let string16 = 'love'
let patternOne16 = /love/     // koşulsuz
// regex komutu
let patternTwo16 = /love/gi   // g-bütün metinde ara, i - büyük küçük harf duyarsız

//repeat(): bağımsız değişken olarak bir sayı alır ve stringi sayı kadar döndürür.
let string17 = 'love'
console.log(string17.repeat(5))

//-> Veri Türünü Değiştirme (Döküm)
//Döküm: Bir veri tipini başka bir veri tipine dönüştürme. Kullandıklarımız parseInt(), parseFloat(), Number(), + sign, str() Aritmetik işlemler yapmadan önce string sayıları önce integer yada float türüne dönüştürmeliyiz yoksa hata alırız.


//-String to Int
/*
parseInt()
Number()
Plus sign(+) // artı işareti demek
*/
let num1 = '10'
let numInt1 = parseInt(num)
console.log(numInt1) // 10

let num2 = '10'
let numInt2 = Number(num)
console.log(numInt2) // 10

let num3 = '10'
let numInt3 = +num3
console.log(numInt3) // 10

//-String to Float
/*
parseFloat()
Number()
Plus sign(+)
*/
let num4 = '9.81'
let numFloat4 = parseFloat(num4)
console.log(numFloat4) // 9.81

let num5 = '9.81'
let numFloat5 = Number(num5)
console.log(numFloat5) // 9.81

let num6 = '9.81'
let numFloat6 = +num6
console.log(numFloat6) // 9.81

//-Float to Int
/*
parseInt()
*/
let num7 = 9.81
let numInt7 = parseInt(num7)
console.log(numInt7) // 9

