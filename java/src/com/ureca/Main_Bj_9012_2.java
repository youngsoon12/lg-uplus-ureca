package com.ureca;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.ArrayList;
import java.util.Queue;

public class Main_Bj_9012_2 {

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		Queue<Character> que = new LinkedList<>();
		ArrayList<String> arry = new ArrayList<>();
		int num = Integer.parseInt(br.readLine());
		
		for(int i=0; i<num; i++) {
			String str = br.readLine();
			for(int j=0; j<str.length(); j++) {
				if(str.charAt(j) == '(') {
					que.add(str.charAt(j));
				} 
				else if(str.charAt(j) == ')') {
					if(que.contains('(')) {
						que.remove();
					}
					else {que.add(str.charAt(i));}
				} 
//				System.out.println("j : "+j+", que : "+que+", str.charAt(j) : "+str.charAt(j));
			}
			if(que.isEmpty()) {
				arry.add("YES");
//				System.out.println("YES");
			}
			else {
				arry.add("NO");
//				System.out.println("NO");
			}
			que.clear();
		} //for(i)
		for(int i=0; i<arry.size(); i++) {
			System.out.println(arry.get(i));
		}
	} //main

}
