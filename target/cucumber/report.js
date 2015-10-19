$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("com/uwen/app/aaa/dog_and_cat.feature");
formatter.feature({
  "id": "the-dog-should-said-wang...wang...wang.",
  "description": "",
  "name": "The dog should said wang...wang...wang.",
  "keyword": "Feature",
  "line": 1
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "there has a pet",
  "keyword": "Given ",
  "line": 4
});
formatter.match({
  "location": "Stepdefs.there_has_a_pet()"
});
formatter.result({
  "duration": 105762175,
  "status": "passed"
});
formatter.scenario({
  "id": "the-dog-should-said-wang...wang...wang.;",
  "description": "",
  "name": "",
  "keyword": "Scenario",
  "line": 6,
  "type": "scenario"
});
formatter.step({
  "name": "it was a dog",
  "keyword": "And ",
  "line": 7
});
formatter.step({
  "name": "the dog said",
  "keyword": "When ",
  "line": 8
});
formatter.step({
  "name": "the sound should like wang",
  "keyword": "Then ",
  "line": 9
});
formatter.match({
  "location": "Stepdefs.it_was_a_dog()"
});
formatter.result({
  "duration": 52252,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.the_dog_said()"
});
formatter.result({
  "duration": 16329,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.the_sound_should_like_wang_wang_wang()"
});
formatter.result({
  "duration": 52718,
  "status": "passed"
});
});