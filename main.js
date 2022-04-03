function encr(){
    var text = document.getElementById("text").value;
    var password = document.getElementById("password").value;
    var encrypted = CryptoJS.AES.encrypt(text,password);
    document.getElementById("output").innerHTML = encrypted;

};
function decr(){
    var text = document.getElementById("text").value;
    var password = document.getElementById("password").value;
    var decrypted = CryptoJS.AES.decrypt(text,password);
    document.getElementById("output").innerHTML = decrypted;
    
};