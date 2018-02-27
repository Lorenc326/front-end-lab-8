let rootNode = document.getElementById("root");

function createTree(options){
    let ul = document.createElement('ul');
    for(let i = 0; i < options.length; i++){
        let li = document.createElement('li');
        if(options[i].folder){
            // create folder
            li.innerHTML = `<div><i class="material-icons orange">folder</i><span> ${options[i].title}</span></div>`;
            li.firstChild.classList.add('folder');
            if(options[i].children){
                // recursion
                let childUl = createTree(options[i].children);
                li.appendChild(childUl);
            } else{
                // create "folder is empty" string
                li.innerHTML += "<ul><i>Folder is empty</i></ul>";
            }
        } else {
            // create file
            li.innerHTML = `<div><i class="material-icons grey">insert_drive_file</i><span> ${options[i].title}</span></div>`;
        }
        ul.appendChild(li);
    }
    return ul;
}

rootNode.onclick = function (event){
    // make onclick function by event-delegation
    let target = event.target;
    while(target !== this){
        if((target.tagName === 'DIV') && target.classList.contains('folder')){
            if(target.firstChild.innerHTML==='folder'){  // change pic of folder
                target.firstChild.innerHTML='folder_open';
            } else{
                target.firstChild.innerHTML='folder';
            }
            target.parentNode.classList.toggle('folOpened');
            return;
        }
        target = target.parentNode;
    }
}

rootNode.appendChild(createTree(structure));