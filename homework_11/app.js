let rootNode = document.getElementById("root");

function createTree(options){
    let ul = document.createElement('ul');
    for(let i = 0; i < options.length; i++){
        let li = document.createElement('li');
        if(options[i].folder){
            li.innerHTML = `<div><i class="material-icons orange">folder</i><span> ${options[i].title}</span></div>`;     // create folder
            li.firstChild.classList.add('folder');
            if(options[i].children){
                let childUl = createTree(options[i].children);  // recurtion
                li.appendChild(childUl);
            } else{
                li.innerHTML += "<ul><i>Folder is empty</i></ul>";
            }
        } else {
            li.innerHTML = `<div><i class="material-icons grey">insert_drive_file</i><span> ${options[i].title}</span></div>`;    // create file
        }
        ul.appendChild(li);
    }
    return ul;
}

rootNode.onclick = function (event){
    let target = event.target;  // make onclick function by declaration
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