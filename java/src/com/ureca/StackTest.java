package com.ureca;

import java.util.Stack;
public class StackTest {

	public static void main(String[] args) {
		Stack<String> stack = new Stack<String>();
		System.out.println("스택의 요소 개수:"+stack.size()+", 스택Empty체크:"+stack.isEmpty());
		
		//데이터 입력
		stack.push("홍길동");
		stack.push("김주원");
		stack.push("길라임");
		System.out.println("스택의 요소 개수"+stack.size()+", 스택Empty체크:"+stack.isEmpty());
		
		//데이터 삭제(출력)
		System.out.println(stack.pop());
		System.out.println(stack.peek());
		System.out.println("스택의 요소 개수:"+stack.size()+", 스택Empty체크:"+stack.isEmpty());
		
		System.out.println(stack.pop()); // 김주원
		System.out.println(stack.pop()); // 홍길동
//		System.out.println(stack.pop()); // 에러발생 : EmptyStackException
	}
	

}

