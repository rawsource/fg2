registerPaint('value-bg', class {
    constructor () {
        this.test = 0
    }
    static get inputProperties () {
        return ['--height', '--background-color']
    }
    paint (ctx, geom, properties, args) {
        let height = parseInt(properties.get('--height').toString())

        ctx.fillStyle = properties.get('--background-color').toString()

        ctx.beginPath()
        ctx.moveTo(0, geom.height)
        ctx.lineTo(geom.width, geom.height)
        ctx.lineTo(geom.width, geom.height - height)
        ctx.lineTo(0, geom.height - height)
        ctx.fill()

        ctx.globalCompositeOperation = 'source-atop'

        ctx.fillStyle = 'rgba(0, 0, 0, .25)'
        ctx.beginPath()
        ctx.moveTo(0, 0)
        ctx.lineTo(10, 0)
        ctx.lineTo(10, geom.height)
        ctx.lineTo(0, geom.height)
        ctx.fill()
    }
})
