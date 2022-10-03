sock = io();
sock.on("connect", function (){
    console.log("connected.....");
    sock.send('Connect....');
});


var array = []
const map = new Map();

function checkBingo(){
    array = [];
    for(let i=1;i<26;i++){    
        var n = document.getElementById(i.toString()).value;
        n = parseInt(n);
        if(checkNumbers(n)){
            document.getElementById(i.toString()).style.backgroundColor = 'green';
            map.set(n, i.toString);
            array.push(n);
        }

        else{
            document.getElementById(i.toString()).style.backgroundColor = 'red';
        }
        
    }

}
function checkNumbers(num){
    if(num < 26 && num > 0){
        if (array.length <= 0){
            array.push(num);
            return true;
            }
        else{
            var flag = true;
            for(let j = 0; j < array.length; j++){
                if(num == array[j]){
                    flag = false;
                    break;
                }
            }
            return flag;
        }
    }
    else{
        return false;
    }
}
