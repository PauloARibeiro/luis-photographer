// THIS IS FOR THE RESET ARROW SCROLL
window.onscroll = function() {				//THIS WILL TRIGGER WHEN THE USER SCROLLS DOWN
	OnScroll();
};

var resetArrow = document.querySelector("#reset-arrow");
var faded = false;							//THIS WILL PREVENT THE FADE ANIMATION FROM PLAYING EVERY TIME THE USER SCROLLS
function OnScroll(){
	if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
	 	resetArrow.classList.remove("hide");
	 	if(faded == false){
	 		FadeIn(resetArrow);
	 		faded = true;
	 	}
	}else{
		if(faded == true){
	 		FadeOut(resetArrow);
	 		faded = false;
	 	}
	}
}

resetArrow.addEventListener("click", function(){
	ResetPosition();
})

function ResetPosition() {
   if (document.body.scrollTop!=0 || document.documentElement.scrollTop !=0){
   		window.scrollBy(0,-55);
    	setTimeout('ResetPosition()',9);
  	}

}
// THIS IS FOR THE RESET ARROW SCROLL

//THIS IS FOR THE HAMBURGER ICON WHEN USER IS USING TABLET OR PHONE
var mobileHamburger = document.querySelector(".icon");

mobileHamburger.addEventListener("click",function(){
	var mobileNavBar = document.querySelector("#mobile-nav-bar");
	if(mobileNavBar.style.height === '0px'){
		mobileHamburger.classList.add("hamActive");
		mobileNavBar.style.height = "230px";
	}else{
		mobileHamburger.classList.remove("hamActive");
		mobileNavBar.style.height = "0px";
	}
});
//THIS IS FOR THE HAMBURGER ICON WHEN USER IS USING TABLET OR PHONE

// THIS IS FOR THE MODAL/IMAGE GALLERY
var modal = document.querySelector(".modal");						//MODAL VARIABLE
var imgs = document.querySelectorAll(".gallery-flexbox img");		//IMAGES ARRAY
var current = document.querySelector(".main-img img");				//CURRENT IMAGE IN THE MODAL
var slideIndex = 1;													//CURRENT INDEX OF THE CURRENT IMAGE IN THE MODAL
var closeBtn = document.querySelector(".close-btn");				//CLOSE BUTTON (X)
var leftArrow = document.querySelector("#left-arrow");				//LEFT ARROW
var rightArrow = document.querySelector("#right-arrow");			//RIGHT ARROW

closeBtn.addEventListener("click", function(){			//THIS IS THE X BUTTON, IT WILL CLOSE THE MODAL
	FadeOut(modal);
});

for(var i = 0; i < imgs.length; i++){					//THIS WILL LOOP THROUGH ALL THE IMAGES AND CHECK WHICH ONE WAS CLICKED, OPENING THAT IMAGE ON THE MODAL
	imgs[i].addEventListener("click",function(e){
		modal.classList.remove("hide");
		current.src = e.target.src;
		slideIndex = Number(e.target.id);
		PopIn(modal);
		return;
	});
}
window.addEventListener("click",function(e){		//IF THE USER CLICKS OUTSIDE THE IMAGE THE MODAL WILL CLOSE
	if(e.target == modal){
		FadeOut(modal);

	}
})

current.addEventListener("click",function(e){		//IF THE USER PRESSES THE MIDDLE OF THE IMAGE THAN IT WILL GO TO THE NEXT IMAGE
	slideIndex++;
	ImageSliderIndex();
})

leftArrow.addEventListener("click", function(){		//THIS IS FOR THE IMAGES GALLERY NAVIGATION, GOING LEFT
	slideIndex--;
	ImageSliderIndex();
});

rightArrow.addEventListener("click", function(){	//THIS IS FOR THE IMAGES GALLERY NAVIGATION, GOING RIGHT
	slideIndex++;
	ImageSliderIndex();
});

function ImageSliderIndex(){						//THIS WILL MAKE SURE THE IMAGE INDEX WONT GO OUT OF BOUNDS
	if(slideIndex >= imgs.length){
		slideIndex = 0;
	}
	if(slideIndex < 0){
		slideIndex = imgs.length -1;
	}
	current.src = imgs[slideIndex].src;
	FadeIn(current);
}
// THIS IS FOR THE MODAL/IMAGE GALLERY


// FORM VALIDATION




// FORM VALIDATION


//ANIMATIONS
function FadeIn(element){
	element.classList.add("fade-in");

	setTimeout(function(e){
		element.classList.remove("fade-in");
	},500);
}

function FadeOut(element){
	element.classList.remove("pop-in");
	element.classList.add("fade-out");

	setTimeout(function(){
		element.classList.remove("fade-out");
		element.classList.add("hide");
	},500);
}

function PopIn(element){
	element.classList.add("pop-in");
}

function SlideIn(element){
	element.classList.remove("hide");
	element.classList.add("slide-in");

	setTimeout(function(){
		element.classList.remove("slide-in");
	},350);
}

function SlideOut(element){
	element.classList.add("slide-out");

	setTimeout(function(){
		element.classList.remove("slide-out");
		element.classList.add("hide");
	},350);
}
