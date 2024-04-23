const products = [
    {product: "product1", price: 50},
    {product: "product2", price: 100},
    {product: "product3", price: 150}
]


function calculateDiscountedPrice(products, discount) {
    let tmp = products.map(product => {
        discounted = product.price - (product.price * (discount / 100))

        return {
            ...product,
            price: discounted
        }
    })

    return tmp;
}

console.log("calculateDiscountedPrice")
console.log(calculateDiscountedPrice(products, 10))


function calculateTotalPrice(products) {
    let totalPrice = 0

    products.forEach(product => {
        totalPrice += product.price
    })

    return totalPrice
}

console.log("\ncalculateTotalPrice")
console.log(calculateTotalPrice(products))


const person = {firstName: "John", lastName: "Doe"}

function getFullName(person) {
    return `${person.firstName} ${person.lastName}`
}

console.log("\ngetFullName")
console.log(getFullName(person))


function getWordsOfText(text) {
    return text.toLowerCase().match(/[a-z]+/g);
}

function filterUniqueValues(values) {
    return values.filter((word, index) => values.indexOf(word) === index)
}

function sortAlphabetically(values) {
    return values.sort();
}

function filterUniqueWords(text) {
    if (typeof(text) != "string")
        throw new Error("Invalid input type")
    return sortAlphabetically(filterUniqueValues(getWordsOfText(text)))
}

console.log("\nfilterUniqueWords")
try {
    console.log(filterUniqueWords("Hello hello world Hello !!!!"))
} catch (error) {
    console.log(error.message)
}


const students = [
    {name: "John", grades: [1, 4, 5]},
    {name: "Mark", grades: [2, 3, 5]},
]

const getAverageGrade = students => students.flatMap(student => student.grades)
                                            .reduce((total, grade) => total + grade)
                                            /students.flatMap(student => student.grades).length


console.log("\ngetAverageGrade")
console.log(getAverageGrade(students))


function createCounter() {
    let c = 0
    return function count() {
        return c += 1
    }
}

const c1 = createCounter()
const c2 = createCounter()

console.log("\ncreateCounter")
console.log("c1:")
console.log(c1())
console.log(c1())
console.log(c1())

console.log("c2:")
console.log(c2())
console.log(c2())


function repeatFunction(fn, n) {
    return function() {
        if (n < 0) {
            while (true) {
                console.log(fn())
            }
        } else {
            for (let i = 0; i < n - 1; i++) {
                console.log(fn())
            }
        }
        return fn()
    }
}

function fun() {
    return "invoke"
}

console.log("\nrepeatFunction")

const invoke = repeatFunction(fun, 3);
console.log(invoke())



function calculateFactorial(n, tmp = 1) {
    if (n == 1)
        return tmp

    return calculateFactorial(n - 1, tmp * n)
}

console.log("\ncalculateFactorial")
console.log(calculateFactorial(5))


function power(base, exponent) {
    if (exponent == 0)
        return 1
    
    return base * power(base, exponent - 1)
}

console.log("\npower")
console.log(power(5, 2))


function lazyMap(array, mappingFunction) {
    let i = 0

    return {
        next() {
            if (i < array.length) {
                const val = mappingFunction(array[i])
                i++
                return { done: false, value: val }
            } else {
                return { done: true }
            }
        }
    }
}

const arr = [1, 2, 3, 4]

const map = lazyMap(arr, x => x + 1)

console.log("\nlazyMap")
while (true) {
    const res = map.next()
    if (res.done)
        break

    console.log(res.value)
}



function fibonacciGenerator() {
    let x = 0
    let y = 1

    return {
        next() {
            const result = { done: false, value: x }
            next = x + y
            x = y
            y = next
            return result
        }
    }
}

const fib = fibonacciGenerator()

console.log("\nfibonacciGenerator")
console.log(fib.next().value)
console.log(fib.next().value)
console.log(fib.next().value)
console.log(fib.next().value)
console.log(fib.next().value)

