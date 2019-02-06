class SlideShow {
    constructor(element) {
        this.element = element;
        this.slides = document.querySelectorAll('.slides-img');
        this.leftBtn = document.querySelector('.slides-btn-left');
        this.leftBtn.addEventListener("click", () => this.cycleLeft());
        this.rightBtn = document.querySelector('.slides-btn-right');
        this.rightBtn.addEventListener("click", () => this.cycleRight());
        this.index=0;
        // fade in first slide
        this.slides[this.index].classList.add('slides-active');
        TweenMax.to('.slides-active',1, {opacity:1});  
    }

    cycleRight () {
        // fade out
        TweenMax.to('.slides-active',0.5, {opacity:0});
        this.slides[this.index].classList.remove('slides-active');
        // load next slide
        this.index === this.slides.length-1 ? this.index = 0 : this.index ++;
        this.slides[this.index].classList.add('slides-active');
        // fade in 
        TweenMax.to('.slides-active',0.5, {opacity:1,delay:0.5});  
      }

    cycleLeft() {
        // fade out
        TweenMax.to('.slides-active',0.5, {opacity:0});
        this.slides[this.index].classList.remove('slides-active');
        // load next slide
        this.index === 0 ? this.index = this.slides.length-1 : this.index --;
        this.slides[this.index].classList.add('slides-active');
        // fade in 
        TweenMax.to('.slides-active',0.5, {opacity:1,delay:0.5});  
    }
}

let uxSlideShow = document.querySelectorAll('.slide-show');
uxSlideShow.forEach(el => new SlideShow(el));
