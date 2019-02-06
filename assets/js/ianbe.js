class SlideShow {
    constructor(element) {
        this.element = element;
        this.slides = document.querySelectorAll('.slides-img');
        this.leftBtn = document.querySelector('.slides-btn-left');
        this.leftBtn.addEventListener("click", () => this.cycleLeft());
        this.rightBtn = document.querySelector('.slides-btn-right');
        this.rightBtn.addEventListener("click", () => this.cycleRight());
        this.index=0;
        this.slides[this.index].classList.add('slides-active');  
    }
    cycleRight () {
        this.slides[this.index].classList.remove('slides-active');  
        this.index === this.slides.length-1 ? this.index = 0 : this.index ++;
        this.slides[this.index].classList.add('slides-active');  
      }
    cycleLeft() {
        this.slides[this.index].classList.remove('slides-active');  
        this.index === 0 ? this.index = this.slides.length-1 : this.index --;
        this.slides[this.index].classList.add('slides-active');  
    }
}

let uxSlideShow = document.querySelectorAll('.slide-show');
uxSlideShow.forEach(el => new SlideShow(el));

