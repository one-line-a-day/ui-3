class SlideShow {
    constructor(element) {
        this.element = element;
        this.slides = document.querySelectorAll('.slides-img');
        this.leftBtn = document.querySelector('.slides-btn-left');
        this.leftBtn.addEventListener("click", (ev) => this.cycle(ev));
        this.rightBtn = document.querySelector('.slides-btn-right');
        this.rightBtn.addEventListener("click", (ev) => this.cycle(ev));
        this.index=0;
        // fade in first slide
        this.slides[this.index].classList.add('slides-active');
        TweenMax.to('.slides-active',1, {opacity:1});  
    }

    cycle(ev) {
        // fade out
        TweenMax.to('.slides-active',0.5, {opacity:0});
        this.slides[this.index].classList.remove('slides-active');
        // load next slide
        if (ev.srcElement.classList.contains('slides-btn-right')) {
            this.index === this.slides.length-1 ? this.index = 0 : this.index ++;
        }
        else if (ev.srcElement.classList.contains('slides-btn-left')) {
            this.index === 0 ? this.index = this.slides.length-1 : this.index --;
        }
        this.slides[this.index].classList.add('slides-active');
        // fade in 
        TweenMax.to('.slides-active',0.5, {opacity:1,delay:0.2});  
      }
}

let uxSlideShow = document.querySelectorAll('.slide-show');
uxSlideShow.forEach(el => new SlideShow(el));
