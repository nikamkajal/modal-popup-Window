const ele=document.getElementById('x')
const type=document.getElementById('number')
let c = 0
function incr ()
{
    c++;
    if(c>20){
        alert("The Maximum increment is 20  only")
    }else{
        if(c%2==0){
            type.textContent='Even'
            ele.textContent=c;
        }
        else{
            type.textContent="odd"
            ele.textContent=c;
        }
    }
    
}
function decr ()
{
    c--;
    if(c>=0)
{
    if(c%2==0)
    {
        type.textContent='Even'
        ele.textContent=c;

    }
    else
    {
        type.textContent="Odd"
        console.log("Odd");
        ele.textContent=c;

    }
    
}
else
{
    alert("The least decrement is 0 only")
}
}
function reset ()
{
    c = 0;
   type.textContent='Reset'
    type.textContent="Even"
   ele.textContent=c;
}


