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
        return +(+this.leftOperand + +this.rightOperand).toFixed(6);
    },

    subtract: function() {
        return +(this.leftOperand - this.rightOperand).toFixed(6);
    },

    multiply: function() {
        return +(this.leftOperand * this.rightOperand).toFixed(6);
    },

    divide: function() {
        if (this.rightOperand === "0") {
            return "Error";
        }
        return +(this.leftOperand / this.rightOperand).toFixed(6);
    },
}

const operands = document.querySelectorAll(".operand");
const operators = document.querySelectorAll(".operator");
const clear = document.querySelector("#clear");
const negate = document.querySelector("#negate");
const percent = document.querySelector("#percent");
const decimal = document.querySelector("#decimal");
const equal = document.querySelector("#equal");

const display = document.querySelector("#display");

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
    if (calculator.leftOperand !== "") {
        if (calculator.rightOperand !== "") {
            calculator.leftOperand = calculator.operate();
            if (calculator.leftOperand === "Error") {
                calculator.leftOperand = "";
                calculator.rightOperand = "";
                calculator.operator = ""; 
                display.textContent = "Error";
            }
            else {
                display.textContent = calculator.leftOperand;
                calculator.rightOperand = "";
            }
        }
        
        calculator.operator = operator.id;
    }
}));

clear.addEventListener("click", () => {
    calculator.leftOperand = "";
    calculator.rightOperand = "";
    calculator.operator = ""; 
    display.textContent = "";
});

negate.addEventListener("click", () => {
    if (calculator.operator === "" && calculator.leftOperand !== "") {
        calculator.leftOperand = -calculator.leftOperand;
        display.textContent = calculator.leftOperand;
    }
    else if (calculator.rightOperand !== "") {
        calculator.rightOperand = -calculator.rightOperand;
        display.textContent = calculator.rightOperand;
    }
});

percent.addEventListener("click", () => {
    if (calculator.operator === "" && calculator.leftOperand !== "") {
        calculator.leftOperand = +(calculator.leftOperand / 100).toFixed(6);
        display.textContent = calculator.leftOperand;
    }
    else if (calculator.rightOperand !== "") {
        calculator.rightOperand = +(calculator.rightOperand / 100).toFixed(6);
        display.textContent = calculator.rightOperand;
    }
});

decimal.addEventListener("click", () => {
    if (calculator.operator === "" && calculator.leftOperand !== "") {
        if (!calculator.leftOperand.includes(".")) {
            calculator.leftOperand += ".";
            display.textContent = calculator.leftOperand;
        }
    }
    else if (calculator.rightOperand !== "") {
        if (!calculator.rightOperand.includes(".")) {
            calculator.rightOperand += ".";
            display.textContent = calculator.rightOperand;
        }
    }
});

equal.addEventListener("click", () => {
    if (calculator.rightOperand !== "") {
        calculator.leftOperand = calculator.operate();
        if (calculator.leftOperand === "Error") {
            calculator.leftOperand = "";
            calculator.rightOperand = "";
            calculator.operator = ""; 
            display.textContent = "Error";
        }
        else {
            display.textContent = calculator.leftOperand;
            calculator.rightOperand = "";
        }
    }
});