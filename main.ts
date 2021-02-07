enum ActionKind {
    Walking,
    Idle,
    Jumping,
    WalkingR,
    WalkingL,
    IdleL,
    IdleR
}
namespace SpriteKind {
    export const sky = SpriteKind.create()
}
function initAnimations () {
    walkL = animation.createAnimation(ActionKind.WalkingL, 100)
    animation.attachAnimation(cat, walkL)
    walkL.addAnimationFrame(img`
        . . . . . . . . . . . . . . 
        e e e . . . . e e e . . . . 
        c d d c . . c d d c . . . . 
        c b d d f f d d b c . . . . 
        c 3 b d d b d b 3 c . . . . 
        f b 3 d d d d 3 b f . . . . 
        e d d d d d d d d e . . . . 
        e d f d d d d f d e b f b . 
        f d d f d d f d d f f d f . 
        f b d d b b d d 2 b f d f . 
        . f 2 2 2 2 2 2 d b d b f . 
        . f d d d d d d d f f f . . 
        . f d b d f f f d f . . . . 
        . . f f f f . . f f . . . . 
        `)
    walkL.addAnimationFrame(img`
        . . . . . . . . . . . . . . 
        e e e . . . . e e e . . . . 
        c d d c . . c d d c . . . . 
        c b d d f f d d b c . . . . 
        c 3 b d d b d b 3 c . . . . 
        f b 3 d d d d 3 b f . . . . 
        e d d d d d d d d e . . . . 
        e d f d d d d f d e . b f b 
        f d d f d d f d d f . f d f 
        f b d d b b d d 2 b f f d f 
        . f 2 2 2 2 2 2 d b b d b f 
        . f d d d d d d d f f f f . 
        . . f d b d f d f . . . . . 
        . . . f f f f f f . . . . . 
        `)
    walkR = animation.createAnimation(ActionKind.WalkingR, 100)
    animation.attachAnimation(cat, walkR)
    walkR.addAnimationFrame(img`
        . . . . . . . . . . . . . . 
        . . . . e e e . . . . e e e 
        . . . . c d d c . . c d d c 
        . . . . c b d d f f d d b c 
        . . . . c 3 b d b d d b 3 c 
        . . . . f b 3 d d d d 3 b f 
        . . . . e d d d d d d d d e 
        . b f b e d f d d d d f d e 
        . f d f f d d f d d f d d f 
        . f d f b 2 d d b b d d b f 
        . f b d b d 2 2 2 2 2 2 f . 
        . . f f f d d d d d d d f . 
        . . . . f d f f f d b d f . 
        . . . . f f . . f f f f . . 
        `)
    walkR.addAnimationFrame(img`
        . . . . . . . . . . . . . . 
        . . . . e e e . . . . e e e 
        . . . . c d d c . . c d d c 
        . . . . c b d d f f d d b c 
        . . . . c 3 b d b d d b 3 c 
        . . . . f b 3 d d d d 3 b f 
        . . . . e d d d d d d d d e 
        b f b . e d f d d d d f d e 
        f d f . f d d f d d f d d f 
        f d f f b 2 d d b b d d b f 
        f b d b b d 2 2 2 2 2 2 f . 
        . f f f f d d d d d d d f . 
        . . . . . f d f d b d f . . 
        . . . . . f f f f f f . . . 
        `)
    idleL = animation.createAnimation(ActionKind.IdleL, 100)
    animation.attachAnimation(cat, idleL)
    idleL.addAnimationFrame(img`
        e e e . . . . e e e . . . . 
        c d d c . . c d d c . . . . 
        c b d d f f d d b c . . . . 
        c 3 b d d b d b 3 c . . . . 
        f b 3 d d d d 3 b f . . . . 
        e d d d d d d d d e . . . . 
        e d f d d d d f d e . b f b 
        f d d f d d f d d f . f d f 
        f b d d b b d d 2 f . f d f 
        . f 2 2 2 2 2 2 b b f f d f 
        . f b d d d d d d b b d b f 
        . f d d d d d b d d f f f . 
        . f d f f f d f f d f . . . 
        . f f . . f f . . f f . . . 
        `)
    idleR = animation.createAnimation(ActionKind.IdleR, 100)
    animation.attachAnimation(cat, idleR)
    idleR.addAnimationFrame(img`
        . . . . e e e . . . . e e e 
        . . . . c d d c . . c d d c 
        . . . . c b d d f f d d b c 
        . . . . c 3 b d b d d b 3 c 
        . . . . f b 3 d d d d 3 b f 
        . . . . e d d d d d d d d e 
        b f b . e d f d d d d f d e 
        f d f . f d d f d d f d d f 
        f d f . f 2 d d b b d d b f 
        f d f f b b 2 2 2 2 2 2 f . 
        f b d b b d d d d d d b f . 
        . f f f d d b d d d d d f . 
        . . . f d f f d f f f d f . 
        . . . f f . . f f . . f f . 
        `)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (cat.isHittingTile(CollisionDirection.Bottom)) {
        jumping = true
        cat.vy = -85
        cat.say("weee!", 1000)
    }
})
let heroFacingLeft = false
let jumping = false
let idleR: animation.Animation = null
let idleL: animation.Animation = null
let walkR: animation.Animation = null
let walkL: animation.Animation = null
let cat: Sprite = null
scene.setBackgroundColor(9)
cat = sprites.create(img`
    . . . . e e e . . . . e e e 
    . . . . c d d c . . c d d c 
    . . . . c b d d f f d d b c 
    . . . . c 3 b d b d d b 3 c 
    . . . . f b 3 d d d d 3 b f 
    . . . . e d d d d d d d d e 
    b f b . e d f d d d d f d e 
    f d f . f d d f d d f d d f 
    f d f . f 2 d d b b d d b f 
    f d f f b b 2 2 2 2 2 2 f . 
    f b d b b d d d d d d b f . 
    . f f f d d b d d d d d f . 
    . . . f d f f d f f f d f . 
    . . . f f . . f f . . f f . 
    `, SpriteKind.Player)
cat.ay = 100
scene.cameraFollowSprite(cat)
tiles.setTilemap(tilemap`level1`)
tiles.placeOnTile(cat, tiles.getTileLocation(1, 14))
controller.moveSprite(cat, 50, 0)
initAnimations()
game.onUpdate(function () {
    if (cat.isHittingTile(CollisionDirection.Bottom) && jumping == true) {
        jumping = false
        cat.say("boing!", 500)
    }
    if (cat.vx < 0) {
        heroFacingLeft = true
        animation.setAction(cat, ActionKind.WalkingL)
    } else if (cat.vx > 0) {
        heroFacingLeft = false
        animation.setAction(cat, ActionKind.WalkingR)
    } else {
        if (heroFacingLeft == true) {
            animation.setAction(cat, ActionKind.IdleL)
        } else {
            animation.setAction(cat, ActionKind.IdleR)
        }
    }
})