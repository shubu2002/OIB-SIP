let string = "";

let buttons =  document.querySelectorAll(".buttons")

Array.from(buttons).map((buttons)=>{
    buttons.addEventListener("click",(e) => {

        if(e.target.innerHTML == "="){

            string = eval(string);
            document.querySelector(".inp").value = string 

            setTimeout(()=>{
                string = "";
                document.querySelector(".inp").value = string 
            },5000)
            

        }else if(e.target.innerHTML == "back"){

           
           string = string.slice(0,string.length - 1);
            document.querySelector(".inp").value = string 
            console.log(string)

        }
        else if(e.target.innerHTML == "C"){

            string = ""
            document.querySelector(".inp").value = string

            
        }
        else{
            string += e.target.innerHTML;
            document.querySelector(".inp").value = string
        }
    })
})