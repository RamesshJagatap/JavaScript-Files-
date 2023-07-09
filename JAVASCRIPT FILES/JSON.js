 //JavaScript to illustrate JSON.parse() method.
 var j = '{"Name":"Krishna","Email": "XYZ@gmail.com", "CN": "12345"}';
 var data = JSON.parse(j);
 document.write("Convert string in JSON format using parse() method<br>");
 document.write(data.Email); //expected output: XYZ@gmail.com

 //JavaScript to illustrate JSON.stringify() method.
 var j = {
     Name: "Krishna",
     Email: "XYZ", CN: 12345
 };
 var data = JSON.stringify(j);
 document.write("<br>Convert string in JSON format using stringify()  method<br>");
 document.write(data); //expected output: {"Name":"Krishna","Email":"XYZ","CN":12345}