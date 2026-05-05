class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;

        this.armLeftX = 390;
        this.armLeftY = 380;

        this.armRightX = 210;
        this.armRightY = 380;

        this.legLeftX = 350;
        this.legLeftY = 480;

        this.legRightX = 250;
        this.legRightY = 480;

        this.headX = 300;
        this.headY = 180;

        this.lefteyeX = 260;
        this.lefteyeY = 160;

        this.righteyeX = 340;
        this.righteyeY = 160;

        this.smilex = 300;
        this.smiley = 220;

        this.fangsx = 300;
        this.fangsy = 220;

        this.nosex = 300;
        this.nosey = 200;

        this.anttennaeLeftX = 260;
        this.anttennaeLeftY = 75;

        this.anttennaeRightX = 340;
        this.anttennaeRightY = 75;
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'


        // Load Monster assets
        //this.load.image("arm_blueB");
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");
        my.sprite.armRight = this.add.sprite(this.armRightX, this.armRightY, "monsterParts", "arm_blueB.png");
        my.sprite.armLeft = this.add.sprite(this.armLeftX, this.armLeftY, "monsterParts", "arm_blueB.png");
        my.sprite.armRight.flipX = true; 

        my.sprite.legLeft = this.add.sprite(this.legLeftX, this.legLeftY, "monsterParts", "leg_blueB.png");
        my.sprite.legRight = this.add.sprite(this.legRightX, this.legRightY, "monsterParts", "leg_blueB.png");
        my.sprite.legRight.flipX = true; 

        my.sprite.head = this.add.sprite(this.headX, this.headY, "monsterParts", "body_greenC.png");
        my.sprite.smile = this.add.sprite(this.smilex, this.smiley, "monsterParts", "mouthC.png");
        my.sprite.lefteye = this.add.sprite(this.lefteyeX, this.lefteyeY, "monsterParts", "eye_angry_blue.png");
        my.sprite.righteye = this.add.sprite(this.righteyeX, this.righteyeY, "monsterParts", "eye_angry_blue.png"); 
        my.sprite.anttennaeLeft = this.add.sprite(this.anttennaeLeftX, this.anttennaeLeftY, "monsterParts", "detail_dark_antenna_large.png");
        my.sprite.anttennaeRight = this.add.sprite(this.anttennaeRightX, this.anttennaeRightY, "monsterParts", "detail_dark_antenna_large.png");
        my.sprite.anttennaeLeft.flipX = true;
        
        my.sprite.fangs = this.add.sprite(this.fangsx, this.fangsy, "monsterParts", "mouth_closed_fangs.png");
        my.sprite.fangs.visible = false; // start with fangs hidden 


        this.keys = this.input.keyboard.addKeys({
            left: Phaser.Input.Keyboard.KeyCodes.A,
            right: Phaser.Input.Keyboard.KeyCodes.D
        });


        // Event input: smile
        this.input.keyboard.on('keydown-S', () => {
        my.sprite.smile.visible = true;
        my.sprite.fangs.visible = false;

        });

        // Event input: smile with fangs
        this.input.keyboard.on('keydown-F', () => {
        my.sprite.fangs.visible = true;
        my.sprite.smile.visible = false;

        });
        

}

    update() {
        let my = this.my;    // create an alias to this.my for readability
        
        if (this.keys.left.isDown) {
            for (let part in my.sprite) {
                my.sprite[part].x -= 2;
            }
        }

        if (this.keys.right.isDown) {
            for (let part in my.sprite) {
                my.sprite[part].x += 2;
            }
        }
    }
}