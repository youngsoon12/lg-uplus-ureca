package com.ureca;

public class ArraySortTest {

	public static void main(String[] args) {
		int []su = {5, 13, 8, 10, 100, 7};
		int temp;
		for(int i=0; i<su.length-1; i++) {
			for(int j=i+1; j<su.length; j++) {
				if(su[i] > su[j]) {
					temp=su[i]; 
				}	
			}
		}

	}

}
