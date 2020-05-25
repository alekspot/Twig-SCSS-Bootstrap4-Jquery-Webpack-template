class Dom {
    constructor(selector){
        this.$el = document.querySelector(selector)
    }

    addClass(className) { 
        this.$el.classList.add(className)
    }

    removeClass(className) {
        this.$el.classList.remove(className)
    }

    toggleClass(className) {
       const classes = this.$el.className;
       const arrClass = classes.split(' ');
       const hasClass = arrClass.includes(className);
        if (hasClass) {
            this.removeClass(className)
        } else this.addClass(className)
    }

    click(fn) {
        this.$el.onclick = fn
    }

    html(text) {
        if(text === undefined) {
            return this.$el.innerHTML
        } else this.$el.innerHTML = text
    }

    append(element){
        this.$el.append(element.$el)
    }
}

export function Doollar(selector){
    return new Dom(selector)
}
