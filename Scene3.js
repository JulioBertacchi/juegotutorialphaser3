class Scene3 extends Phaser.Scene {
    constructor() {
      super("creditos");
    }

    preload ()
    {
      this.load.image('logo2D', 'assets/logo2D.png');   
    }
    
    create() {
      this.add.image(400, 300, 'final');
      this.add.image(400, 100, 'logo2D');


      var puntajefinal = this.add.text(16, 16, 'Puntuacion: ' + score,  {fontFamily:"Times New Roman", fontSize: 70, color: 'white' });

      Phaser.Display.Align.In.Center(puntajefinal, this.add.zone(400, 300, 800, 600));

      var perdiste = this.add.text(400,300, "Perdiste", {fontFamily:"Times New Roman", fontSize: 40, color: "white"})
      Phaser.Display.Align.In.Center(perdiste, this.add.zone(400, 50, 800, 600));

      var restartButton = this.add.text(700, 500, 'Reiniciar', { fontFamily:"Times New Roman", fontSize: 40, color: 'white' })
      .setInteractive()
      .on('pointerdown', () => this.reiniciar() );
      Phaser.Display.Align.In.Center(restartButton, this.add.zone(400, 300, 800, 600));
    }

    reiniciar() {
      this.scene.start('juego');
    }

    
}
  