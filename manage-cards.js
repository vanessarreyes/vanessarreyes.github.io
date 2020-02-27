// create count of cards created
var interest1_count = 1;
var interest2_count = 1;
var interest3_count = 1;
var toogle1 = true, toogle2 = true, toogle3 = true;

function addCard1() {
  // create card to hold tweet
  var tweet = $('<div class="card" style="width: 25rem"> <div> <button type="button" class="btn btn-primary btn-circle btn-sm float-right" style="background-color:red;">-</button> </div> <img class="card-img-top" src="twitter_red.jpg" alt="Twitter Logo"> <div class="card-body"> <h5 class="card-title">Tweet</h5> <p class="card-text text-center">Sample tweet will go here</p> </div> </div>');
  // varaible to hold card_id
  var card_id = "card_" + interest1_count;
  // add attribute of id to tweet
  tweet.attr("id", card_id);
  // append the new tweet to div with interes1 id
  tweet.appendTo('#interest1');

  // toogle between images for twitter logo for new card
  var image = document.getElementById(card_id).querySelector("img");
  if (toogle1 == false) {
      image.src = "Twitter-FeatureArt.jpg";
      toogle1 = true;
  }
  else {
    toogle1 = false;
  }

  // variable to hold button tag that is within new card created
  var button = document.getElementById(card_id).querySelector("button");
  // add onclick to button that calls function with card id to delete card
  button.onclick = function() {
    deleteCard(card_id);
  }
  // add one to the count of total cards created
  interest1_count++;
}

function addCard2() {
  // create card to hold tweet
  var tweet = $('<div class="card" style="width: 25rem"> <div> <button type="button" class="btn btn-primary btn-circle btn-sm float-right" style="background-color:red;">-</button> </div> <img class="card-img-top" src="twitter_red.jpg" alt="Twitter Logo"> <div class="card-body"> <h5 class="card-title">Tweet</h5> <p class="card-text text-center">Sample tweet will go here</p> </div> </div>');
  // varaible to hold card_id
  var card_id = "card_" + interest2_count;
  // add attribute of id to tweet
  tweet.attr("id", card_id);
  // append the new tweet to div with interes1 id
  tweet.appendTo('#interest2');

  // toogle between images for twitter logo for new card
  var image = document.getElementById(card_id).querySelector("img");
  console.log(toogle2);
  if (toogle2 == false) {
      image.src = "Twitter-FeatureArt.jpg";
      toogle2 = true;
  }
  else {
    toogle2 = false;
  }

  // variable to hold button tag that is within new card created
  var button = document.getElementById(card_id).querySelector("button");
  // add onclick to button that calls function with card id to delete card
  button.onclick = function() {
    deleteCard(card_id);
  }
  // add one to the count of total cards created
  interest2_count++;
}

function addCard3() {
  // create card to hold tweet
  var tweet = $('<div class="card" style="width: 25rem"> <div> <button type="button" class="btn btn-primary btn-circle btn-sm float-right" style="background-color:red;">-</button> </div> <img class="card-img-top" src="twitter_red.jpg" alt="Twitter Logo"> <div class="card-body"> <h5 class="card-title">Tweet</h5> <p class="card-text text-center">Sample tweet will go here</p> </div> </div>');
  // varaible to hold card_id
  var card_id = "card_" + interest3_count;
  // add attribute of id to tweet
  tweet.attr("id", card_id);
  // append the new tweet to div with interes1 id
  tweet.appendTo('#interest3');

  // toogle between images for twitter logo for new card
  var image = document.getElementById(card_id).querySelector("img");
  console.log(toogle3);
  if (toogle3 == false) {
      image.src = "Twitter-FeatureArt.jpg";
      toogle3 = true;
  }
  else {
    toogle3 = false;
  }

  // variable to hold button tag that is within new card created
  var button = document.getElementById(card_id).querySelector("button");
  // add onclick to button that calls function with card id to delete card
  button.onclick = function() {
    deleteCard(card_id);
  }
  // add one to the count of total cards created
  interest3_count++;
}

function deleteCard(value) {
  // remove the card with given id
  document.getElementById(value).remove();
}
