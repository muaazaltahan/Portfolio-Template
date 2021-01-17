var body = document.querySelector('body');
var a = document.querySelectorAll('a');
var nav = document.querySelector('#nav');
var container = document.querySelector('#container');
var header = document.querySelector('header');
var content = document.querySelectorAll('.content');
var footer = document.querySelector('footer');
var socialMenu = document.querySelector('.social');
function blueMode(){
	body.style.color = '#fff';
	nav.style.background = '#005';
	socialMenu.style.background = '#006';
	for(i=0;i<a.length;i++){
		a[i].style.color = '#f00';
	}
	container.style.background = '#229';
	header.style.background = '#004';
	for(i=0;i<content.length;i++){
		content[i].style.background = '#002';
	}
	footer.style.background = '#113';
}
function darkMode(){
	body.style.color = '#fff';
	nav.style.background = '#333';
	socialMenu.style.background = '#444';
	for(i=0;i<a.length;i++){
		a[i].style.color = '#ff0';
	}
	container.style.background = '#666';
	header.style.background = '#222';
	for(i=0;i<content.length;i++){
		content[i].style.background = '#000';
	}
	footer.style.background = '#111';
}
function liteMode(){
	body.style.color = '#000';
	nav.style.background = '#999';
	socialMenu.style.background = '#aaa';
	for(i=0;i<a.length;i++){
		a[i].style.color = '#0ff';
	}
	container.style.background = '#ccc';
	header.style.background = '#eee';
	for(i=0;i<content.length;i++){
		content[i].style.background = '#555';
	}
	footer.style.background = '#233';
}
function menu(){
	if(socialMenu.style.height == '65px'){
		socialMenu.style.height = '0';
	} 
	else {
		socialMenu.style.height = '65px';
	}
}