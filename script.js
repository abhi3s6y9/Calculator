var buttons = document.getElementsByTagName('button');

for(var i=0;i<buttons.length();i++){
    buttons[i].addEventListener('click', function(event){
        var buttonVal = buttons[i].value;
        
        var output = document.getElementById('output');
        output.innerHTML = buttonVal;
    });
}

