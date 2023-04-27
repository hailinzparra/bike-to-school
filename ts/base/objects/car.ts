class Car extends LaneObject {
    image_name: string = 'car_backview'
    image_speed: number = 0
    image_index: number = math.irange(draw.strips['car_backview'].image_number)

    constructor(position: CoreVec2) {
        super(position)
    }

    update(): void {

    }

}

obj.add_name('car')
