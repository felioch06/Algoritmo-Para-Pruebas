//Ejecución de las respuestas
var array = [0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1]
var count = 1;
var arrayCounter = 0

var interval = setInterval(() => {
    
    console.log(count)
    console.log(arrayCounter)

    if(array[arrayCounter] == 0){

        setTimeout(function(){
            document.getElementsByClassName("jss498")[0].click();
        }, 2000)
        setTimeout(function(){
            
            document.getElementsByClassName("jss383")[0].click();        
        }, 4000)
        setTimeout(function(){
            
            document.getElementsByClassName("jss383")[0].click();        
        }, 6000)
        setTimeout(function(){
            
            document.getElementsByClassName("jss383")[0].click();        
        }, 8000)
    }

    else if(array[arrayCounter] == 1){
        setTimeout(function(){
            document.getElementsByClassName("jss498")[1].click();
        }, 2000)
        setTimeout(function(){
            
            document.getElementsByClassName("jss383")[0].click();        
        }, 4000)
        setTimeout(function(){
            
            document.getElementsByClassName("jss383")[0].click();        
        }, 6000)
        setTimeout(function(){
            
            document.getElementsByClassName("jss383")[0].click();        
        }, 8000)
    }
    else{
        count = 0
        clearInterval(interval)
    }   
        arrayCounter++
        count++
}, 10000);


//Enseñanza de Las Respuestas

var countAnswer = 1
var numeroPreguntas = 29
var fel = ''
var ans = []

    var intervalo = setInterval(() => {
        
        setTimeout(function(){
            document.getElementsByClassName("jss498")[0].click();
        }, 2000)
        setTimeout(function(){
            
            document.getElementsByClassName("jss383")[0].click();        
        }, 4000)
        setTimeout(function(){
        
            document.getElementsByClassName("jss383")[0].click();        
    }, 6000)
    setTimeout(() => {
        
        fel =  document.getElementsByClassName("jss331")[0] ? document.getElementsByClassName("jss331")[0].getAttribute('class') : 'no';
        
        if(fel == "MuiPaper-root jss324 jss331 MuiPaper-elevation1 MuiPaper-rounded"){
            ans.push(1)
            console.log(ans)
        }else{
            ans.push(0)
            console.log(ans)
        }
    }, 8000);
    setTimeout(function(){
        
        
        document.getElementsByClassName("jss383")[0].click();        
    }, 10000)
    
    if(countAnswer >= numeroPreguntas){
        clearInterval(intervalo)
    }
    countAnswer++
}, 12000);
    
    