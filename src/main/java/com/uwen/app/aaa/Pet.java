package com.uwen.app.aaa;

public class Pet {
	
	private String pet;
	
    public Pet(String pet) {
    	this.pet = pet;
    }

	public String said(){
		return pet + " said should be like";
    }
    
    public String likeWhat(String pet){
			return said() + " wang...wang...wang";
    }
}
