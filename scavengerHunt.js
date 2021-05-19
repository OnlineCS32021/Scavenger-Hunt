let hint=document.querySelector(".hint");
let hintCounter =1;
let hint1="You wear it everyday!";
let hint2="A board game";
let hint3="Covid-19";
let clue;






function wrong(){
   hint.innerText="Wrong, try again"
   if(hintCounter==1){
	 setTimeout(function(){ hint.innerText=hint1; }, 4000);
	}else if(hintCounter==2){
	 setTimeout(function(){ hint.innerText=hint2; }, 4000);
	}else if(hintCounter==3){
	 setTimeout(function(){ hint.innerText=hint3; }, 4000);
	}
}
function clue1(){
	if(hintCounter==1){
      hintCounter+=1;
      hint.innerText=hint2;
	}else{
	 if(hintCounter==2){
	 hint.innerText="Wrong, try again";
     setTimeout(function(){ hint.innerText=hint2; }, 4000);
	 }else if(hintCounter==3){
	 hint.innerText="Wrong, try again";
     setTimeout(function(){ hint.innerText=hint3; }, 4000);
	}
}
}

function clue2(){
	if(hintCounter==2){
	  hintCounter+=1;
      hint.innerText=hint3;
	}else{
	 if(hintCounter==1){
	  hint.innerText="Wrong, try again";
      setTimeout(function(){ hint.innerText=hint1; }, 4000);
	 }else if(hintCounter==3){
	  hint.innerText="Wrong, try again";
      setTimeout(function(){ hint.innerText=hint3; }, 4000);
	}
 }	

}

function clue3(){
	if(hintCounter==3){
		hint.innerText="You win"
	}else{
	  if(hintCounter==1){
	   hint.innerText="Wrong, try again";
       setTimeout(function(){ hint.innerText=hint1; }, 4000);
	  }else if(hintCounter==2){
	   hint.innerText="Wrong, try again";
       setTimeout(function(){ hint.innerText=hint2; }, 4000);
   	  }
   	}
}   	  