function calculator() {

    let a = parseInt(document.getElementById('a').value);
    let b = parseInt(document.getElementById('b').value);

    let prosses = document.getElementById('prosses').value;

    if (prosses == '+') {
        document.getElementById('result').value = a + b;}
    
    else if (prosses == '-') {
        document.getElementById('result').value = a - b;
    }
    else if (prosses == '*') {
        document.getElementById('result').value = a * b;

    } else {
        document.getElementById('result').value = a / b;
    }

}

