<script>
		const navSlide = () => {
			const burger = document.querySelector('.burger');
			const nav = document.querySelector('.nav-links');
			const navLinks = document.querySelectorAll('.nav-links li');
			burger.addEventListener('click',() => {
			
			//Toggle Nav
			nav.classList.toggle('nav-active');
			
			//Animate Links
			navLinks.forEach((link, RightToLeftNavigation) => {
			if(link.style.animation){
				link.style.animation = '';}
			else{link.style.animation = 'navLinkFade 0.5s ease forwards $(RightToLeftNavigation / 16)s';}
			});
			
			//Burger animation
			burger.classList.toggle('toggle');
		});
	}
			navSlide();
			var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("HeaderSpace").style.top = "0";
  } else {
    document.getElementById("HeaderSpace").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}
		</script>