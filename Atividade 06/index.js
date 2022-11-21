const array = [false, 0, undefined, null, '', NaN]

for(let i = 0; i < array.length; i++){
    console.log(!!(array[i]))
}