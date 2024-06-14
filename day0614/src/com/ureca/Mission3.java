package com.ureca;
import java.util.*;

public class Mission3 {
	
	public static class Person implements Comparable<Person>{
		String name;
		int age;
		String job;
		int score;
		
		Person(){};
		Person(String name, int age, String job, int score){
			this.name = name;
			this.age = age;
			this.job = job;
			this.score = score;
			
		}
		public int getAge() {return age;}
		public String toString() {
			StringBuilder str = new StringBuilder();
			str.append("(name : ");
			str.append(name);
			str.append(", age : ");
			str.append(age);
			str.append(", job : ");
			str.append(job);
			str.append(", score : ");
			str.append(score);
//			return "(name : "+name+", age : "+age+", job : "+job+", score : "+score;
			System.out.println(str);
			return str.toString();
		}
		
		@Override
		public int compareTo(Person o) {
			return name.compareTo(o.name);
			
		}
	}

	public static void main(String[] args) {
		Person p = new Person("갓길동",11,"학생",95);
		Person[] persons= {p ,
   	            new Person("빛길동",19,"학생",80),
	            new Person("남길동",14,"학생",100),
	            new Person("여길동",17,"학생",99),
	            new Person("킹길동",15,"학생",56)};
		Arrays.sort(persons);
		for(int i=0; i<persons.length; i++) {System.out.println(persons[i]);}
	}

}
