"use strict";
/**
 * Julio Vinicius A. de Carvalho
 * 301016383
 * Feb 15, 2020
 * Slot Machine - Assignment 1
 * COMP397 - Web Gaming Development
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var Start = /** @class */ (function (_super) {
        __extends(Start, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function Start() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        // PUBLIC METHODS
        Start.prototype.Start = function () {
            this._machine = new objects.Image(config.Game.ASSETS.getResult("machine"), "machine", 0, 0, false);
            //instantiate a new Text object
            this._welcomeLabel = new objects.Label("Welcome", "40px", "Consolas", "#FFFF00", 205, 175, true);
            this._lblMessage = new objects.Label("Press Start to Begin", "22px", "Consolas", "#FFFF00", 210, 480, true);
            // buttons
            this._startButton = new objects.Button(config.Game.ASSETS.getResult("startButton"), 205, 550, true);
            this.Main();
        };
        Start.prototype.Update = function () {
        };
        Start.prototype.Main = function () {
            this.addChild(this._machine);
            this.addChild(this._welcomeLabel);
            this.addChild(this._lblMessage);
            this.addChild(this._startButton);
            this._startButton.on("click", function () {
                config.Game.SCENE = scenes.State.PLAY;
            });
        };
        return Start;
    }(objects.Scene));
    scenes.Start = Start;
})(scenes || (scenes = {}));
//# sourceMappingURL=Start.js.map