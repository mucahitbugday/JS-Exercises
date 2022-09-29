//Date Objesi
/*

    Method	                 Description
| - getFullYear()     >----------> Get the year as a four digit number (yyyy)             
| - getMonth()	      >----------> Get the month as a number (0-11)
| - getDate()	      >----------> Get the day as a number (1-31)
| - getHours()	      >----------> Get the hour (0-23)
| - getMinutes()      >----------> Get the minute (0-59)
| - getSeconds()      >----------> Get the second (0-59)
| - getMilliseconds() >----------> Get the millisecond (0-999)
| - getTime()	      >----------> Get the time (milliseconds  since January 1,1970)
| - getDay()	      >----------> Get the weekday as a number (0-6)
*/


const now = new Date()
console.log(now) // Thu Sep 29 2022 14:05:25 GMT+0300 (GMT+03:00)

console.log(now.getDate()) // yukardaki örnekte bulunan açıklamaya ek olarak geçen ayın gün sayısını verecektir.
//  Yıl
console.log(now.getFullYear()) // 2022
//  Ay
console.log(now.getMonth()) // Bunu yazdığınızda muhtemelen bulunduğunuz aydan bir önceki ayın sayısını alıcaktır çünkü aylar 0-11 arasında oluşuyor. Ocak 1 değil 0. ay oluyor aralıkta 11. ay oluyor.
//  Gün 
console.log(now.getDay()) 
//  Saat
console.log(now.getHours())  
//  Dakika
console.log(now.getMinutes())  
//  Saniye
console.log(now.getSeconds()) 
//  Geçen Zaman
console.log(now.getTime()) // çıktı farklı olacaktır , 1 Ocak 1970 den kullandığınız zaman arasındaki süreyi milisaniye cinsinden verecektir.
//  Tarih - Saat
const year = now.getFullYear() // yılı döndürür
const month = now.getMonth() + 1 // ayı döndürür (0 - 11) olduğu için +1 ekliyor
const date = now.getDate() // günü döndürür (1 - 31)
const hours = now.getHours() // sayıyı döndürür (0 - 23)
const minutes = now.getMinutes() // sayıyı döndürür (0 -59)

console.log(`${date}/${month}/${year} ${hours}:${minutes}`) // çıktı farklı olacaktır