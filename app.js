


let green = document.querySelector(".green");
let red = document.querySelector(".red");
let yellow = document.querySelector(".yellow");
let blue = document.querySelector(".blue");
let levelDiv = document.querySelector(".level");

let btnArr= [green,red,yellow,blue]
let btnText= ['green','red','yellow','blue']
let start = document.querySelector(".start");
let i=0;
let level = 0;
// const tiles = ['green','yellow','red','blue']
let userPattern = [];

let gamePattern = [];
start.onclick =(e)=> {
    level = 0;
    start.classList.add("hidden")
   
   gamePattern=[];
    startGame();
  
}


const startGame=()=> {
  i=0;
  userPattern=[];
  level++;
  console.log(level);
 levelDiv.innerHTML = `<h1>level : ${level}`
  const randomVal = Math.floor(Math.random()*4);
  gamePattern.push(btnText[randomVal])

  btnArr[randomVal].classList.add("comClicked")
  setTimeout(() => {
    btnArr[randomVal].classList.remove("comClicked")
   }, 500);
   // console.log(`${computerColor}.mp3`);
   let computerColor = btnText[randomVal];
    playsound(computerColor)
    console.log(gamePattern);
       
}
const playsound = (name)=>{
  var audio = new Audio(`./sounds/${name}.mp3`)
  audio.play()
}

document.addEventListener("click",(e)=> {
  let btn = e.target.classList[1];
  if(btn =='green' ||btn =='yellow' ||btn =='blue'  ||btn =='red' ){
    userPattern.push(btn)
    playsound(btn)
    patternChecker(i);
    i++;
    
    
  }

})
const patternChecker = (currIndex) => {
    console.log(userPattern[currIndex]+":"+gamePattern[currIndex]);
    
    if(userPattern[currIndex] === gamePattern[currIndex]){
      console.log('correct current');
      
      if(userPattern.length == gamePattern.length){
        console.log('complete pattern');
        setTimeout(()=>{
          startGame()
        },1000)
      }
    
    }
    else{
      console.log("error");
      playsound('wrong');
      levelDiv.innerHTML = `<h1>Error </h1>`
      document.body.style.backgroundColor = "red";
      start.classList.remove("hidden")
      start.innerHTML = "Re-Start";

      
    }
  }

// const handleClick = (box)=> {

// for( let btnArr[randomVal] of btnArr){
  
//  if(x.classList[1] == box){
 
//    x.classList.add("comClicked")
//    setTimeout(() => {
//      x.classList.remove("comClicked")
     
//     }, 500);
//   }
// }
// }

// document.addEventListener("click",(e)=> {
// // console.log(e);
// console.log(e.target.classList[1]);
//    if(e.target.classList[0]== 'start'){
//     start.classList.add("hidden")
//     const randomVal = Math.floor(Math.random()*4); 
//         btnArr[randomVal].classList.add("comClicked")
//         setTimeout(() => {
//           btnArr[randomVal].classList.remove("comClicked")
          
//          }, 500);
//          userPattern.push(btnArr[randomVal].classList[1]);
//        console.log(userPattern);
     
//    }
//    if(e.target.classList[1] == target)
  // if( e.target.classList[1] == userPattern[0] ){
  //   console.log("theek h");
  //   flag = true;
  // }
  // else{
  //  console.log("galat h");
  // }



// let flag = false;
// const patternMatch=(ranVal)=> {
//       userPattern.push(tiles[ranVal])
//       console.log(userPattern);
//       for (let i = 0; i < userPattern.length; i++) {
        
        
//         clickEventChecker(i)
        
//       }
//       if(flag){
//         console.log("flag");
//         startGame();
//       }
     

// }
// const clickEventChecker = (index)=> {

//   document.addEventListener("click",(e)=> {
//     if(e.target.classList[1]== userPattern[index]){
//       console.log("theek h");
//       flag = true;
//     }
//     else{
//      console.log("galat h");
//     }
    
    
//   })
// }
document.addEventListener("click",(e)=> {
    
   e.target.classList.add("userClick")
  setTimeout(() => {
   e.target.classList.remove("userClick")
    
  }, 200);
})
document.addEventListener("keydown",(e)=> {
  let key = e.code;
  console.log(key);
 

})