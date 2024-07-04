let input=document.querySelector("#inputbox");
let btn=document.querySelectorAll("button");
let string="";
let arr=Array.from(btn);
arr.forEach(button => {
    button.addEventListener('click',(el)=>{
        if(el.target.innerText == '='){
            string=eval(string);
            input.value =string;
        }
        else if(
            el.target.innerText == 'AC'){
                string="";
                input.value=string;
            }
            else if(el.target.innerText == 'DEL'){
                string=string.substring(0,string.length-1);
                input.value =string;
            }
            else{
                string+=el.target.innerText;
                input.value =string;
            }
        
    
    })
});