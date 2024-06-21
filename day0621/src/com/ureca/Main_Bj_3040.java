package com.ureca;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Main_Bj_3040 {
	static int n,m; // 입력값 n : 카드 개수 , m : 3개의 합 조건
	static int max=0; // m과 비교할 최대 값
	static int hats[]=new int[9]; // n장의 카드를 담아줄 배열
	static boolean boo[]; // 카드 중복 방지를 위한 boolean 배열
	static int ans[]; // 조합 배열
	static int total = 0;
	static int sum=0;
	static int result[] = new int[7];
	
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		for(int i=0; i<9; i++) {
			hats[i] = Integer.parseInt(br.readLine());
		}
		boo = new boolean[9];
		ans = new int[7];
	
		search(0);
		for(int i = result.length-1; i>=0; i--) {
			System.out.println(result[i]);
		}

	} //main
	
	
	static void search(int c) {
		if(c==7) { // 카드 3장을 뽑았을 때
			sum = 0;
			for(int i=0; i<7; i++) {
				sum+=ans[i];
			}
			if(sum == 100) {
				result = ans.clone();
			}

			return;
		}
		for(int i=0; i<hats.length; i++) {
			if(!boo[i]) {
				boo[i] =true;
				ans[c] = hats[i];
				search(c+1);
				boo[i] =false;
			}
		}
	}

}
