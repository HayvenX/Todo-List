const list = document.getElementById("list")
const AddToList = document.getElementById("add-to-list")
const ClearList = document.getElementById("clear-list")
const Input = document.getElementById("input")

function AddtoList()
{
    const listBlock = document.createElement("div")
    listBlock.style.marginBottom = "10px"
    listBlock.style.display = "flex"
    listBlock.style.cursor = "text"
    list.appendChild(listBlock)


    const ListItem = document.createElement("li")
    ListItem.innerText = Input.value
    ListItem.style.width = "300px"
    listBlock.appendChild(ListItem)
    
    Input.value = ""

    listBlock.onclick = function()
    {
        this.savedText = ListItem.innerText
        if(listBlock.childElementCount == 1)
        {
            let editing = document.createElement("input")
            editing.value = ListItem.innerText
            editing.style.width = "300px"
            editing.style.backgroundColor = "indigo"
            editing.style.color = "white"
            editing.style.border = "none"
            editing.style.outline = "none"
            editing.style.fontSize = "24px"
            editing.setAttribute("autofocus", "")
            listBlock.appendChild(editing)
            

            const tick = document.createElement("div")
            tick.style.width = "33px"
            tick.style.height = "33px"
            tick.style.backgroundColor = "limegreen"
            tick.style.marginRight = "10px"
            tick.style.cursor = "pointer"
            listBlock.appendChild(tick)
        
            const cancel = document.createElement("div")
            cancel.style.width = "33px"
            cancel.style.height = "33px"
            cancel.style.backgroundColor = "firebrick"
            cancel.style.cursor = "pointer"
            listBlock.appendChild(cancel)
            
            tick.onclick = function()
            {
                listBlock.removeChild(tick)
                setTimeout(function DeleteCancel()
                {
                    cancel.remove()
                }
                )

                listBlock.appendChild(ListItem)
                ListItem.innerText = editing.value
                editing.remove()
            }

            cancel.onclick = function()
            {
                tick.remove()
                cancel.remove()
                setTimeout(function RemoveEditing()
                {
                    editing.remove()
                })
        
                listBlock.appendChild(ListItem)
                ListItem.innerText = listBlock.savedText
            }
            listBlock.removeChild(ListItem)
        }
    }
}

function clearList()
{
    while(list.childElementCount > 0)
    {
        list.removeChild(list.firstChild)
    }
}

AddToList.onclick = function()
{
    if(Input.value !== "")
    {
        AddtoList()
    }
}
ClearList.onclick = function()
{
    clearList()
}
