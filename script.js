let clickedCard=null;
let preventClick=false;
let combosFound=0;
let noOfChances=0;



function onCardClicked(e)
{
    const target=e.currentTarget;
   
   
  if(preventClick || target===clickedCard || target.className.includes('done'))
  {
    return;
  }
  target.className=target.className.replace('colour-hidden','').trim();
  target.className+=' done';
  if(!clickedCard)
  {
    clickedCard=target;
  }
  else
  {
    if(target.getAttribute('data-color')!==clickedCard.getAttribute('data-color'))
    {    
          if(noOfChances==13)
          {
            alert("Sorry! You Lost, try again");
            window.location.reload();
          }   
            preventClick=true;
            noOfChances++;
            setTimeout(()=>{
                console.log("here");
                clickedCard.className=clickedCard.className.replace('done','').trim()+' colour-hidden';
                target.className=target.className.replace('done','').trim()+' colour-hidden';
                clickedCard=null;
                preventClick=false;
            },500);
    }
    else{
         combosFound++;
         console.log(combosFound);
         clickedCard=null;
         if(combosFound==8)
         {
            alert("YOU WIN");
            window.location.reload();
         }
    }
  }

}
