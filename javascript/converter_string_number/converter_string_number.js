var string_1 = "5"
var string_2 = "5.5"

//typeof = informa o tipo da variável
console.log(string_1 +":"+ typeof string_1) //-> 5:string
console.log(string_2 +":"+ typeof string_2) //-> 5.5:string

//converter uma variável de string para number(float ou int automaticamente)
var number_1 = Number(string_1)
var number_2 = Number(string_2)
console.log(number_1 +":"+ typeof number_1) //-> 5:number
console.log(number_2 +":"+ typeof number_2) //-> 5.5:number

//converter uma variável de string para int
var number_int_1 = Number.parseInt(string_1)
var number_int_2 = Number.parseInt(string_2)
console.log(number_int_2 +":"+ typeof number_int_2) //-> 5:number
console.log(number_int_2 +":"+ typeof number_int_2) //-> 5:number

//converter uma variável de string para float
var number_float_1 = Number.parseFloat(string_1)
var number_float_2 = Number.parseFloat(string_2)
console.log(number_float_1 +":"+ typeof number_float_1) //-> 5:number
console.log(number_float_2 +":"+ typeof number_float_2) //-> 5.5:number

//converter um number para string
var string_number_1 = String(number_1)
var string_number_2 = String(number_2)
console.log(string_number_1 +":"+ typeof string_number_1) //-> 5:string
console.log(string_number_2 +":"+ typeof string_number_2) //-> 5.5:string