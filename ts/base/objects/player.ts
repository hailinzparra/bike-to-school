class XSwipePointer {
    is_swiped: boolean = false
    constructor(
        public swipe_threshold: number
    ) { }
    update() {
        if (this.is_swiped) {
            if (!input.pointer_hold()) {
                this.is_swiped = false
            }
        }
    }
    get_swipe_input(): number {
        let xinput = 0
        const xdif = input.pointer_position.x - input.pointer_previous_position.x
        if (input.pointer_hold() && !this.is_swiped && Math.abs(xdif) >= this.swipe_threshold) {
            xinput = Math.sign(xdif)
            this.is_swiped = true
        }
        return xinput
    }
}

class Player extends CoreGameObject {
    swipe_pointer: XSwipePointer = new XSwipePointer(10)
    constructor(position: CoreVec2) {
        super(position)
    }
    update(): void {
        this.swipe_pointer.update()
        this.swipe_pointer.swipe_threshold = stage.size.x / 20
        if (this.swipe_pointer.get_swipe_input() < 0) {
            this.position.x -= 100
        }
        else if (this.swipe_pointer.get_swipe_input() > 0) {
            this.position.x += 100
        }
    }
    render(): void {
        draw.set_font(font.m)
        draw.set_hvalign('left', 'top')
        draw.set_color('white')
        draw.text(40, 40, `thresh: ${this.swipe_pointer.swipe_threshold}\n${this.swipe_pointer.get_swipe_input()}`)
        draw.rect(this.x - 32, this.y - 32, 32, 32)
    }
}

obj.add_name('player')
