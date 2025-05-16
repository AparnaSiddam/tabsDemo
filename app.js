const buttons = document.querySelectorAll('.btn');

const contents = document.querySelectorAll('.content');


buttons.forEach(function(btn){
    btn.addEventListener('click', function(e){
     displayData(btn.getAttribute('data-target'));
    })
});

function displayData(target){
    contents.forEach(function(content){
        if(content.id === target){
            content.style.display = 'flex';
        }else{
            content.style.display = 'none';
        }
    })
}

