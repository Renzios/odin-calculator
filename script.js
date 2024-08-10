let leftOperand, rightOperand, operator;

function operate(leftOperand, rightOperand, operator)
{
    switch (operator)
    {
        case '+':
            return add(leftOperand, rightOperand);

        case '-':
            return subtract(leftOperand, rightOperand);

        case '*':
            return multiply(leftOperand, rightOperand);
        
        case '/':
            return divide(leftOperand, rightOperand);
    }
}

function add(leftOperand, rightOperand)
{
    return leftOperand + rightOperand;
}

function subtract(leftOperand, rightOperand)
{
    return leftOperand - rightOperand;
}

function multiply(leftOperand, rightOperand)
{
    return leftOperand * rightOperand;
}

function divide(leftOperand, rightOperand)
{
    return leftOperand / rightOperand;
}