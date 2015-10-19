package com.uwen.app.aaa;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Stepdefs {
	
	private static final String PET = "dog";
	
	Pet pet;
	@Given("^there has a pet$")
	public void there_has_a_pet() throws Throwable {
		
	}
	
	@And("^it was a dog$")
	public void it_was_a_dog() throws Throwable{
		this.pet = new Pet(PET);
	}

	@When("^the dog said$")
	public void the_dog_said() throws Throwable {
	}

	@Then("^the sound should like wang$")
	public void the_sound_should_like_wang_wang_wang() throws Throwable {
			this.pet.likeWhat(PET);
	}

}
