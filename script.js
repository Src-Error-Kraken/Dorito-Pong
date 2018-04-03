$(document).ready(() =>{
	let goBack;
	let rightvalue =100;

	$(document).on('keydown', () => {
		if(event.key === "ArrowUp") {
			if(rightvalue > 0){
			rightvalue -=25;
			$('.rightP').css('top', `${rightvalue}px`)
			}
		}
		if(event.key === "ArrowDown"){
			if(rightvalue < 300){
			rightvalue +=25;
			$('.rightP').css('top', `${rightvalue}px`)
			}
		}
	})

let leftvalue =100
$(document).on('keypress', () => {
    if(event.key === "w"){
        if(leftvalue > 0){
        leftvalue -=25;
        $('.leftP').css('top', `${leftvalue}px`);
    }
}
    if(event.key === "s"){
        if(leftvalue < 300){
        leftvalue +=25;
        $('.leftP').css('top', `${leftvalue}px`);
    	}
	}
})
})

function game(){
	
	let pBall =  document.getElementById('ball');
	let pongPos = 0;
	let gameBegin = setInterval (move, 3);
	goBack = false;
	let goUp = false;

	function move() {
		if(goBack && pongPos > 0) {
			pongPos--;
			pBall.style.left= pongPos + 'px';
			pBall.style.top= pongPos + 'px'
			if( pongPos === 0){
				goBack = false;
			}
		}

		else if (pongPos >= 675) {
			goBack = true;
		}

		else {
			pongPos++;
			pBall.style.left= pongPos + 'px';
			// pBall.style.top= pongPos + 'px';
			
		}
	detect();
	}

}
		function detect(){
			console.log('all')
			let circle = $('#ball')[0].getBoundingClientRect();
			let pLeft = $('.leftP')[0].getBoundingClientRect();
			let pRight = $('.rightP')[0].getBoundingClientRect();
			let border = $('.board')[0].getBoundingClientRect();
			// when ball reaches 30px yAxis on the left and 645 on yAxis on the right there should be bounce
			if (pLeft.x < circle.x + circle.width &&
				pLeft.x + pLeft.width > circle.x &&
				pLeft.y < pLeft.y + circle.height &&
				pLeft.height + pLeft.y > circle.y){
			
			}	

			if(pRight.x < circle.x + circle.width &&
			   pRight.x + pRight.width > circle.x &&
			   pRight.y < pRight.y + circle.height &&
			   pRight.height + pRight.y > circle.y){
				;
			}

			if (border.x < circle.x + circle.width &&
				border.x + border.with > circle.x &&
				border.y < border.y + circle.height &&
				border.height + border.y > circle.y){
					alert('point');
				}
				

		}