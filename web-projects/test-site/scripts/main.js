const myHeading = document.querySelector("h1");
myHeading.textContent = "为斯卡蒂献上心脏!";
const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/微信图片_20241120153711.jpg") {
    myImage.setAttribute("src", "images/微信图片_20241120153730.jpg");
  } else {
    myImage.setAttribute("src", "images/微信图片_20241120153711.jpg");
  }
};
let myButton = document.querySelector("button");
myButton.onclick = function () {
    for(var i=1;i<3;i++)
        {if(i===1){
    window.open('https://ak.hycdn.cn/apk/202410301849-2401-te3svuc43h63yfe8a4pk/arknights-hg-2401.apk');}
         if(i===2){
   setTimeout(()=>{window.open('https://www.yuanshen.com/','_blank')},60000);}}
  };
  