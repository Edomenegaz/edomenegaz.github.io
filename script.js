var myRequest = new XMLHttpRequest();

myRequest.open('GET', '../pages/main.json');
myRequest.onload = function(){
    var myData = myRequest.responseText;
    console.log(myData)
    myData = JSON.parse(myRequest.responseText);
    console.log(myData[0])
};
myRequest.send();