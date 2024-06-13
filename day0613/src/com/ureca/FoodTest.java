package com.ureca;

public class FoodTest {
	public static void main(String[] args) {
		
//		MenuPan menu; // 연결 객체
//		menu = new Hongkong();
		MenuPan menu=new Hongkong();
		
		menu.짬뽕();
		menu.자장면();
		System.out.println(menu.cal(5000));
		
	}
}
