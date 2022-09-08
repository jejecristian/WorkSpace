const randomNumber = (min, max) => {
    return parseInt(Math.random() * (max - min) + min);
}

console.log(randomNumber(500, 2000))

const promise1 = new Promise(
    (resolve, reject) => {
        setTimeout(
                () => { 
                    resolve(1) 
                }, 
                console.log(randomNumber(500, 2000))
            );
    }
);

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => { resolve(2) }, console.log(randomNumber(500, 2000)));
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => { resolve(3) }, randomNumber(500, 2000));
});

Promise.all([promise1, promise2, promise3])
.then((result) => {console.log(result);})
.catch((error) => {console.log(error);})