const list = document.getElementById("list")
const AddToList = document.getElementById("add-to-list")
const ClearList = document.getElementById("clear-list")
const Input = document.getElementById("input")

function AddtoList()
{
    let ListItem = document.createElement("li")
    ListItem.innerText = Input.value
    list.appendChild(ListItem)
    Input.value = ""
}

function clearList()
{
    while(list.childNodes.length > 0)
    {
        list.removeChild(list.firstChild)
    }
}

AddToList.onclick = function()
{
    if(Input.value == "")
    {
        
    }
    else
    {
        AddtoList()
    }
}

ClearList.onclick = function()
{
    clearList()
}