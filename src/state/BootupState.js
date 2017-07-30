BootupState = function(){ }

BootupState.prototype = {
    preload: function(){
        console.log('preload bootup state');

        //configure the scaling to fit the window
        game.scale.maxHeight = Config.size.height;
        game.scale.maxWidth = Config.size.width;
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.stage.smoothed = false;

        game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
    },

    create: function(){
        console.log('create bootup state');
    },

    update: function(){
        if(window.location.search.indexOf('forceSplash') == -1 && isDev()){
            console.log('Skipping splash and kicking off load state');
            game.state.start('LoadState');
        }else{
            console.log('Kicking off splash')
            game.state.start('SplashState');
        }
    },

    render: function(){

    }
}