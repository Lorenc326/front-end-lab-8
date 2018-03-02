let root = document.getElementById('root');


function defaultPage(){
    // refresh
    window.location.hash = '';
    root.innerHTML = '';

    let container = document.createElement('div');
    container.classList.add('thumbnails');
    root.appendChild(container);
    let header = document.createElement('h1');
    header.innerHTML = "Most popular tanks";
    container.appendChild(header);
    let list = document.createElement('div');
    container.appendChild(list);
    list.classList.add('tanksList');

    for(let i = 0; i < tanks.length; i++){
        let item = document.createElement('div');
        item.innerHTML = `<img class="tank" src="${tanks[i].preview}">
<img class="flag" src="${tanks[i].country_image}">
<span class="model" title="${tanks[i].model}">${tanks[i].model}</span>`
        item.onclick = function(){
            location.hash = tanks[i].model;
        };
        list.appendChild(item);
    }

    return;
}

defaultPage();