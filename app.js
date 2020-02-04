// =================== TIMING OUT ===================

// function message() {
//     console.log('This is my message')
//     setTimeout(() => {
//         console.log('This is my message after 4 seconds')
//     }, 4000)
// }
// message()

// function getWords() {
//     console.log('Instant Word');
//     setTimeout(() => {
//         console.log('Word after 1 sec')},1000)
//     setTimeout(() => {
//         console.log('Word after 2 secs')},2000)
//     setTimeout(() => {
//         console.log('Word after 3 secs')},3000)
// }

// getWords()


// ================ CALLBACK and RECURSION ===================
function countdown(num, callback) {
    setTimeout(() => {

        if (num > 0) {
            console.log(num)
            countdown(num - 1, callback)
        } else {
            callback()
        }
    }, 1000)
}

function done() {
    console.log('Job is done!')
}
countdown(5, done)


//============== PROMISE PROMISE =========================

// const lunchTime = true;
const lunchTime = false;

function orderMeSomeFood() {
    return new Promise((resolve, reject) => {
        if (lunchTime) {
            lunch = 'Red Hot Chilli Pepper Soup'
            drink = 'Milk'
            resolve(lunch, drink)
        } else {
            let err = new Error('No soup for you')
            reject(err)
        }
    })
}

orderMeSomeFood(lunchTime)
.then((weEat) =>{
    console.log(weEat)
}).catch((noFood)=>{
    console.log(noFood)
})
