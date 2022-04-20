const menutoggle = document.getElementById('menu-toggle');
const navigasi = document.getElementsByClassName('nav-1')[0];
const close = document.getElementById('close');

menutoggle.addEventListener('click', function(){
	navigasi.classList.add('slide');

});

close.addEventListener('click',function(){
	navigasi.classList.remove('slide');
});