var n1=document.getElementById("one")
    var list=document.getElementById("three")
   function icon()
    {
        var retrive=n1.value
        if (retrive === "") {
        alert("Please enter a task!"); // Prevent empty tasks
        return;
        }
    
        var listitem=document.createElement("li")
        listitem.innerHTML=retrive +  "<button onclick='del(event)'>Delete</button>"
        list.append(listitem)
        n1.value=""
    }
    function del(event)
    {
       event.target.parentElement.remove()
    }
