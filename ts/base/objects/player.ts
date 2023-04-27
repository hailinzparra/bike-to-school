class Player extends LaneObject {
    constructor(position: CoreVec2) {
        super(position)
    }

    get_steer_input(): number {
        if (input.pointer_down()) {
            if (input.pointer_position.x < stage.size.x / 2) return -1
            if (input.pointer_position.x > stage.size.x / 2) return 1
        }
        return 0
    }

    update(): void {
        const steer_input = this.get_steer_input()
        if (steer_input < 0) {
            this.lane--
        }
        else if (steer_input > 0) {
            this.lane++
        }
        this.lane = math.clamp(this.lane, -1, 1)
    }

    render(): void {
        draw.rect(this.x, this.y, 40, 40)
    }
}

obj.add_name('player')
