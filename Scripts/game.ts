/**
 * Julio Vinicius A. de Carvalho
 * 301016383
 * Feb 15, 2020
 * Slot Machine - Assignment 1
 * COMP397 - Web Gaming Development
 */


//IIFE - Immediately Invoked Function Expression
//means -> self-executing anonymous function
let Game = (function(){

    // variable declarations
    let canvas:HTMLCanvasElement = document.getElementsByTagName('canvas')[0];
    let stage:createjs.Stage;
    
    let currentSceneState:scenes.State;
    let currentScene: objects.Scene;

    let assets: createjs.LoadQueue;

    let assetManifest = 
    [
        {id:"banana", src:"./Assets/images/banana.png"},
        {id:"bar", src:"./Assets/images/bar.png"},
        {id:"bell", src:"./Assets/images/bell.png"},
        {id:"blank", src:"./Assets/images/blank.png"},
        {id:"cherry", src:"./Assets/images/cherry.png"},
        {id:"grapes", src:"./Assets/images/grapes.png"},
        {id:"orange", src:"./Assets/images/orange.png"},
        {id:"seven", src:"./Assets/images/seven.png"},
        {id:"machine", src:"./Assets/images/machine.jpg"},
        
        {id:"keyup", src:"./Assets/images/keysup.png"},
        {id:"keydown", src:"./Assets/images/keysdown.png"},
        {id:"keyleft", src:"./Assets/images/keysleft.png"},
        {id:"keyright", src:"./Assets/images/keysright.png"},
        {id:"spin", src:"./Assets/images/spin.png"},
        {id:"exitButton", src:"./Assets/images/exitButton.png"},
        {id:"resetButton", src:"./Assets/images/resetButton.png"},

        {id:"button", src:"./Assets/images/button.png"},
        {id:"placeholder", src:"./Assets/images/placeholder.png"},
        {id:"startButton", src:"./Assets/images/startButton.png"},
        {id:"nextButton", src:"./Assets/images/nextButton.png"},
        {id:"backButton", src:"./Assets/images/backButton.png"}
    ];

    function Preload():void
    {
        console.log(`%c Preload runs...`, "color: green; font-size: 16px;");
        assets = new createjs.LoadQueue(); // asset container
        config.Game.ASSETS = assets; // make a reference to the assets in the global config
        assets.installPlugin(createjs.Sound); // supports sound preloading
        assets.loadManifest(assetManifest);
        assets.on("complete", Start);
    }

    /**
     * This method initializes the CreateJS (EaselJS) Library
     * It sets the framerate to 60 FPS and sets up the main Game Loop (Update)
     */
    function Start():void
    {
        console.log(`%c Start method ran`, "color: blue; font-size: 20px; font-weight: bold;");
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = config.Game.FPS;
        createjs.Ticker.on('tick', Update);
        stage.enableMouseOver(20);
        
        currentSceneState = scenes.State.NO_SCENE;
        config.Game.SCENE = scenes.State.START;
    }

    /**
     * This function is triggered every frame (16ms)
     * The stage is then erased and redrawn 
     */
    function Update():void
    {
        if(currentSceneState != config.Game.SCENE)
        {
            Main();
        }

        currentScene.Update();
        stage.update();
    }

    /**
     * This is the main function of the Game (where all the fun happens)
     *
     */
    function Main():void
    {
        console.log(`%c Scene Switched...`, "color: green; font-size: 16px;");

        // clean up
        if(currentSceneState != scenes.State.NO_SCENE)
        {
            currentScene.removeAllChildren();
            stage.removeAllChildren();
        }

        // switch to the new scene
        //currentScene = new scenes.Play(); 
        switch(config.Game.SCENE)
        {
            case scenes.State.START:
                console.log("switch to Start Scene");
                currentScene = new scenes.Start(); 
                break;
            case scenes.State.PLAY:
                console.log("switch to Play Scene");
                currentScene = new scenes.Play(); 
                break;
            case scenes.State.END:
                console.log("switch to End Scene");
                currentScene = new scenes.End(); 
                break;
        }

        currentSceneState = config.Game.SCENE;
        stage.addChild(currentScene);

    }

    window.addEventListener('load', Preload);


})();