const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passgenerate=document.getElementById("generate");
let firstpassbtn=document.getElementById("firstpass");
let Secondpassbtn=document.getElementById("secondpass");

            function getrandom(){
                 for(let i=0;i<characters.length;i++){
              let random=Math.floor(Math.random()*characters.length)
             
              return characters[random]
             }
         }
                      //getrandom(){
             
      
     
            
           
            function gerrandom(){
                let passwordlenght=15;
            let password1=" ";
            let password2=" ";
            
            for(let i=0;i<passwordlenght;i++){   
          password1+=getrandom()
          password2+=getrandom()
        
          
          firstpassbtn.textContent=password1
          Secondpassbtn.textContent=password2
            }
            }
     
          
         
    
  
      
     
      
       
    


     
      
       

    
     

  