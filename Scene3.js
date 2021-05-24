class Scene3 extends Phaser.Scene {
    constructor() {
      super("creditos");
    }

    preload ()
    {
      this.load.image('logo2D', 'assets/logo2D.png');   
    }
    
    create() {
      this.add.image(400, 300, 'sky2');
      this.add.image(400, 568, 'ground').setScale(2)
      this.add.image(400, 100, 'logo2D');


      var puntajefinal = this.add.text(0, 0, 'Score: ' + score,  { fontFamily: 'Arial', fontSize: 70, color: '#000000' });
      //scene.add.zone(x, y, width, height)
        // X Y del centro del rectangulo invisible
        // width, height del rectangulo invisible
      Phaser.Display.Align.In.Center(puntajefinal, this.add.zone(400, 300, 800, 600));

      var perdiste =this.add.text(400,300, "PERDISTE", {fontFamily:"Arial", fontSize: 40, color: "black"})
      Phaser.Display.Align.In.Center(perdiste, this.add.zone(400, 50, 800, 600));

      var restartButton = this.add.text(700, 500, 'Reiniciar', { fontFamily: 'Arial', fontSize: 40, color: '#000000' })
      .setInteractive()
      .on('pointerdown', () => this.reiniciar() );
      Phaser.Display.Align.In.Center(restartButton, this.add.zone(400, 300, 800, 600));
    }

    reiniciar() {
      this.scene.start('juego');
    }

    
}
  