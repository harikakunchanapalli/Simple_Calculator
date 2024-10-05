const operation=(op)=>{
    const num1=parseFloat(document.getElementById('num1').value);
    const num2=parseFloat(document.getElementById('num2').value);
    let result;
    switch (op){
        case 'add':
            result=num1+num2;
            document.getElementById('result').textContent="Adddition is:"+result;
            break;
        case 'sub':
            result=num1-num2;
            document.getElementById('result').textContent="Subtraction is:"+result;
            break;
        case 'mul':
            result = num1*num2;
            document.getElementById('result').textContent="Multiplication is:"+result;
            break;
        case 'div':
            if(num2===0){
                document.getElementById('result').textContent="Erroe:Can't divide a number by zero";
            }
            else{
                result=num1/num2;
                document.getElementById('result').textContent="Division is:"+result;
                break;
            }
        default:
            document.getElementById('result').textContent="Invalid Operation" ;

    }
    
}