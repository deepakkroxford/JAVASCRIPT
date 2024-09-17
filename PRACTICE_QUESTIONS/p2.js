function checkingNumber() {
    let a = document.getElementById('num').value; // it give the value in the form of string
    a = parseInt(a);
    if (!isNaN(a))   //typeof a === "number"
    {
        if (a < 0) {
            document.getElementById('res').innerText = `the value ${a} is Negative`
            document.getElementById('res').style.color = "blue";
        }
        else if (a === 0) {
            document.getElementById('res').innerText = `the value ${a} is Zero`
            document.getElementById('res').style.color = "green";
        }
        else {
            document.getElementById('res').innerText = `the value ${a} is Positive`
            document.getElementById('res').style.color = "red";
          
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
