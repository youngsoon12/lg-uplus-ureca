package com.ureca;
import java.util.Arrays;
import java.util.Collections;

	class Person {
	 
		public Person(String name,int age, String job, int score) {
			String[] names = new String[5];
			for(int i = 0; i<5; i++) {
				names[i] = name;
			}
			System.out.println(names);
		}
	}

public class Mission1 {
	
	// int[]su= {13, 8, 7, 10, 100, 5}; ==> 정수 배열을 오름차순 정렬하시오.
	//char[]ch= {'J','a','v','A'}; String[]names= {"홍길동","길라임","김주원"}; ==> 문자,문자열 배열을 오름차순 정렬하시오.
	
	
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub

		
		System.out.print("1번 문제 : ");
		
		int[] su = {13, 8, 7, 10, 100, 5};
		Integer[] su2 = {13, 8, 7, 10, 100, 5};
		Arrays.sort(su);
		
		for(int i:su) {
			System.out.print(i+", ");
		}
		
		
		System.out.print("\n2번 문제 : ");
		
		char[] ch = {'J','a','v','A'};
		String[]names= {"홍길동","길라임","김주원"};
		
		Arrays.sort(ch);
		Arrays.sort(names);
		
		for(int i:ch)System.out.print((char)i+", ");
		for(String i:names)System.out.print(i+", ");
		
		System.out.println("\n3번 문제 : ");
		Person p = new Person("갓길동",11,"학생",95);
		Person[] persons= {p ,
   	            new Person("빛길동",19,"학생",80),
	            new Person("남길동",14,"학생",100),
	            new Person("여길동",17,"학생",99),
	            new Person("킹길동",15,"학생",56)};
	} // main

}
