package com.ureca;


class Parent{
	public Parent() {
		System.out.println("부모");
	}
	void good() {
		System.out.println("굿이에요");
	}
}

class Child extends Parent{
	public Child(){
		System.out.println("자식 기본 생성자");
	}
}
public class ConstructorCallTest {
	public static void main(String args[]) {
		Child c = new Child();
		c.good();
	}
}
