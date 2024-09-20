

//this code will generate the randon number 1 to 255 range
const generateRGBColor=()=>{
//math floor will remove the decimal value 
    let r = Math.floor(Math.random()*255)
    let g = Math.floor(Math.random()*255)
    let b = Math.floor(Math.random()*255)
    return `rgb(${r},${g},${b})`;
}

console.log(generateRGBColor());
//here we just update the color of box
const updateColor =()=>{
    const color = generateRGBColor();
    const colorbox =document.getElementById('color-Box');
    const colorcode= document.getElementById('color-code')
    colorbox.style.backgroundColor=color;
    colorcode.innerText=color;

}
updateColor();


const copycolorcode= ()=>{
  const colorcode=  document.getElementById('color-code');
  const inputTag = document.createElement('input');
  document.body.appendChild(inputTag)
  inputTag.value=colorcode.innerText;


  inputTag.select();
  document.execCommand('copy')
  document.removeChild(inputTag)
  alert('color copied to click board');

}

const copy =document.getElementById('copy-code');
copy.addEventListener('click', function(eve)
{
    copycolorcode();
})


//using the button we can genertate the new color 
const generatenewcolor = document.getElementById('Gen-new-btn')
generatenewcolor.addEventListener('click',function()
{
    updateColor();
})
