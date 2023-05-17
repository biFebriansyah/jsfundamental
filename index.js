const simpleString = ''
const simpleInt = 0
const simpleBigInt = 121212n
const simpleBool = false

const simpleArr = ['asasas', 1212, simpleBigInt, null]

const simpleObj = {
    username: 'user1',
    password: 'abcd12345'
}

const userName = 'fazz2'
const password = '123452'

// if (userName != 'fazz' && password != '12345') {
//     const userName = 'tess'
//     console.log(userName)
//     console.log('gagal login')
// } else {
//     console.log('berhasil login')
// }

// const isLogin = userName != 'fazz' && password != '12345' ? 'anda gagal login' : 'anda berhasil login'

// const angka = 1

// switch (angka) {
//     case 1:
//         console.log('angka 1')
//     case 2:
//         console.log('angka 2')
//     default:
//         console.log('tidk ada angka')
// }

const arrBuah = ['mangga', 'rambutan', 'apel']
let angkas = 0

for (let index = 0; index < arrBuah.length; index++) {
    const element = arrBuah[index]
    // console.log(element)
}

while (true) {
    if (arrBuah[angkas] == 'rambutan') {
        break
    }
    // console.log(arrBuah[angkas])
    angkas++
}

const tahunLahir = 2022
const tahunSkarang = 2023
const umur = tahunSkarang - tahunLahir

const output = 'saya lahir tahun ' + tahunLahir + 'sekarang umur saya = ' + umur
const result = `saya lahir tahun ${tahunLahir} sekarang umur saya ${umur}`

const obj1 = {
    firstName: 'faz',
    lastName: 'track',
    hoby: ['tidur', 'baring'],
    tess: {
        tes: ['as', 'sb']
    }
}

const obj2 = {
    class: 'fullstack golang',
    batch: '1.8',
    firstName: 'faz2'
}

const arr1 = ['aple', 'anggur']
const arr2 = ['mangga', 'pepaya']

const fazztrack = { ...obj1, ...obj2, ...arr1 }
const buah = [...arr1, ...arr2]

const { firstName, lastName, hoby, tess } = obj1

const { tes } = tess

const dataUser = [
    {
        username: 'user1',
        hoby: 'main bola'
    },
    {
        username: 'user2',
        hoby: 'main biola'
    }
]
