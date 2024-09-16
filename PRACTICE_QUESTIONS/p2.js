function checkingNumber() {
    let a = document.getElementById('num').value; // it give the value in the form of string
    a = parseInt(a);
    if (typeof a === "number") 
    {
        if (a < 0) {
            document.getElementById('res').innerText = `the value ${a} is Negative`

        }
        else if (a === 0) {
            document.getElementById('res').innerText = `the value ${a} is Zero`
        }
        else {
            document.getElementById('res').innerText = `the value ${a} is Positive`
        }
    }
    else {
        document.getElementById('res').innerText = `Enter the number chutiye`
    }
}


document.getElementById('btn1').addEventListener('click',function(e)
{
    return checkingNumber();
})
