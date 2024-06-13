package com.ureca;

public class Hongkong implements MenuPan { // interface는 public을 안써도 에러가 안나오니 혼동하지 말것
	@Override
	public void 자장면() {
		System.out.println("달콤한 자장면~");
		
	}
	@Override
	public void 짬뽕() {
		System.out.println("매콤한 잠봉 ~");
		
	}
	@Override
	public void 볶음밥() {
	};
	public void 초밥() {
		System.out.println("초밥이 쏙쏙 ~.~");
	}
	@Override
	public int cal(int money) {
		return money*1000;
	}
}
