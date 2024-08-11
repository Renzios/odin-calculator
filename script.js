let calculator = {
    leftOperand: "",
    rightOperand: "",
    operator: "",

    operate: function() {
        switch (this.operator) {
            case '+':
                return this.add();
    
            case '-':
                return this.subtract();
    
            case '*':
                return this.multiply();
            
            case '/':
                return this.divide();
        }
    },

    add: function() {
        return +this.leftOperand + +this.rightOperand;
    },

    subtract: function() {
        return this.leftOperand - this.rightOperand;
    },

    multiply: function() {
        return this.leftOperand * this.rightOperand;
    },

    divide: function() {
        return this.leftOperand / this.rightOperand;
    },
}

const operands = document.querySelectorAll(".operand");
const operators = document.querySelectorAll(".operator");
const clear = document.querySelector("#clear");
const equal = document.querySelector("#equal");
const display = document.querySelector(".display");

operands.forEach((operand) => operand.addEventListener("click", () => {
    if (calculator.operator === "") {
        calculator.leftOperand += operand.id;
        display.textContent = calculator.leftOperand;
    }
    else {
        calculator.rightOperand += operand.id;
        display.textContent = calculator.rightOperand;
    }
}));

operators.forEach((operator) => operator.addEventListener("click", () => {
    if (calculator.leftOperand !== "" && calculator.operator === "") {
        calculator.operator = operator.id;
        calculator.rightOperand = "";
    }
    else if (calculator.rightOperand !== "") {
        calculator.leftOperand = calculator.operate();
        display.textContent = calculator.leftOperand;
        calculator.rightOperand = "";
        calculator.operator = operator.id;
    }
}));

clear.addEventListener("click", () => {
    calculator.leftOperand = "";
    calculator.rightOperand = "";
    calculator.operator = "";
    display.textContent = "";
});

equal.addEventListener("click", () => {
    if (calculator.rightOperand !== "") {
        calculator.leftOperand = calculator.operate();
        display.textContent = calculator.leftOperand;
    }
});