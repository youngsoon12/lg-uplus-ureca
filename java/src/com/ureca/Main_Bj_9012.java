package com.ureca;

import java.util.*;

public class Main_Bj_9012 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int num = sc.nextInt();
		LinkedList<String> que = new LinkedList<>();
		for(int i=0; i<num; i++) {
			int left = 0;
			int right = 0;
			String data = sc.next();
			
			for(int j=0; j<data.length(); j++) {
				if(data.charAt(0) == ')' || data.charAt(data.length()-1) == '(') {
					left = 100;
					break;
				}
				else {
					if(data.charAt(j) == '(') {
						left++;
					}
					else if(data.charAt(j) == ')') {
						right++;
					}
					if(right > left) {
						left = 100;
						break;
					}
				}
			} // for(j)
			String result;
//			String result = (left-right == 0) ?"YES" : "NO"; //삼항연산자
			if(left-right == 0) {
				result = "YES";
			}
			else {
				result= "NO";
			}
			que.add(result);
		} // for(i)
		for(int i=0; i<que.size(); i++) {
			System.out.println(que.get(i));
		}
		
		} // main
	} 

