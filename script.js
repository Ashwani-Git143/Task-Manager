const input=document.getElementById("taskInput");
const button=document.getElementById("addBtn");
const list=document.getElementById("tasklist");


// task logic
button.addEventListener("click",function(){
    // user input the values
    const taskText=input.value;
    if(taskText=="")return;
//after user input create a <li></li>
    const li=document.createElement("li");
    li.innerText=taskText; //add the item in li whatever written 
    // in taskText variable


    // complete botton and append <li>here</li>
    const completeBTN=document.createElement("button");
    completeBTN.innerText="yes";
    li.appendChild(completeBTN);

    // delete botton and append <li>here</li>
    const deleteBTN=document.createElement("button");
    deleteBTN.innerText="NO";
    li.appendChild(deleteBTN);
    // append all in list
    list.appendChild(li);

    // add events 
    //   1 in complete button
    completeBTN.addEventListener("click",function(){
       li.style.textDecoration="line-through";
    });
    //   1 in delete button button
    deleteBTN.addEventListener("click",function(){
        li.remove();
    });
     // start for next input
    input.value="";
});
  
  