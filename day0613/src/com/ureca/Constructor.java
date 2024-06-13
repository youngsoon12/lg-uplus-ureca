package com.ureca;
import com.ureca.pack1.Parent;

public class Constructor {

	public static void main(String[] args) {
		Abc a = new Abc();
//		a.hello();
		Parent p = new Parent();
		p.m1();
//		System.out.println("str="+a.str);
		
		Abc a2 = new Abc("Java");
//		System.out.println(a2.str);
	}

}


