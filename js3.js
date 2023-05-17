const user = {
    username: 'fazztrack',
    email: 'fazztrack@email.com',
    password: 'abcd1234',
    dob: 01012001
}

function example1() {
    console.log('prosess 1')
    console.log('prosess 2')
    setTimeout(() => {
        console.log('prosess 3')
    }, 1000)
    console.log('prosess 4')
}

const getPassword = (cb) => {
    setTimeout(() => {
        return cb(user.password)
    }, 2000)
}

const getEmail = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            reject('terjadi error')
        }

        setTimeout(() => {
            resolve(user.email)
        }, 2000)
    })
}

const getDob = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            reject('terjadi error')
        }

        setTimeout(() => {
            resolve(user.dob)
        }, 2000)
    })
}

function login(password) {
    getPassword((passFromDb) => {
        if (password == passFromDb) {
            console.log('anda berhasil login')
        } else {
            console.log('password salah')
        }
    })
}

// const hasil = login()

getEmail()
    .then((value) => {
        console.log(`value from resolve = ${value}`)
        getDob()
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    })
    .catch((err) => {
        console.log(`value from reject = ${err}`)
    })
    .finally(() => {
        console.log('prosess selesai')
    })

async function userHanler() {
    try {
        const email = await getEmail()
        const dob = await getDob()
        console.log(`email user = ${email} \n dob = ${dob}`)
    } catch (error) {
        console.log(error)
    } finally {
        console.log('prosess selesai')
    }
}

const testFunc = async function () {
    console.log('example async')
}

const arroAsync = async () => {
    console.log('example arrow aync func')
}

userHanler()

module.exports = { login }
