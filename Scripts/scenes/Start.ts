/**
 * Julio Vinicius A. de Carvalho
 * 301016383
 * Feb 15, 2020
 * Slot Machine - Assignment 1
 * COMP397 - Web Gaming Development
 */

module scenes
{
    export class Start extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        private _welcomeLabel: objects.Label;
        private _startButton: objects.Button;
        private _machine: objects.Image;
        private _lblMessage: objects.Label;

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {
            super();

            this.Start();
        }

        // PRIVATE METHODS

        // PUBLIC METHODS
        public Start(): void 
        {
            this._machine = new objects.Image(config.Game.ASSETS.getResult("machine"), "machine", 0, 0, false);
             //instantiate a new Text object
            this._welcomeLabel = new objects.Label("Welcome", "40px", "Consolas", "#FFFF00", 205, 175, true);
            this._lblMessage = new objects.Label("Press Start to Begin", "22px", "Consolas", "#FFFF00", 210, 480, true);
            // buttons
             this._startButton = new objects.Button(config.Game.ASSETS.getResult("startButton"), 205, 550, true);

            this.Main();
        }        
        
        public Update(): void 
        {
        }
        
        public Main(): void 
        {
       
            this.addChild(this._machine);
            this.addChild(this._welcomeLabel);
            this.addChild(this._lblMessage);
        
            this.addChild(this._startButton);

            this._startButton.on("click", ()=>{
                config.Game.SCENE = scenes.State.PLAY;
            });

        }

        
    }
}