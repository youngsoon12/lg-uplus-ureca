package com.ureca;
import java.util.*;

public class practice {
	public static void main(String[] args) {
	List<Integer> list = new ArrayList<>(); 
	list.add(1);
	list.add(2);
	list.add(3);
	list.add(4);
	list.add(5);
	System.out.println(list);
	Integer[] numArray = list.toArray(new Integer[0]);
	System.out.println(numArray);
	for(int i : list) {
		System.out.println(numArray[i-1]);
	}
	}
}
