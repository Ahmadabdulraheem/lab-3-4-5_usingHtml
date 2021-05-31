  alert("welcome to our website! ");

 var favAnime = prompt ('what is your favourate anime?');
 if (favAnime === 'Naruto') {
  document.write("watch Naruto" )
 
 
var numberOfEp =  prompt ('how many episodes have you watched before?')

while(numberOfEp<'0' || numberOfEp>'500' ){var numberOfEp =  prompt ('pls enter a valid vakue... between 0 and 500 ')}

for(var i = 0; i <numberOfEp ; i++)
 {document.write('<img src="https://ih1.redbubble.net/image.409945218.9929/flat,750x,075,f-pad,750x1000,f8f8f8.u3.jpg" />')
 }
 }

else {
document.write("watch aot");

var numberOfEp =  prompt ('how many episodes have you watched before?')

while(numberOfEp<'0' || numberOfEp>'500' ){var numberOfEp =  prompt ('pls enter a valid vakue... between 0 and 500 ')}

for(var i = 0; i <numberOfEp ; i++)
 {document.write('<img src="https://uploads.turbologo.com/uploads/design/hq_preview_image/4551835/draw_svg20210514-11995-1xrfz2r.svg.png" />')
 }
}




