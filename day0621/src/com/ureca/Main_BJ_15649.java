package com.ureca;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Main_BJ_15649 {
	static int N,M;
	static int numbers[];
	static int answers[];
	static boolean[] boo;
	
	public static void main (String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String str = br.readLine();
		StringTokenizer stk = new StringTokenizer(str);
		N = Integer.parseInt(stk.nextToken());
		M = Integer.parseInt(stk.nextToken());
		
		
		numbers = new int[N];
		answers = new int[M];
		boo = new boolean[N];
		
		for(int i=1; i<=N; i++) {
			numbers[i-1] = i;
		} // numbers 배열 구하기
		

		Calculation(0);
	}
	
	static void Calculation(int count) {
		if(count == M) {
			for(int i=0; i<M; i++) {
				System.out.print(answers[i]+" ");
			}
			System.out.println("");
			return;
		}
		
		for(int i=0; i<N; i++) {
			if(!boo[i]) {
			boo[i] = true;
			answers[count] = numbers[i];
			Calculation(count+1);
			boo[i] = false;
			}
		}
	}

} // main
