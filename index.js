let addBtn=document.getElementById("add-btn")

const addNotes=(e)=>{
    e.preventDefault()
let notesObj;
let noteTitle=document.getElementById('note-title').value
let noteText=document.getElementById('note-text').value
if((noteTitle=="")||(noteText==""))
{
    return alert("please add note title and details")
}
let notes=localStorage.getItem('notes')
console.log("addBtn notes",notes)
if(notes==null)
{
    notesObj=[]
}
else
{console.log("else of addnotes")
       notesObj=JSON.parse(notes);
}

let myObj={
    title:noteTitle,
    text:noteText
}
notesObj.push(myObj)
localStorage.setItem('notes',JSON.stringify(notesObj));
document.getElementById('note-title').value=""
document.getElementById('note-text').value=""
showNotes()
}
function showNotes()
{
    let notes=localStorage.getItem('notes');
    if(notes==null)
    {
        notesObj=[]
    }
    else
    {
        notesObj=JSON.parse(notes)
    }
    let html=``;
    notesObj.map((elem,index)=>{

        html+=`
        <div id="note">
<span id="note-counter">${index+1}</span>
 <span id="mynote-title">Title: &nbsp;${elem.title}</span>   
 <p id="mynote-text">Details: &nbsp;${elem.text}</p>
 <div id="btn-container">
<button id="${index}" class="edit" onclick="editfun(this.id)">Edit</button>
<button id="${index}" class="delete" onclick="deletefun(this.id)">delete</button>
</div>
</div>
        
        `
    });
       let notesElem=document.getElementById('notes');
       if(notesObj!=null)
       {
       notesElem.innerHTML=html
       }
       else
       {
        notesElem.innerHTML="no notes yet"
       }
}
addBtn.addEventListener('click',addNotes)
function deletefun(id)
{ id=Number(id);
    
    //console.log("delete fun", Number(idis))
let notes=localStorage.getItem('notes');
if(notes==null)
{
    notesObj=[]
}
else
{
    notesObj=JSON.parse(notes)
}
notesObj.splice(id,1);
//console.log(notesObj)
localStorage.setItem('notes',JSON.stringify(notesObj))
showNotes()
}
function editfun(id)
{
    console.log(id);
    id=Number(id);
    if((document.getElementById('note-title').value!='')||(document.getElementById('note-title').value!=''))
    
    {
       return alert("please clear the title and details text boxes")
    }
    else{
    let notes=localStorage.getItem('notes');
    if(notes==null)
{
    notesObj=[]
}
else
{
    notesObj=JSON.parse(notes)
}
notesObj.map((elem,index)=>{
if(index===id)
{

 document.getElementById('note-title').value=elem.title;
document.getElementById('note-text').value=elem.text;

}
})
notesObj.splice(id,1);
localStorage.setItem('notes',JSON.stringify(notesObj));

console.log(notesObj);
    }

}
showNotes()
