import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import {Player, Enemy} from "../src/entity";

let goblin = new Enemy("goblin");
let player1;
$('#character-create-form').submit(function(event) {
  event.preventDefault();
  player1 = new Player($("#charName").val(), $("input:radio[name=class-radio]:checked").val());
  console.log(player1);
  $(".story-area").prepend("<p>Disembodied Voice: Muahahahahaha, why hello there " + player1.name + " so nice of you to... DROP IN!</p>");
  $(".character-create").toggle();
  $(".battle-action").toggle();
  $(".story-area").append("<p>Disembodied Voice: Heres a " + goblin.name + ". Fight it or dieeee.</p>");
});

$("#attack").click(() => {
  player1.attack(goblin);
  $(".story-area").append("<p>You hit the " + goblin.name +"</p>");
  $(".story-area").append("<p>" + goblin.name + " Health reduced to: " + goblin.stats.get("HP") + "</p>");
  $(".story-area").append("<p>You should feel bad</p>");
  if(goblin.isAlive){
    goblin.attack(player1);
    $(".story-area").append("<p>You were hit by the " + goblin.name +"</p>");
    $(".story-area").append("<p>" + player1.name + " Health reduced to: " + player1.stats.get("HP") + "</p>");
    $(".story-area").append("<p>The goblin thinks it's funny</p>");
  } else {
    $(".story-area").append("I cant believe that you've done this, he had a family");
    $(".battle-action").toggle();
  }
  if(!player1.isAlive){
    $(".story-area").append("<p>Wow you suck..... like a lot... maybe try an easier game...</p>");
    $(".battle-action").toggle();
  }
});