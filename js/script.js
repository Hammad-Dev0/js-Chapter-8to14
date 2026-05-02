

// ---sweet alert---

function showAlert(type, title, message) {
  Swal.fire({
    icon: type,           // 'success', 'error', 'warning', 'info', 'question'
    title: title,
    text: message,
    confirmButtonColor: "#7e22ce",  // Tailwind purple
    confirmButtonText: "OK"
  });
}

// ------------------------------------------------------------------------------------------

// ---Toastify---

function showToast(text){
    Toastify({
  text: text,
  duration: 3000,
//   destination: "https://github.com/apvarun/toastify-js",
  newWindow: true,
  close: true,
  gravity: "top", // `top` or `bottom`
  position: "center", // `left`, `center` or `right`
  stopOnFocus: true, // Prevents dismissing of toast on hover
  style: {
    background: "#333",
  },
//   onClick: function(){} // Callback after click
}).showToast();
}

// ------------------------------------------------------------------------------------------


// ----------------------------------------Assignment-----------------------------------------

// ---some variable declartion---

let userName='Muhammad Hammad Shafique'
let someNumber=1233434 ;
let statement=document.querySelector('#statement');
let output=document.querySelector('#output');

// ---Alert Name---

let btn1=document.querySelector('#btn-1');

btn1.addEventListener('click',()=>{
    showToast(userName)
})



// -------------------------------------------------------------------------------------------


// ---Alert Number---

let btn2=document.querySelector('#btn-2');
btn2.addEventListener('click',()=>{
    showToast(someNumber)
})



// -------------------------------------------------------------------------------------------

// ---show variable name---

let btn3=document.querySelector('#btn-3');

btn3.addEventListener('click',()=>{
    let variableName=`
    <ul>
    <li>A variable name is used to store and identify data in a program.</li>
    <li>It should be meaningful so the code is easy to understand.</li>
    <li>Variable names usually cannot start with a number or contain spaces</li>
    <li>Good naming makes your code clean, readable, and professional</li>
    </ul>
    `
    output.innerHTML=variableName;
})


// ------------------------------------------------------------------------------------------

// ---show camel case---

let btn4=document.querySelector('#btn-4');

btn4.addEventListener('click',()=>{
    let camelCase=`
    <ul>
    <li>weStudy</li>
    <li>weStudyAt</li>
    <li>weStudyAtSMIT</li>
    <li>WeStudyAtSMITFaisalabad</li>
    </ul>
    `
    output.innerHTML=camelCase
})

// -------------------------------------------------------------------------------------------

// ---sum two number---

let btn5=document.querySelector('#btn-5');

let sum1=55;
let sum2=44;
let sum=sum1 + sum2

btn5.addEventListener('click',()=>{
    let sumStatement=`
    <p>let sum1=${sum1}</p>
    <p>let sum2=${sum2}</p>
    <p>let sum=sum1 + sum2</p>
    `
    statement.innerHTML=sumStatement;
    output.innerHTML=sum;
})

// -----------------------------------------------------------------------------------------

// ---Subtract two number---

let btn6=document.querySelector('#btn-6');

let sub1=23;
let sub2=44;
let sub=sub1-sub2;

btn6.addEventListener('click',()=>{
    let subtractStatement=`
    <p>let sub1=${sub1}</p>
    <p>let sub2=${sub2}</p>
    <p>let sub=sub1-sub2</p>
    `

    statement.innerHTML=subtractStatement
    output.innerHTML=sub;
})

// -------------------------------------------------------------------------------------------


// ---Multiply two number---

let btn7=document.querySelector('#btn-7');

let mul1=6;
let mul2=10;
let mul=mul1*mul2;

btn7.addEventListener('click',()=>{
    let multiplyStatement=`
    <p>let mul1=${mul1}</p>
    <p>let mul2=${mul2}</p>
    <p>let mul=mul1*mul2</p>
    `

    statement.innerHTML=multiplyStatement;
    output.innerHTML=mul;
})


// -------------------------------------------------------------------------------------------

// ---Divide two number---

let btn8=document.querySelector('#btn-8');

let div1=60;
let div2=10;
let div=div1/div2;

btn8.addEventListener('click',()=>{
    let divideStatement=`
    <p>let div1=${div1}</p>
    <p>let div2=${div2}</p>
    <p>let div=div1/div2</p>
    `
    statement.innerHTML=divideStatement;
    output.innerHTML=div;
})

// -------------------------------------------------------------------------------------------

// ---calculate some Number---

let btn9=document.querySelector('#btn-9');

let calculateSomeNumber=3/5+5-6*(3+6);

 btn9.addEventListener('click',()=>{
    let calculateStatement=`
    <p>3/5+5-6*(3+6)</p>
    `
    statement.innerHTML=calculateStatement;
    output.innerHTML=calculateSomeNumber;
 })


// -------------------------------------------------------------------------------------------

// ---Concating some String---

let btn10=document.querySelector('#btn-10');

let message='Good Morning';
let explanationMark='!';
let concatinate=`${message} ${userName} ${explanationMark}`
btn10.addEventListener('click',()=>{
    showToast(concatinate)
})


// -------------------------------------------------------------------------------------------


// ---ask Name from user---

  let btn11=document.querySelector('#btn-11');

  btn11.addEventListener('click',()=>{
    nameFromUser=prompt('please enter your name')
    if(!nameFromUser){
   showAlert('message','error','please enter your name correctly!')
   return;
    }
  let userConcatinate=`${message} ${nameFromUser} ${explanationMark}`
    showToast(userConcatinate)

    statement.innerHTML=userConcatinate
  })


//   ----------------------------------------------------------------------------------------



// ---Comparison Operaator---

let btn12 = document.querySelector('#btn-12');
let number1 = 14;
let number2 = 17;

btn12.addEventListener('click', () => {
  if (number1 <= number2) {
    showAlert('success', 'message', 'yes your condition is true');

    // show statement after 2 seconds
   setTimeout(()=>{
    statement.innerHTML='yes your condition is true';
   },2000)
  }
});


// -------------------------------------------------------------------------------------------



// ---if Else if---

let btn13=document.querySelector('#btn-13');

btn13.addEventListener('click',()=>{
  if(number1>=number2){
     showAlert('success','message','yes your first condiion are true')
  }else if(number1<=number2){
   showAlert('success','message','yes your second condition are true')
  }
  setTimeout(()=>{
    statement.innerHTML='yes your second condition are true '
  },2000)
})


// ------------------------------------------------------------------------------------------




// ---Testing set of condition---

let btn14=document.querySelector('#btn-14');

btn14.addEventListener('click',()=>{
    let age = Number(prompt('Please enter your age'));
let weight = Number(prompt('Please enter your weight'));

    if(age<18){
      showToast('your are not elligible')
    }else if(age>=18 && weight<70){
        showAlert('success','message','your are smart man')
    }else if(age>=18 && weight>70){
        showAlert('error','message',"your are fat guy")
    }
})


// ------------------------------------------------------------------------------------------



// --- if Statement Nested ---

let btn15 = document.querySelector('#btn-15');

btn15.addEventListener('click',()=>{
  let age=+prompt('please enter your age');
  if(age<18){
    showAlert('error','message','you are not elligible');
    return;
  }

  let weight=+prompt('please enter  your weight');

  if(!weight && weight===0){
    showToast('please enter your weight');
    return;
  }else if(age>=18 && weight<=70){
     showAlert('success','message','you are smart man');
     return;
  }else if(age>=18 && weight>=70){
   showAlert('error','message','you are fat guy')
  }
})
// -------------------------------------------------------------------------------------------



// ---Login---

let btn16=document.querySelector('#btn-16');

btn16.addEventListener('click',()=>{
    let name=prompt('please enter your name');
    let password=prompt('please enter your password');

    if(name==='admin' && password==='1234' ){
        showAlert('success','message','User Login Successsfully!')
    }else{
        showAlert('error','message','your name and password are incorrect')
    }
})

// -------------------------------------------------------------------------------------------

// ---Student marks check---

let btn17=document.querySelector('#btn-17');

let condition1="Your Grade is A";
let condition2="Your Grade is B";
let condition3="Your Grade is C";
let condition4="Your Grade is Fail";

btn17.onclick=()=>{
let marks = Number(prompt('Enter Your Marks'));


if(marks>=90){
    showAlert('success','Excellent',condition1)
    document.querySelector('#output').innerHTML=condition1;
}else if(marks>=80){
    showAlert('success','Good',condition2)
    document.querySelector('#output').innerHTML=condition2;
}else if(marks>=70){
    showAlert('success','Not Bad',condition3)
    document.querySelector('#output').innerHTML=condition3;

}else if(marks<=69){
    showAlert('error','Fail',condition4)
    document.querySelector('#output').innerHTML=condition4
}else{
    alert('please Enter Correct Number')
}
}



//  -----------------------------------------------------------------------------------------



// ---clear statemtent---

document.querySelector('#clear').onclick=()=>{
    document.querySelector('#statement').innerHTML='';
}


// ------------------------------------------------------------------------------------------


// ---clear output---

document.querySelector('#clear1').onclick=()=>{

    document.querySelector('#output').innerHTML='';
}


// -----------------------------------------END-----------------------------------------------