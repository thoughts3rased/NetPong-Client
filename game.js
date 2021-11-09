Crafty.scene('MainMenu', function() {
    Crafty.load(['Assets/Textures/TitleText.gif'], function() {
        Crafty.sprite(0, 0, 'Assets/Textures/TitleText.gif').color('none')
    })
})

Crafty.init(1920, 1080, document.getElementById('game'));
Crafty.background('rgb(0,0,0)')
Crafty.scene('MainMenu')