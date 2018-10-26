 var goods = ['Кондиционер Ballu BSWI-EHDA 12N1123123', 'Кондиционер Ballu BSWI-EHDA 15', 'Кондиционер Ballu BS 5678','Кондиционер Ballu BSWI-EHDA 12N1123123']

        var input = document.querySelector('input');
        var searchIcon = document.getElementById('searchIcon');
        var result = document.getElementsByClassName('result')[0];
       
        searchIcon.addEventListener('click', function(){
                  while (result.firstChild) {
                    result.removeChild(result.firstChild);
                }
            var resultValue = goods.filter(function(item){
                var searchValue = item.toLowerCase();
                return searchValue.indexOf(input.value) != -1;
            })
            for(i=0; i<9; i++){
                if(i<resultValue.length){
                    var div = document.createElement('div');
                    div.innerHTML = resultValue[i];
                    result.appendChild(div);
                }
            }
        });

var phoneMenu = document.getElementById('phoneMenu');        

var clickToNumber = document.getElementById('ClickToNumber');

var darkBg = document.getElementsByClassName('darkBg')[0];

phoneMenu.addEventListener('click', showPhoneMenuFunc);

function showPhoneMenuFunc(){
    darkBg.classList.add('shown');
    clickToNumber.classList.add('shown');
}

var closeIcon = document.getElementById('closeIcon');

closeIcon.addEventListener('click', closePhoneMenuFunc);

function closePhoneMenuFunc() {
    darkBg.classList.remove('shown');
    clickToNumber.classList.remove('shown');
}

var menuContainer = document.getElementById('menuContainer');

var logo2 = document.getElementsByClassName('logo2')[0];

logo2.addEventListener('click', showMenuFunc);

function showMenuFunc() {
   menuContainer.classList.add('shown');
}

menuContainer.addEventListener('click', closeMenuFunc);

function closeMenuFunc() {
   menuContainer.classList.remove('shown');
}