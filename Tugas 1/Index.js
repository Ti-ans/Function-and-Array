// Function 

// Function = sub-program yang dapat dipanggil di bagian lain progam. Function merupakan struktur dasar JavaScript, terdiri dari prosedur atau statement untuk tugas atau perhitungan nilai, memudahkan penggunaan dan pemanggilan.
// Function digunakan untuk memungkinkan penggunaan kembali kode, abstraksi, dan modularitas.
// Penulisan function dibagi 2 kategori :

// 1. Built-in function = Penulisan function yang sudah disediakan oleh javascript.
// Contoh :
let text = "HELLO WORLD";  
let lowerText = text.toLowerCase();  
console.log(lowerText)

// 2. User-Defined function = Penulisan function yang kita buat sendiri.
// Penulisan User-Defined function bisa menggunakan deklarasi dan ekspresi.
// Contoh :
// Function deklarasi
function penjumlahanBilangan(a, b){
    var total;
    total = a + b;
    return total;
}
alert(penjumlahanBilangan(5, 10))

// Function expresi
var penjumlahanBilangan = function(a, b){
    var nilai;
    nilai = a + b;
    return nilai;
}
console.log(penjumlahanBilangan(7, 8))

// Array

// Array = Struktur data untuk menyimpan sekumpulan data dalam satu tempat.
// Array digunakan untuk menyimpan data-data yang diinputkan masing-masing ke dalam memori komputer.
// Contoh :
let merekMobil = ['Ferrari', 'Bentley', 'Rolls-Royce'];  

// Menampilkan elemen  
console.log(merekMobil[1]);  

// Menambah elemen  
merekMobil.push('Bugatti');  
console.log(merekMobil);    

// Menghapus elemen  
merekMobil.pop();  
console.log(merekMobil);  

// Iterasi  
merekMobil.forEach(function(merekMobil) {  
console.log(merekMobil);  
});