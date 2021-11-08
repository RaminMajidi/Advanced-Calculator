let result =0 ,number1=0 ,number2=0;
let charcter="";
let inputNum = document.getElementById("inputCharacter");
let lblDR = document.getElementById("lblDR");
const btnNumP =document.getElementById("numP");
const btnDeg = document.getElementById("btnDeg");
const btnRad = document.getElementById("btnRad");
const btnClear = document.getElementById("btnClear");
const btnBack = document.getElementById("btnBack");
const btnResult = document.getElementById("btnResult");
const numberButtons = document.querySelectorAll('[data-number]');
const charcterBtn = document.querySelectorAll('[data-charcter]');
const Advans = document.querySelectorAll('[data-Advans]');


//********************************************** */
//Btn NumP
btnNumP.addEventListener("click",function(){
  inputNum.value = Math.PI;
})
//######################################

//************************************************************ */
//On AND off  btnDeg
btnDeg.addEventListener("click",function(){
  if(btnDeg.style.backgroundColor=="darkcyan" || btnDeg.style.backgroundColor==""){
    btnDeg.style.backgroundColor="cyan";
    lblDR.innerHTML="Deg"
  }else if(btnDeg.style.backgroundColor="cyan"){
    btnDeg.style.backgroundColor="darkcyan";
    lblDR.innerHTML=""
  }
  if(btnRad.style.backgroundColor=="cyan"){
    btnRad.style.backgroundColor="darkcyan"
  }
})
//###############################################

//************************************************************** */
//On AND Off btnRad
btnRad.addEventListener("click",function(){
  if(btnRad.style.backgroundColor=="darkcyan" || btnRad.style.backgroundColor==""){
    btnRad.style.backgroundColor="cyan";
    lblDR.innerHTML="Rad"
  }else if(btnRad.style.backgroundColor="cyan"){
    btnRad.style.backgroundColor="darkcyan";
    lblDR.innerHTML=""
  }
  if(btnDeg.style.backgroundColor=="cyan"){
    btnDeg.style.backgroundColor="darkcyan"
  }
})
//####################################################

//******************************************************* */
//Repead Loop to get the Character
charcterBtn.forEach(btnCharcter => {
  btnCharcter.addEventListener('click',() =>{
      charcter=btnCharcter.innerHTML;
      if(number1==0 && inputNum.value>0){
        number1 =Number(inputNum.value); 
        inputNum.value ="";
      }
      else if(number1>=1 && inputNum.value>0){
        number2 = Number(inputNum.value);
        Result();
      }
  })
})
//#########################################################

//*********************************************************** */
// Repead Loop to get the Advans
Advans.forEach(btnAdvans => {
  btnAdvans.addEventListener('click',() =>{
       charcter = btnAdvans.innerHTML;
      if(inputNum.value>0){
        number1 =Number(inputNum.value);
        Result(); 
      }
  })
})
//##########################################################

//************************************************************** */
//btnResult
btnResult.addEventListener("click",function(){
  if(number1>0){
    number2=Number(inputNum.value);
    Result();
  }
});
//##############################################/

//******************************************************** */
//INSERT NUMBER TO INPUTNUMBER
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
     inputNum.value += button.innerText;
    })
  })
//##############################################

//********************************************************** */
// btnBackspace
btnBack.addEventListener("click",function(){
  let len = inputNum.value.length;
  inputNum.value = inputNum.value.substr(0,len -1);
});
//####################################################

//******************************************************** */
//btnClear (reset all)
btnClear.addEventListener("click",function(){
 if(confirm("از پاک کردن اطمینان دارید؟")){
   inputNum.value="";
   number1=0;
   number2=0;
   result=0;
   charcter="";
 }
});
//####################################################

//*********************************************************** */
// Result function 
function Result(){
  if(!charcter==""){
   
    switch (charcter) {
      case '+':
       result = number1 + number2; number1 =0; number2 =0;
       inputNum.value = result;break;
        case '-':
          result = number1 - number2; number1 =0; number2 =0;
          inputNum.value =result; break;
    case '*':
      result = number1*number2; number1=0;number2=0;
      inputNum.value =result; break;
      case '/':
        result = number1/number2;number1=0;number2=0;
        inputNum.value=result; break;
        case '%':
          result = number1%number2; number1=0; number2=0;
          inputNum.value = result; break;
          case 'sin':
            if(lblDR.innerHTML=="" || lblDR.innerHTML==="Rad"){
              result= Math.sin(number1);
            }else if(lblDR.innerHTML==="Deg"){
              result = Math.sin(number1 * Math.PI / 180);
            }
            inputNum.value=result; break;
            case 'tan':
              if(lblDR.innerHTML=="" || lblDR.innerHTML==="Rad"){
                result= Math.tan(number1);
              }else if(lblDR.innerHTML==="Deg"){
                result = Math.tan(number1 * Math.PI / 180);
              }
              inputNum.value=result; break;
              case 'cos':
                if(lblDR.innerHTML=="" || lblDR.innerHTML==="Rad"){
                  result= Math.cos(number1);
                }else if(lblDR.innerHTML==="Deg"){
                  result = Math.cos(number1 * Math.PI / 180);
                }
                inputNum.value=result; break;
                case 'x2':
                  result= Math.pow(number1,2);
                  inputNum.value=result; break;
                case '√':
                  result = Math.sqrt(number1);
                  inputNum.value = result; break;
        default:
        break;
    }
  }
  }
  //################################################
  
 

