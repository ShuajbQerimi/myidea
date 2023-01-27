$('#butoniservice1').click(function () {
    $('#img1service1').css({
        'display': 'none',
    });
    $('#img2service1').css({
        'display': 'block',
    });
    $('#butoniservice1').css({
        'display': 'none',
    });
    $('#lineserviices1').css({
        'display': 'none',
    });
    $('#textgraphhic1').css({
        'padding-bottom': '100px',
    });
    $('#textservicess1').css({
        'display': 'block',
    });
    $('#kutiatext1').css({
        'background': '#292929',
        'border': '#2px solid #181818',
        'height': '162px',
        'width': '1060px',
        'margin-bottom': '12px',
        
    });
});
$('#butoniservice2').click(function () {
    $('#img1service2').css({
        'display': 'none',
    });
    $('#img2service2').css({
        'display': 'block',
    });
    $('#butoniservice2').css({
        'display': 'none',
    });
    $('#lineserviices2').css({
        'display': 'none',
    });
    $('#textgraphhic2').css({
        'padding-bottom': '100px',
    });
    $('#textservicess2').css({
        'display': 'block',
    });
    $('#kutiatext2').css({
        'background': '#292929',
        'border': '#2px solid #181818',
        'height': '162px',
        'width': '1060px',
        'margin-bottom': '12px',
        
    });
});
$('#butoniservice3').click(function () {
    $('#img1service3').css({
        'display': 'none',
    });
    $('#img2service3').css({
        'display': 'block',
    });
    $('#butoniservice3').css({
        'display': 'none',
    });
    $('#lineserviices3').css({
        'display': 'none',
    });
    $('#textgraphhic3').css({
        'padding-bottom': '100px',
    });
    $('#textservicess3').css({
        'display': 'block',
    });
    $('#kutiatext3').css({
        'background': '#292929',
        'border': '#2px solid #181818',
        'height': '162px',
        'width': '1060px',
        'margin-bottom': '12px',
        
    });
});
$('#butoniservice4').click(function () {
    $('#img1service4').css({
        'display': 'none',
    });
    $('#img2service4').css({
        'display': 'block',
    });
    $('#butoniservice4').css({
        'display': 'none',
    });
    $('#lineserviices4').css({
        'display': 'none',
    });
    $('#textgraphhic4').css({
        'padding-bottom': '100px',
    });
    $('#textservicess4').css({
        'display': 'block',
    });
    $('#kutiatext4').css({
        'background': '#292929',
        'border': '#2px solid #181818',
        'height': '162px',
        'width': '1060px',
        'margin-bottom': '120px',
        
    });
});


let active = false

function toggle() {
    let toggle = document.querySelector('.toggle')
    let oni = document.querySelector('#onpart')
    let offi = document.querySelector('#offpart')

    active = !active
    if (active) {
        toggle.classList.add('active')
        oni.style.display = 'block';
        offi.style.display = 'none';
    } else {
        toggle.classList.remove('active')


        oni.style.display = 'none';
        offi.style.display = 'block';
    }
}

$(document).ready(function(){
	$('#showtext1').hover(function(){ 
        $('#spani1').toggle(300);
    	
	}, function(){
        $('#spani1').toggle(300);
    });

    $('#showtext2').hover(function(){ 
    	$('#spani2').show(300);
	}, function(){
        $('#spani2').hide(300);
    });

    $('#showtext3').hover(function(){ 
    	$('#spani3').show(300);
	}, function(){
        $('#spani3').hide(300);
    });

    $('#showtext4').hover(function(){ 
    	$('#spani4').show(300);
	}, function(){
        $('#spani4').hide(300);
    });
});

