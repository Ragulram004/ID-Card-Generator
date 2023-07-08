
const preview = document.getElementById("preview");
preview.addEventListener("click",prev);

function prev(){
  const inname = document.getElementById("inname").value;
  const inrollnum = document.getElementById("inrollnum").value;
  const indept = document.getElementById("indept").value;
  const inaddress = document.getElementById("inaddress").value;
  const inmobilenum = document.getElementById("inmobilenum").value;
  const inmail = document.getElementById("inmail").value;
  const inplace = document.getElementById("inplace").value;
  const inbatch = document.getElementById("inbatch").value;


  const name=document.getElementById("name");
  const rollnum=document.getElementById("rollnum");
  const dept=document.getElementById("dept");
  const phonenum=document.getElementById("phonenum");
  const mail=document.getElementById("mail");
  const address=document.getElementById("address");
  const place=document.getElementById("place");
  const batch=document.getElementById("batch");

  name.innerHTML = inname;
  rollnum.innerHTML = inrollnum;
  dept.innerHTML = indept;
  address.innerHTML = "Address: "+inaddress;
  phonenum.innerHTML = "Mobile: "+inmobilenum;
  mail.innerHTML ="Email Id: "+ inmail;
  place.innerHTML = inplace;
  batch.innerHTML = inbatch;

//   const canvas = document.getElementById("result");
//   const ctx = canvas.getContext("2d");
//   const logo = document.getElementById("logo");
//   ctx.drawImage(logo, 0,0,240,50);
  
//   const startX = 0; 
//   const startY = 52;
//   const lineLength = 243;
//   ctx.strokeStyle = 'gray';
//   ctx.lineWidth = 1;
//   ctx.beginPath();
//   ctx.moveTo(startX, startY);
//   ctx.lineTo(startX + lineLength, startY);
//   ctx.stroke();



//   const photo = document.getElementById("photo");
//   ctx.drawImage(photo, 80,60,80,110);
 

  
  
 
//   ctx.font = "bold 20px Poppins";
//   ctx.fillText(name.innerHTML,73,200);

//   ctx.font = "bold 16px Poppins";
//   ctx.fillText(rollnum.innerHTML,67,220);

//   ctx.font = "bold 16px Poppins";
//   ctx.fillText(dept.innerHTML,83,238);

//   const startX1 = 0; 
//   const startY1 = 250;
//   const lineLength1 = 243;
//   ctx.strokeStyle = 'gray';
//   ctx.lineWidth = 1;
//   ctx.beginPath();
//   ctx.moveTo(startX1, startY1);
//   ctx.lineTo(startX1 + lineLength1, startY1);
//   ctx.stroke();

//   const startX2 = 0; 
//   const startY2 = 291;
//   const lineLength2 = 243;
//   ctx.strokeStyle = 'gray';
//   ctx.lineWidth = 1;
//   ctx.beginPath();
//   ctx.moveTo(startX2, startY2);
//   ctx.lineTo(startX2 + lineLength2, startY2);
//   ctx.stroke();

//   const startX3 = 0; 
//   const startY3 = 350;
//   const lineLength3 = 243;
//   ctx.strokeStyle = 'gray';
//   ctx.lineWidth = 1;
//   ctx.beginPath();
//   ctx.moveTo(startX3, startY3);
//   ctx.lineTo(startX3 + lineLength3, startY3);
//   ctx.stroke();

//   ctx.font = "bold 10px Poppins";
//   ctx.fillText("phno: "+ phonenum.innerHTML,0,260);

//   ctx.font = " bold 10px Poppins";
//   ctx.fillText("Email ID: "+mail.innerHTML,0,274);
  
//   ctx.font = "bold 10px Poppins";
//   ctx.fillText("Address: "+ address.innerHTML,0,287);

//   ctx.font = "16px Poppins";
//   ctx.fillText(place.innerHTML,90,315);

//   ctx.font = "16px Poppins";
//   ctx.fillText(batch.innerHTML,82,335); 

//  }

//  const down = document.getElementById("download");
//  down.addEventListener("click", function(){

//     const canvas = document.getElementById("result");
   
//     const a = document.createElement("a");
//     document.body.appendChild(a);
//     a.href = canvas.toDataURL();
//     a.download = "Card.png";
//     a.click();
//     document.body.removeChild(a);

 };

 function loadImage(event){
  const image = document.getElementById("photo");
  image.src = URL.createObjectURL(event.target.files[0]);
 }
 function printDiv(divName){
  var printContents = document.getElementById("result").innerHTML;
  var originalContents = document.body.innerHTML;

  document.body.innerHTML = printContents;

  window.print();

  document.body.innerHTML = originalContents;

}