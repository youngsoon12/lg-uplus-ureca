package com.ureca;

public class AbstractTest {
	public static void main(String[] args) {
		Shape s;	
//			s=new Circle();
			s=new Triangle();
			s=new Rectangle();
			s.draw();
		class Bong {
			void b() {
				System.out.println("클래스 안에 클래스");
			}
		}
		Bong ab = new Bong();
		ab.b();
	}
}
