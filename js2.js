// function sayHello() {
//     console.log('hello worlds')
// }

// expretion es5
const sayName = function () {}

// void function
const sayMyName = (name, region) => {
    if (region == 'id') {
        console.log('hallo ' + name)
    } else if (region == 'en') {
        console.log('hello ' + name)
    }
}

const tess = sayMyName('fazz', 'id')

// return function
// return
function perkalian(angak1, angka2) {
    if (isNaN(angak1)) {
        return new Error('angka1 harus number')
    }
    console.log(angak1 * angka2)
    console.log('hellow')
    // return angak1 * angka2
}

const checkPassword = (password) => {
    const secret = 'abcd12345'

    if (secret != password) {
        console.log('password salah')
        return
    }

    console.log('anda berhasil login')
}

function tess2() {
    return {
        hellow: function () {
            console.log('hellow')
        }
    }
}

const user = {
    firstName: 'verdi',
    lastName: 'sasmeka',
    getFullname: function () {
        console.log(this.firstName + this.lastName)
    },
    setName: function (fName, lName) {
        this.firstName = fName
        this.lastName = lName
        return this
    }
}

const arrBuah = ['apel', 'mangga']

arrBuah.push('rambutan')

console.log(arrBuah)
arrBuah.pop()
console.log(arrBuah)

const verdi = user.setName('verdi', 'sasmeka')
verdi.getFullname()

const sayHello = function (name, cbfn) {
    const result = `Hello ${name}`
    cbfn(result)
}

const cbHello = function (result) {
    console.log(result)
}

sayHello('Yunus', cbHello)

const cbForeach = function (value, index, arr) {
    console.log(index)
    console.log(value)
}

arrBuah.forEach(function (value) {
    console.log(value)
})
