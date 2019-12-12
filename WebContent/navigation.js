function register(){
 document.getElementById('content').innerHTML = '<object type="text/html" data="RegisterContent.html"></object>'
}
function register2() {
    console.log('josc')
    reader = new FileReader
    let HTMLContent = reader.readAsText('RegisterContent.html');
    
    //let fs = require("fs");
    //let HTMLContent = fs.readFileSync("RegisterContent.html");

    let myContent = document.getElementById('content');
    myContent.innerHTML = HTMLContent;
}