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
    var Play = /** @class */ (function (_super) {
        __extends(Play, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function Play() {
            var _this = _super.call(this) || this;
            _this.playerMoney = 0;
            _this.winnings = 0;
            _this.jackpot = 5000;
            _this.turn = 0;
            _this.playerBet = 0;
            _this.winNumber = 0;
            _this.lossNumber = 0;
            //private spinResult;
            //private fruits = "";
            _this.winRatio = 0;
            _this.grapes = 0;
            _this.bananas = 0;
            _this.oranges = 0;
            _this.cherries = 0;
            _this.bars = 0;
            _this.bells = 0;
            _this.sevens = 0;
            _this.blanks = 0;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        // PUBLIC METHODS
        Play.prototype.Start = function () {
            this._machine = new objects.Image(config.Game.ASSETS.getResult("machine"), "machine", 0, 0, false);
            this._reel1 = new objects.Image(config.Game.ASSETS.getResult("blank"), "reel2", 124, 307, false);
            this._reel2 = new objects.Image(config.Game.ASSETS.getResult("blank"), "reel2", 186, 307, false);
            this._reel3 = new objects.Image(config.Game.ASSETS.getResult("blank"), "reel3", 248, 307, false);
            //instantiate a new Text object
            this._welcomeLabel = new objects.Label("Welcome", "40px", "Consolas", "#FFFF00", 205, 175, true);
            this._lblBet = new objects.Label("Player Bet: $", "22px", "Consolas", "#FFFF00", 90, 470, false);
            this._lblJackpot = new objects.Label("Jackpot: ", "14px", "Consolas", "#FFFF00", 90, 520, false);
            this._lblTurns = new objects.Label("Turns: ", "14px", "Consolas", "#FFFF00", 90, 540, false);
            this._lblWins = new objects.Label("Wins: ", "14px", "Consolas", "#FFFF00", 90, 560, false);
            this._lblLosses = new objects.Label("Losses: ", "14px", "Consolas", "#FFFF00", 90, 580, false);
            this._lblWinRatio = new objects.Label("Win Ratio: ", "14px", "Consolas", "#FFFF00", 90, 600, false);
            this._lblMessage = new objects.Label("Make your bet!", "20px", "Consolas", "#FFFF00", 215, 250, true);
            // buttons
            this._startButton = new objects.Button(config.Game.ASSETS.getResult("spin"), 270, 410, true);
            this._exitButton = new objects.Button(config.Game.ASSETS.getResult("exitButton"), 120, 410, true);
            this._resetButton = new objects.Button(config.Game.ASSETS.getResult("resetButton"), 170, 410, true);
            this._upBetButton = new objects.Button(config.Game.ASSETS.getResult("keyup"), 306, 510, true);
            this._downBetButton = new objects.Button(config.Game.ASSETS.getResult("keydown"), 306, 565, true);
            this.Main();
        };
        Play.prototype.Update = function () {
        };
        Play.prototype.showPlayerStats = function () {
            this._welcomeLabel.setText("Money: $" + this.playerMoney);
            this._lblJackpot.setText("Jackpot: " + this.jackpot);
            this._lblTurns.setText("Turn: " + this.turn);
            this._lblWins.setText("Wins: " + this.winNumber);
            this._lblLosses.setText("Losses: " + this.lossNumber);
            this._lblBet.setText("Player Bet: $" + this.playerBet);
            this._lblWinRatio.setText("Win Ratio: " + (this.winRatio * 100).toFixed(2) + "%");
        };
        /* Utility function to reset all fruit tallies */
        Play.prototype.resetFruitTally = function () {
            this.grapes = 0;
            this.bananas = 0;
            this.oranges = 0;
            this.cherries = 0;
            this.bars = 0;
            this.bells = 0;
            this.sevens = 0;
            this.blanks = 0;
        };
        /* Utility function to reset the player stats */
        Play.prototype.resetAll = function () {
            this.playerMoney = 0;
            this.winnings = 0;
            this.jackpot = 5000;
            this.turn = 0;
            this.playerBet = 0;
            this.winNumber = 0;
            this.lossNumber = 0;
            this.winRatio = 0;
        };
        /* Check to see if the player won the jackpot */
        Play.prototype.checkJackPot = function () {
            /* compare two random values */
            var jackPotTry = Math.floor(Math.random() * 51 + 1);
            var jackPotWin = Math.floor(Math.random() * 51 + 1);
            if (jackPotTry == jackPotWin) {
                alert("You Won the $" + this.jackpot + " Jackpot!!");
                this.playerMoney += this.jackpot;
                this.jackpot = 1000;
            }
        };
        /* Utility function to show a win message and increase player money */
        Play.prototype.showWinMessage = function () {
            //this.playerMoney += this.winnings;
            this._lblMessage.setText("You Won: $" + this.winnings);
            this.resetFruitTally();
            this.checkJackPot();
        };
        /* Utility function to show a loss message and reduce player money */
        Play.prototype.showLossMessage = function () {
            //this.playerMoney -= this.playerBet;
            this._lblMessage.setText("You Lost!");
            this.resetFruitTally();
        };
        /* Utility function to check if a value falls within a range of bounds */
        Play.prototype.checkRange = function (value, lowerBounds, upperBounds) {
            if (value >= lowerBounds && value <= upperBounds) {
                return true;
            }
            else {
                return false;
            }
        };
        /* When this function is called it determines the betLine results.
        e.g. Bar - Orange - Banana */
        Play.prototype.Reels = function () {
            var betLine = [" ", " ", " "];
            var outCome = [0, 0, 0];
            for (var spin = 0; spin < 3; spin++) {
                outCome[spin] = Math.floor((Math.random() * 65) + 1);
                if (this.checkRange(outCome[spin], 1, 27)) { // 41.5% probability
                    betLine[spin] = "blank";
                    this.blanks++;
                }
                if (this.checkRange(outCome[spin], 28, 37)) { // 15.4% probability
                    betLine[spin] = "grapes";
                    this.grapes++;
                }
                if (this.checkRange(outCome[spin], 38, 46)) { // 13.8% probability
                    betLine[spin] = "banana";
                    this.bananas++;
                }
                if (this.checkRange(outCome[spin], 47, 54)) { // 12.3% probability
                    betLine[spin] = "orange";
                    this.oranges++;
                }
                if (this.checkRange(outCome[spin], 55, 59)) { //  7.7% probability
                    betLine[spin] = "cherry";
                    this.cherries++;
                }
                if (this.checkRange(outCome[spin], 60, 62)) { //  4.6% probability
                    betLine[spin] = "bar";
                    this.bars++;
                }
                if (this.checkRange(outCome[spin], 63, 64)) { //  3.1% probability
                    betLine[spin] = "bell";
                    this.bells++;
                }
                if (this.checkRange(outCome[spin], 65, 65)) { //  1.5% probability
                    betLine[spin] = "seven";
                    this.sevens++;
                }
            }
            this._reel1.setImage(config.Game.ASSETS.getResult(betLine[0]));
            this._reel2.setImage(config.Game.ASSETS.getResult(betLine[1]));
            this._reel3.setImage(config.Game.ASSETS.getResult(betLine[2]));
            this.determineWinnings();
            this.showPlayerStats();
        };
        /* This function calculates the player's winnings, if any */
        Play.prototype.determineWinnings = function () {
            if (this.blanks == 0) {
                if (this.grapes == 3) {
                    this.winnings = this.playerBet * 10;
                }
                else if (this.bananas == 3) {
                    this.winnings = this.playerBet * 20;
                }
                else if (this.oranges == 3) {
                    this.winnings = this.playerBet * 30;
                }
                else if (this.cherries == 3) {
                    this.winnings = this.playerBet * 40;
                }
                else if (this.bars == 3) {
                    this.winnings = this.playerBet * 50;
                }
                else if (this.bells == 3) {
                    this.winnings = this.playerBet * 75;
                }
                else if (this.sevens == 3) {
                    this.winnings = this.playerBet * 100;
                }
                else if (this.grapes == 2) {
                    this.winnings = this.playerBet * 2;
                }
                else if (this.bananas == 2) {
                    this.winnings = this.playerBet * 2;
                }
                else if (this.oranges == 2) {
                    this.winnings = this.playerBet * 3;
                }
                else if (this.cherries == 2) {
                    this.winnings = this.playerBet * 4;
                }
                else if (this.bars == 2) {
                    this.winnings = this.playerBet * 5;
                }
                else if (this.bells == 2) {
                    this.winnings = this.playerBet * 10;
                }
                else if (this.sevens == 2) {
                    this.winnings = this.playerBet * 20;
                }
                else if (this.sevens == 1) {
                    this.winnings = this.playerBet * 5;
                }
                else {
                    this.winnings = this.playerBet * 1;
                }
                this.winNumber++;
                this.playerMoney += this.winnings;
                this.showWinMessage();
            }
            else {
                this.lossNumber++;
                this.playerMoney -= this.playerBet;
                this.showLossMessage();
            }
            this.turn++;
            this.winRatio = this.winNumber / this.turn;
            //this._lblTest.setText(this.playerMoney.toString());
        };
        Play.prototype.insertCoin = function () {
            var promptValue = prompt('Please, insert your money to play:', '');
            if (promptValue != null) {
                this.playerMoney = +promptValue;
            }
            else {
                alert("You cannot play without Money!");
            }
            this.showPlayerStats();
        };
        Play.prototype.Main = function () {
            var _this = this;
            console.log("%c Main Started...", "color: green; font-size: 16px;");
            this.addChild(this._machine);
            this.addChild(this._welcomeLabel);
            this.addChild(this._lblJackpot);
            this.addChild(this._lblTurns);
            this.addChild(this._lblWins);
            this.addChild(this._lblLosses);
            this.addChild(this._lblWinRatio);
            this.addChild(this._lblMessage);
            this.addChild(this._lblBet);
            this.addChild(this._reel1);
            this.addChild(this._reel2);
            this.addChild(this._reel3);
            this.addChild(this._startButton);
            this.addChild(this._exitButton);
            this.addChild(this._resetButton);
            this.addChild(this._upBetButton);
            this.addChild(this._downBetButton);
            this.showPlayerStats();
            this.insertCoin();
            this._upBetButton.on("click", function () {
                _this.playerBet += 10; //$("div#betEntry>input").val();
                _this.showPlayerStats();
            });
            this._downBetButton.on("click", function () {
                _this.playerBet -= 10; //$("div#betEntry>input").val();
                _this.showPlayerStats();
            });
            this._exitButton.on("click", function () {
                if (confirm("Would you like to EXIT the game?")) {
                    config.Game.SCENE = scenes.State.END;
                }
            });
            this._resetButton.on("click", function () {
                if (confirm("Would you like to RESET the game?")) {
                    _this.resetAll();
                    _this.showPlayerStats();
                }
            });
            this._startButton.on("click", function () {
                //this.playerBet = 10; //$("div#betEntry>input").val();
                _this._lblBet.setText("Player Bet: $" + _this.playerBet);
                if (_this.playerMoney == 0) {
                    _this.insertCoin();
                    //alert("You ran out of Money!");
                    //config.Game.SCENE = scenes.State.END;
                    // 
                }
                else if (_this.playerBet > _this.playerMoney) {
                    alert("You don't have enough Money to place that bet.");
                }
                else if (_this.playerBet <= 0) {
                    alert("All bets must be a positive $ amount.");
                }
                else if (_this.playerBet <= _this.playerMoney) {
                    _this.Reels();
                }
                else {
                    alert("Please enter a valid bet amount");
                }
            });
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=Play.js.map