package com.ureca;

public interface MenuPan { // 앞에 써주나 안써주나 아래 3가지 전부 다 동일하다
	void 자장면();
	abstract void 짬뽕(); // abstract 바디를 안갖겠다 선언만 하는 메소드
	public abstract void 볶음밥();
	int cal(int money);
}

//public class MenuPan{
//	void 자장면() {}
//}