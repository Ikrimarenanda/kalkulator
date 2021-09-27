const numbers = document.querySelectorAll(".number")
console.log(numbers)

numbers.forEach((number) => {
    console.log(number)
})

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        console.log("number is pressed")
    })
})

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        console.log(event.target.value)
    })
})

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        updateScreen(event.target.value)
    })
})

const calcutaorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
    calcutaorScreen.value = number
}

let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'


numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number
    }
}

const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        console.log(event.target.value)
    })
})

const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = '0'
}

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})

const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener("click", () => {
    console.log('equal button is pressed')
    calculate()
    updateScreen(currentNumber)
})

const calculate = () => {
    let result = ''
    switch(calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case "-":
            result = prevNumber - currentNumber
            break
        case "*":
            result = prevNumber * currentNumber
            break
        case "/":
            result = prevNumber / currentNumber
            break
        default:
            return
    }
    currentNumber = result
    calculationOperator = ''
}

equalSign.addEventListener('click', () => {
    calculate()
    updateScreen(currentNumber)
})

const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
    console.log('AC button is pressed')
})

const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}

clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
})

const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event) => {
    console.log(event.target.value)
})

inputDecimal = (dot) => {
    currentNumber += dot
}

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

inputDecimal = (dot) => {
    if(currentNumber.includes('.')) {
        return
    }
    currentNumber +=dot
}



