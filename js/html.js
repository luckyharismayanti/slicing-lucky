// console.log('tes');
// console.warn('tes');
// console.error('tes');
// console.info('tes')
// console.log(15*3);
// console.log(3+1);
// console.log(15-7);
// console.log(3*10);
// console.log('umur:  ',12, ' tahun');
// let angka =10
// console.log('umur: ',angka,'tahun' )
// // let x =11
// // let y=3
// // console.log('x+y , =', (x+y)+ "\n",'x+y , =', (x-y)+ "\n", 'x*y , =', (x*y)+ "\n")

// console.log("Welcome")
// console.warn("Hati-Hati")

/*yang sering di pakai : Var, let, const. Tapi yang di pakai let dan const aja. ini semua namanya variable
let itu menampilkan nilai yang paling terakhir di tambah, sedangkan conts harus nilai yang pasti*/
// let nama = "Sindy";
// let umur = 10;
// let alamat = "jl. Sudirman No.12 Yogyakarta";
// console.log ("nama saya " + nama + " umur saya " + umur + " alamat saya " + alamat);
// // buka di browser keudian klik kanan inspect

// // cara biar 1line tanpa + | pakai backtik (`) dollar ($) dan kurung kurawal ({})
// console.log(`nama saya ${nama} \n umur saya ${umur} \n alamat saya ${alamat}`);

// let a = 11
// let b = 3
// console.log(`angka a ${a} angka b ${b}
// a+b ${a+b} 
// a-b ${a-b}
// a x b ${a*b}
// a:b ${a/b}
// a^b ${a**b}`);

// // besar kecil huruf mempengaruhi
// let lampu= "Hijau" //harus pakai ini untuk mengetahui

// if(lampu=="Merah") {
//     console.log ("Berhenti");
// } else if (lampu==="kuning") {
//     console.log("Hati-hati!");
// } else if (lampu==="Hijau"){
//     console.log("Jalan");
// }

// // cara simpel
// let bangjo ="Merah" //harus pakai ini
// switch (bangjo) {
//     case "Merah":
//         console.log("Berhenti");
//         break;
//     case "Kuning":
//         console.log("Hati-hati");
//         break;
//     case "Hijau":
//         console.log("Jalan");
//         break;
// }

// const ipk = 3.8;

// if(ipk >= 3.5 && ipk <3.7) {
//     console.log("cumlaude");
// } else if(ipk >=3.7 && ipk <3.9) {
//     console.log("magma cumlaude");
// }else if (ipk >= 3.9 && ipk <=4.1){
//     console.log("summa cumlaude");
// } else if (ipk > 4.0) {
//     console.log("Maaf Nilai IPK Maksimal 4.0");
// }else if(ipk ,3.5){
//     console.log("?");
// }

// let paragraphs = document.getElementById("quote");
// paragraphs.innerHTML = "<i>Hallo<i>";
// paragraphs.style.color = "blue";

// BIKIN POP UP MENAMPILKAN NILAI
// const nilaiA = prompt("Maukkan Niai A");
// const nilaiB = prompt("Maukkan Nilai B");
// alert("Nilai A=" + nilaiA + "dan Nilai B=" + nilaiB);

// const ipk= prompt("Masukkan IPK")

// if(ipk >= 3.5 && ipk <3.7) {
//     alert("cumlaude");
// } else if(ipk >=3.7 && ipk <3.9) {
//     alert("magma cumlaude");
// }else if (ipk >= 3.9 && ipk <=4.1){
//     alert("summa cumlaude");
// } else if (ipk > 4.0) {
//     alert("Maaf Nilai IPK Maksimal 4.0");
// }


// function PersegiPanjang(p,l){
//     console.log(`panjang: ${p}, lebar: ${l}, nilainya= ${p*l}`);
// }

// PersegiPanjang(20,5)
// PersegiPanjang(5,9)
// PersegiPanjang(13,20)
// PersegiPanjang(20,35)
// PersegiPanjang(39,60)

// function ipk(nilai) {

//     if (nilai >= 3.5 && nilai < 3.7) {
//         console.log("cumlaude");
//     } else if (nilai >= 3.7 && nilai < 3.9) {
//         console.log("magma cumlaude");
//     } else if (nilai >= 3.9 && nilai <= 4.1) {
//         console.log("summa cumlaude");
//     } else if (nilai > 4.0) {
//         console.log("Maaf Nilai nilai Maksimal 4.0");
//     }
// }
// ipk(3.9)
// ipk(4.9)
// ipk(4.0)
// ipk(3.9)
// ipk(3.8)

let cart = document.getElementById("angka")
function tambah(){
    cart.innerHTML++;
    cart.style.color="black"
}

function kurang(){
    cart.innerHTML = cart.innerText -1;
    cart.style.color="red"
}