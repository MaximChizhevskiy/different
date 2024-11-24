const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("myData")
    }, 2000)
})

console.log(promise)

const getNewPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('isData')
            //reject('somme error')
        }, 2000)
    })
}

const promise = getNewPromise()

/*
function Promise(executor) {
    const resolve = (data) => {
        return{
            state: 'fulfilled',
            result: 'data'
        }
    }

    const reject = () => {
        return {
            state: 'rejected',
            result: 'err'
        }
    }

    executor(resolve, reject)
}*/


fetshOnPromise('https://authors')
    .then(data => {
        return fetshOnPromise(`https://authors/${data.authorId}`)
    })
    .then(data => {
        return fetshOnPromise(`https://authors/authorId/${data.books}`)
    })
    .then(data => {
        return fetshOnPromise(`https://authors/authorId/books/${data.bookId}`)
    })
    .then(data => {
        return fetshOnPromise(`https://authors/authorId/books/bookId/${data.page}`)
    })
    .catch(err => {
        console.log('err', err)
    })

//async await
const run = async () => {
    const yahooData = await fetch('https://yahoo.com/?query=js')
    console.log(yahooData)
    const bingData = await fetch('https://bing.com/?query=js')
    console.log(bingData)
    const googleData = await fetch('https://google.com/?query=js')
    console.log(googleData)
}

run()

//try catch
const run = async () => {
    try {
        const yahooData = await fetch('https://yahoo.com/?query=js')
        console.log(yahooData)
        const bingData = await fetch('https://bing.com/?query=js')
        console.log(bingData)
        const googleData = await fetch('https://google.com/?query=js')
        console.log(googleData)
    } catch (error) {
        console.log(error)
    }
}

run()
