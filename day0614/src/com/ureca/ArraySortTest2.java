package com.ureca;
import java.util.*;


class Person implements Comparable<Person>{
	String name;
	int age;
	String job;
	int score;
	
	public Person(String name,int age,String job,int score) {
		this.name = name;
		this.age = age;
		this.job = job;
		this.score = score;
	}

	@Override
	public String toString() {
		return "Person [name=" + name + ", age=" + age + ", job=" + job + ", score=" + score + "]";
	}

	@Override
	public int compareTo(Person o) { //
		//this(Person)의 속성과 o(Person)의 속서을 비교
		//비교방법 this.속성 - o.속성
		//결과: 음수, 0, 양수 ==> 음수의 경우 swap을 해줌 ==> 오름차순 정렬
		
		// return this.age - o.age; => 오름차순 정렬
		 return this.name.charAt(0) - o.name.charAt(0);
//		return name.compareTo(o.name); // 문자열의 경우는 오버라이드 메서드 사용
		//return 0;
	}
	
	
}

public class ArraySortTest2 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String str = "안녕하세요";
		System.out.println(str.charAt(0));
		int []su = {13,8,7,10,100,5};
		char []ch = {'J','A','v','a'};
		String []names = {"홍길동","길라임","김주원"};
		Integer []su2 = {13,8,7,10,100,5};
		Character []ch2 = {'J','A','v','a'};
		
		//API를 통해 배열을 오름차순 정렬하기 ==> java.util
		Arrays.sort(su);
		Arrays.sort(ch);
		Arrays.sort(names);
//		Arrays.sort(su2,Collections.reverseOrder()); => 정수 내림차순 정렬
//		Arrays.sort(ch2,Collections.reverseOrder()); => 문자 내림차순 정렬
//		Arrays.sort(names,Collections.reverseOrder()); => 문자열 내림차순 정렬
		
		System.out.println("정수배열>>"+Arrays.toString(su));
		System.out.println("문자배열>>"+Arrays.toString(ch));
		System.out.println("문자열배열>>"+Arrays.toString(names));
		
		Person p = new Person("갓길동",11,"학생",95);
		Person[] persons= {p ,
		   	            new Person("빛길동",19,"학생",80),
			            new Person("남길동",14,"학생",100),
			            new Person("여길동",17,"학생",99),
			            new Person("킹길동",15,"학생",56)};
		
		
		Arrays.toString(persons);
		for(Person i : persons) {
			System.out.println(i);
		}
		
	} // main

}
