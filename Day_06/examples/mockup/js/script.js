
function _base64ToArrayBuffer(base64) {
    var binary_string =  window.atob(base64);
    var len = binary_string.length;
    var bytes = new Uint8Array( len );
    for (var i = 0; i < len; i++)        {
        var ascii = binary_string.charCodeAt(i);
        bytes[i] = ascii;
    }
    return bytes.buffer;
}

//Handle on change event for the input type file 
$('input').on('change', function(evt) { 
if(evt && evt.target && evt.target.files.length) { 
var imgSrc = evt.target.files[0]; 
var reader = new FileReader(); 
reader.onload = (function(theFile) { 
return function(e) { 
console.log(e.target.result); // Here is the data in which you are interested. 
_base64ToArrayBuffer(e.target.result); 
}; 
})(imgSrc); 
reader.readAsDataURL(imgSrc); 
} 
});/*Javascript/jQuery here*/


