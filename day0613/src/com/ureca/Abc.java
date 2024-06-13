package com.ureca;

public class Abc {
	int su=10; // == int su = 0;
//	My my; // == My my = null;
	String str;
	
	Abc(){ // 기본 생성자 : 초기화 메서드
		this("ureca");
		su = 1000;
//		my = new My();
		
	}
	
	Abc(String str){ // 오버로딩 생성자
		this.str = str;
	}
	
	void hello() {
		System.out.println("안녕");
	}
}
