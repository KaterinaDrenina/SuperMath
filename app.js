class SuperMath {
    check(obj) {
        const { X, Y, znak } = obj;
        const isConfirmed = confirm(`Do you want to perform ${X} ${znak} ${Y}?`);

        if (isConfirmed) {
            return this.doMath(znak, X, Y);
        } else {
            return this.input();
        }
    }

    input(){
        const X = parseFloat(prompt("Enter X:"));
        const Y = parseFloat(prompt("Enter Y:"));
        let znak = prompt("Enter znak(+, -, *, /, %):");

        while (!['+', '-', '*', '/', '%'].includes(znak)) {
            znak = prompt("Invalid znak. Enter znak (+, -, *, /, %):");
        }

        return this.doMath(znak, X, Y);
    }

    doMath(znak, X, Y){
        switch(znak) {
            case '+': return X + Y;
            case '-': return X - Y;
            case '*': return X * Y;
            case '/': return X / Y;
            case '%': return X % Y;
            default: return null;
        }
    }
}

const p = new SuperMath();
const obj = {X:15, Y:5, znak:'/'};
console.log(p.check(obj));