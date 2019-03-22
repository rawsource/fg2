registerPaint('slanted-bg', class {
    constructor () {
        this.test = 0
    }
    static get inputProperties () {
        return ['--background-color']
    }
    paint (ctx, geom, properties, args) {
        ctx.fillStyle = properties.get('--background-color').toString()

        ctx.beginPath()
        ctx.moveTo(0, 0)
        ctx.lineTo(geom.width - 5, 0)
        ctx.lineTo(geom.width, 5)
        ctx.lineTo(geom.width, geom.height)
        ctx.lineTo(0, geom.height)
        ctx.fill()

        ctx.globalCompositeOperation = 'source-atop'

        ctx.fillStyle = 'rgba(0, 0, 0, .25)'
        ctx.beginPath()
        ctx.moveTo(0, geom.height - 3)
        ctx.lineTo(geom.width, geom.height - 3)
        ctx.lineTo(geom.width, geom.height)
        ctx.lineTo(0, geom.height)
        ctx.fill()
    }
})
