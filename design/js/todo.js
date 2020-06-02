var list = document.querySelectorAll("li");
var dlt = document.querySelectorAll("span");
var newtodo = document.querySelector("#newTodo");
newtodo.value = "";
var addTodo = document.querySelector("ul");

var parentLi = null;
newtodo.addEventListener("keypress", function(event)
{
    if(event.keyCode === 13 & parentLi == null) 
    {
     
        var valueSpan = document.createElement("span");
        valueSpan.textContent = this.value;
        var inputval = this.value;
        var okicon = document.createElement("i");
        okicon.style.marginRight = "10px";
        okicon.classList.add("far","fa-square");
       

        //Completed task
        okicon.addEventListener("click",function(){
            this.parentElement.classList.toggle("completed");
            if(okicon.classList.contains("far"))
            {
            okicon.classList.remove("far","fa-square");
            okicon.classList.add("fas","fa-check-square");
            }
            else{
                okicon.classList.add("far","fa-square");
                okicon.classList.remove("fas","fa-check-square");
            }
           
        });
        //complete task end
        var editSpan = document.createElement("span");
       
        if(/\S/.test(inputval))
        {
          
            var icon = document.createElement("i");
            var icon1 = document.createElement("i");
           
            icon.classList.add("fas","fa-trash-alt");
            icon1.classList.add("fas","fa-edit");

            var newSpan = document.createElement("span");
            

            newSpan.classList.add("dlt");
            newSpan.appendChild(icon);
           
            editSpan.appendChild(icon1);
            editSpan.classList.add("edit");

           
           //Enter new list
            var newList = document.createElement("li");
            newList.appendChild(okicon);
            
           
            newList.appendChild(valueSpan);
            addTodo.appendChild(newList);
            newList.appendChild(editSpan);
            newList.appendChild(newSpan);
            newtodo.value = "";
            parentLi = null;

            //Delete Row
            newSpan.addEventListener("click",function(){
            
                var par = this.parentElement;
                this.parentElement.classList.add("delete");
        
                setTimeout(dlt, 400);
                function dlt(){
                    par.remove();    
                }
            });
            

        }

        //Edit list
        editSpan.addEventListener("click",function(){
            
            parentLi = this.parentElement;
            newtodo.value = parentLi.children[1].textContent;
            parentLi.style.display = "none";
           
            newtodo.addEventListener("keypress", function(event)
            {
                if(event.keyCode === 13 && parentLi != null)  
                {
                    if(/\S/.test(this.value))
                    {
                        parentLi.children[1].textContent = this.value;
                        newtodo.value = "";                       
                    }
                    parentLi.style.display = "block";
                
                }
            });
        });             
    }

});

$(".fa-plus-circle").click(function(){
    $("#newTodo").fadeToggle();
});