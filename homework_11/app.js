let rootNode = document.getElementById("root");

// Your code goes here
function createTree(options){
    let ul = document.createElement('ul');
    for(let i = 0; i < options.length; i++){
        let li = document.createElement('li');
        if(options[i].folder){
            li.innerHTML = `<i class="material-icons">folder</i>   ${options[i].title}`;
            if(options[i].children){
                let childUl = createTree(options[i].children);
                li.appendChild(childUl);
            } else{
                li.innerHTML += "<ul><li>Folder is empty</li></ul>";
            }
        } else {
            li.innerHTML = `<i class="material-icons">insert_drive_file</i>   ${options[i].title}`;
        }
        ul.appendChild(li);
    }
    return ul;
}

rootNode.appendChild(createTree(structure));