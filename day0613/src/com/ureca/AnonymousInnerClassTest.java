package com.ureca;

class A {
	public void happy() {
		System.out.println("즐거워 ~!~!");
	}
} //class A

class Child extends A{
	public void happy() {
		System.out.println("해피해~!~!~");
	}
}
interface Ureca{
	void good();
}

class My{
	public static void go(Ureca u) {
		u.good();
	}
}

class UrecaJunior implements Ureca{
	@Override
	public void good() {
			System.out.println("좋아용");
	}
}

public class AnonymousInnerClassTest {
	
	public static void main(String[] args) {
		
		Ureca u = new Ureca() {
			@Override
			public void good() {
				System.out.println("오잉");
				
			}	
		};
		
		My.go(u);
		My.go(new Ureca() { 
			// ※ 의미 : implements Ureca
			@Override
			public void good() {
				System.out.println("이렇게 좋을수가 유레 카 ~");
			}
		});
		
		
		A a1 = new A();
		A a = new Child() {
			public void happy() {
				System.out.println("자꾸 즐거워 ~!~!");
			}
		};
		a.happy();
		a1.happy();
	} // main

}
