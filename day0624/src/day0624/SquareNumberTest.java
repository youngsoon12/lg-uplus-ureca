package day0624;

import java.util.*;

public class SquareNumberTest {
	
	static int callCnt=0; // 몇번 재귀호출 ==> 몇번 연산??

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		
		int x = scan.nextInt();
		int n = scan.nextInt();
		
		System.out.println(exp1(x,n));
		System.out.println("연산횟수: "+callCnt);
		System.out.println(exp2(x,n));
		System.out.println("연산횟수: "+callCnt);
		scan.close();
	} // main
	
	private static long exp1(int x, int n) {
//		++callCnt;
		if(n==1) return x;
		
		return x*exp1(x,n-1);
	}
	
	private static long exp2(int x, int n) {
		++callCnt;
		if(n==1) return x;
		
		long y = exp2(x, n/2);
		
		return (n%2==0)? y*y : y*y*x;
	}

}

