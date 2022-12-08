var array = [];
var firstValue='';
var secondValue='';
var operator = [];
var operatorCount = 0;
function myFunction(button)
{  
    
    if(button.innerHTML === '=')
       {
        
        array.forEach(function(element){
            
            secondValue+=element;
           
        });
        

        if(operator === '+')
        {
            add(firstValue,secondValue,operator);
        }

        if(operator === '-')
        {
            sub(firstValue,secondValue,operator);
            
        }

        if(operator === '*')
        {
            mul(firstValue,secondValue,operator);
            
        }

        if(operator === "/")
        {
            div(firstValue,secondValue,operator);
            
        }

        array = [];
        firstValue=''
        secondValue=''
        operator = '';
        
        
       }
    else
    {
        if(button.innerHTML == '+' || button.innerHTML == '-' || button.innerHTML == '*' || button.innerHTML == '/')
        {   
             
            if(firstValue!= '')
            {

                array.forEach(function(element){
                secondValue+=element;
                
            });

            if(operator === '+')
            {
                add(firstValue,secondValue,operator);
                firstValue = Number(firstValue)+Number(secondValue);
                array = [];
                secondValue = ''
                

                
                
            }

            if(operator === '-')
            {
                sub(firstValue,secondValue,operator);
                firstValue = Number(firstValue)-Number(secondValue);
                array = [];
                secondValue = '';
                
            }

            if(operator === '*')
            {
                mul(firstValue,secondValue,operator);
                firstValue = Number(firstValue)*Number(secondValue);
                array = [];
                secondValue = '';
                
            }

            if(operator === "/")
            {
                div(firstValue,secondValue,operator);
                firstValue = Number(firstValue)/Number(secondValue);
                array = [];
                secondValue = '';
                
            }

            operator = button.innerHTML ;

            

            }
            
            else{
            operator = button.innerHTML; 
            operate();
               }
         
        }
        else
        {
            
                let value = button.innerHTML;
                populate(value);
                console.log(value)
                console.log(array)
            
        }
    }

    
   

}




var cls = document.getElementById('cls');
cls.addEventListener("click", function() {
    document.getElementById('show').innerHTML = '';
    var array = [];
    var firstValue='';
    var secondValue='';
    var operator = [];
    var operatorCount = 0;
    document.getElementById('show').innerHTML = "";
    });

function populate(value)
{
    array.push(value);
    document.getElementById('show').innerHTML = array.join("");
    
}

function operate()
{
    
    array.forEach(function(element){
    firstValue+=element;});
    
   
    array = [];
}

function add(firstValue,secondValue,operator)
{
    console.log(Number(firstValue)+Number(secondValue));
    document.getElementById('show').innerHTML = Number(firstValue)+Number(secondValue)
    
}

function sub(firstValue,secondValue,operator)
{
    console.log(Number(firstValue)-Number(secondValue));
    document.getElementById('show').innerHTML = Number(firstValue)-Number(secondValue)
    
}

function mul(firstValue,secondValue,operator)
{
    console.log(Number(firstValue)*Number(secondValue));
    document.getElementById('show').innerHTML = Number(firstValue)*Number(secondValue)
    
}

function div(firstValue,secondValue,operator)
{
    console.log(Number(firstValue)/Number(secondValue));
    document.getElementById('show').innerHTML = Number(firstValue)/Number(secondValue)
    
}