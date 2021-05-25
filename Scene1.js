class Scene1 extends Phaser.Scene {
    constructor() {
      super('inicio');
    }

    preload ()
    {
      //se PUEDEN cargar los recursos de esta misma escena o de cualquier otra
      
      this.load.image('final', 'assets/final.jpg');
      this.load.image('sky2', 'assets/sky.jpg');
      this.load.image('ground', 'assets/platform.png');
      this.load.image('star', 'assets/star.png');
      this.load.image('star2', 'assets/star2.png');
      this.load.image('bomb', 'assets/bomb.png');
      this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });
      this.load.image("logo", "./assets/logo2.jpg")
    }

    create() {

      //  Our player animations, turning, walking left and walking right.
      this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
      });

      this.anims.create({
        key: 'turn',
        frames: [ { key: 'dude', frame: 4 } ],
        frameRate: 20
      });

      this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
      });

      var logo = this.add.image(400, 300, 'logo')
   
      var startButton = this.add.text(700, 500, 'Jugar', { fontFamily:"Times New Roman", fontSize: 70, color: 'white' })
        .setInteractive()
        .on('pointerdown', () => this.iniciar() );
        Phaser.Display.Align.In.Center(startButton, this.add.zone(400, 100, 100, 100));
      
         

    }
    iniciar(){
      this.scene.start('juego');
      console.log("se inicio el juego")
    }
  }