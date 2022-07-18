class BootScene extends Phaser.Scene{
    constructor(){
        super({key : 'BootScene'});
    }

    preload(){

        // -- carrega todas as imagens necessárias ao jogo
        //this.load.image("platform", "assets/new_platform.png");
        
        /*this.load.spritesheet("player", "assets/new_player.png", {
            frameWidth: 24,
            frameHeight: 48
        });
        */

        this.load.image('instructionsButton', 'assets/button_instructions.png');
        this.load.image('menuButton', 'assets/button_menu.png');
        this.load.image('playButton', 'assets/button_play.png');
        this.load.image('board', 'assets/connectFourBoard.png');

        // -- carrega todos os sons necessários ao jogo
        //this.load.audio('pickupSound', [ 'assets/audio/itemPickup.mp3', 'assets/audio/itemPickup.ogg', 'assets/audio/itemPickup.m4a']);
    }
    

    create(){
        //this.music = this.sound.add('gameMusic', { loop: true });
        //this.music.play();

        // -- após carregar todos os recursos necessários, reencaminha o jogador para a MenuScene(menu principal)
        this.scene.start('MenuScene');
    }
}