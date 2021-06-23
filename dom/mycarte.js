 function changeColor(obj) {
      
      if(obj.style.color == "" || obj.style.color == "black" ){
        obj.style.color = "red";  
      }
      
      else{
         obj.style.color = "black"; 
      }
      
  }

function remove(object) {
    var row = object.parentElement.parentElement;
    var item = row.parentElement;
    item.removeChild(row);

    sum();
  }

 
  var icon = document.getElementsByClassName("fa-heart");

  
 
 


function minusoperation(inputNumber)
{

    var el = document.getElementById('number' + inputNumber);
    if(parseInt(el.value))
    {
        el.value = parseInt(el.value)-1;

    } else {
        el.value = 0;
    }
    sum();
}

function addoperation(inputNumber)
{
    var el = document.getElementById('number'+inputNumber);

    if(parseInt(el.value))
    {
        el.value = parseInt(el.value)+1;
    } else {
        el.value = 1;
    }
   sum();

}



function sum() {
    var prices = document.getElementsByClassName("cart-price");
    var myElements = document.getElementsByClassName('cart-quantity-input');
    var tot = document.getElementById("cart-total-price");
    
    var sum = 0;
    for (var i=0; i< myElements.length;i++) {
        if(myElements[i].value > 0)
            sum = sum + parseInt(myElements[i].value) * parseFloat(prices[i].innerHTML.replace('$', '')) ;
            
    }
    console.log(sum)
    tot.innerHTML = sum + 'D';
    
    
}

	 
