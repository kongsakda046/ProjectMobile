var studentsArray= [];
var selectedIndex=-1;

function init(){
  document.getElementById("tablerows").innerHTML="";
    if(localStorage.studentsRecord){
      studentsArray=JSON.parse(localStorage.studentsRecord);
        for(var i=0;i<studentsArray.length;i++){
          prepareTableCell(i,studentsArray[i].firstname,studentsArray[i].lastname,studentsArray[i].typebook,studentsArray[i].cost);
        }
    }
}

function onSubmit(){
    var firstName=document.getElementById("firstname").value;
    var lastName=document.getElementById("lastname").value;
    var typeBook=document.getElementById("typebook").value;
    var Cost=document.getElementById("cost").value;

    var stuObj={firstname:firstName,lastname:lastName,typebook:typeBook,cost:Cost};
   /*if(selectedIndex===-1){*/
    studentsArray.push(stuObj);
  // }else{
  //  studentsArray.splice(selectedIndex,1,stuObj);
   //}

    localStorage.studentsRecord=JSON.stringify(studentsArray);

init();    
onClarPressed();
    document.getElementById("firstname").value="";
    document.getElementById("lastname").value="";
document.getElementById("typebook").value="Novel";
document.getElementById("cost").value="";

}
function prepareTableCell(index,firstName,lastName,typeBook,Cost){
    var table = document.getElementById("tablerows");
    var row = table.insertRow();
    var firstNameCell = row.insertCell(0);
    var lastNameCell = row.insertCell(1);
    var typeBookCell = row.insertCell(2);
    var CostCell  = row.insertCell(3);
    var actionCell=row.insertCell(4);

    firstNameCell.innerHTML=firstName;
    lastNameCell.innerHTML=lastName;
    typeBookCell.innerHTML=typeBook;
    CostCell.innerHTML=Cost;
    actionCell.innerHTML='<button onclick="onEdit('+index+')">Edit</button><br/> <button onclick="deleteTableRow('+index+')">Delete</button>';
}
function deleteTableRow(index){ 
//var table=document.getElementById("regtable");
//table.deleteRow(index+1);
studentsArray.splice(index,1);
localStorage.studentsRecord=JSON.stringify(studentsArray);
init();  
}

function onClarPressed(){
    selectedIndex= -1;
    document.getElementById("firstname").value="";
    document.getElementById("lastname").value="";
    document.getElementById("typebook").value="Novel";
    document.getElementById("cost").value="";    
    document.getElementById("submit").innerHTML="input";
}
function onEdit(index){
 
    var stuObj = studentsArray[index];

   document.getElementById("firstname").value= stuObj.firstname;
   document.getElementById("lastname").value=stuObj.lastname;
   document.getElementById("typebook").value=stuObj.typebook;
   document.getElementById("cost").value=stuObj.cost;    
    //document.getElementById("submit").innerHTML=("Edit");

}
