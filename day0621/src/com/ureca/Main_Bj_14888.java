package com.ureca;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.Map;
import java.util.StringTokenizer;

public class Main_Bj_14888 {
	static int N;
	static int numbers[];
	static String operators[]; 

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int N = Integer.parseInt(br.readLine());
		String str = br.readLine();
		StringTokenizer stk = new StringTokenizer(str);
//		Map<Integer, String> = LinkedList<Integer,String>();
		
		for(int i = 0; i<N; i++) {
			numbers[i] = Integer.parseInt(stk.nextToken());
		}
		
		for(int i = 0; i< 4; i++) {
		}
		
		
		
	}
}
