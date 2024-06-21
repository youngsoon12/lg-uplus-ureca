package com.ureca;
import java.util.Scanner;

// 입력받은 자연수들로 가능한 부분집합 구성 : 재귀+boolean배열
public class Practice {
	static int num[]= {1,2,3,4};
	static int sum = 1;
	static int sum2 = 1;
	static int check;
	static int z=0;
	public static void main(String[] args) {
		for(int i=1; i<4; i++) {
			for(int j=i; j<4; j++) {
				for(int k=j; k<4; k++) {
					sum2+=k;
				}
			}
		} // 1 1 2 3 2 3 3
		abc(0);
		System.out.println(sum2);
		System.out.println(sum);
	}
	
	static void abc(int a) {
		if(a>2) {
			return;
		}
		
		for(int i =1; i<4; i++) {
			if(!(i-z == 0)) {
			z=i; 
			check=i;
			sum+=check;
			abc(a+1);
			}
		}
		
	}
}

// abc(1) abc(1) abc(1) abc(2) abc(2) abc(3)

// 241

