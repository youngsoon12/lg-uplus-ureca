package com.ureca;

import java.util.StringTokenizer;
import java.io.BufferedReader;
import java.io.InputStreamReader;

public class Main_Bj_2789 {
	static int n,m; // 입력값 n : 카드 개수 , m : 3개의 합 조건
	static int max=0; // m과 비교할 최대 값
	static int cards[]; // n장의 카드를 담아줄 배열
	static boolean boo[]; // 카드 중복 방지를 위한 boolean 배열
	static int ans[]; // 조합 배열

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String str = br.readLine(); // 첫번째 줄 (n과 m)
		StringTokenizer stk = new StringTokenizer(str); // 공백을 기준으로 나눠줄 Token
		n = Integer.parseInt(stk.nextToken()); 
		m = Integer.parseInt(stk.nextToken());
		
		cards = new int[n];
		ans = new int[3];
		boo = new boolean[n];
		
		str = br.readLine(); // 두번째 줄(cards)
		stk = new StringTokenizer(str); 
		
		
		for(int i=0; i<n; i++) {
			cards[i] = Integer.parseInt(stk.nextToken());
		} // for(cards)

		search(0);
		System.out.println(max);
	} //main
	
	
	static void search(int c) {
		if(c==3) { // 카드 3장을 뽑았을 때
			int sum = 0;
			for(int i=0; i<3; i++) {
				sum+=ans[i];
			}
			if(sum<=m) {
				max = (sum>max) ? sum : max;
			}
			return;
		}
		for(int i=0; i<cards.length; i++) {
			if(!boo[i]) {
				boo[i] =true;
				ans[c] = cards[i];
				search(c+1);
				boo[i] =false;
			}
		}
	} // search

}
