package com.ureca;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Main_Bj_15651 {
	static int N,M; // 입력 값 (N : 숫자범위, M : 조건을 만족하는 숫자 길이)
	static int numbers[]; // (1부터 N까지 자연수)
	static int answers[]; // (조건에 부합하는 정답을 담을 배열)
	static StringBuilder s = new StringBuilder();
	
	public static void main (String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); // 입력
		String str = br.readLine(); // 문자열로 받기
		StringTokenizer stk = new StringTokenizer(str); // 공백을 기준으로 토큰 나눠주기
		
		N = Integer.parseInt(stk.nextToken()); // 숫자 범위
		M = Integer.parseInt(stk.nextToken()); // 숫자 길이
		
		numbers = new int[N]; // 배열 크기 생성
		answers = new int[M]; // 정답 배열 크기 생성
		
		for(int i=1; i<=N; i++) {
			numbers[i-1] = i;
		} // 1부터 N까지의 범위 숫자 numbers 배열에 담기
		
		Calculation(0); // 재귀 함수 호출
		System.out.println(s);
	}
	
	static void Calculation(int count) { // 순열 구현
		if(count == M) { // count가 숫자길이에 도달 했을 때 return으로 멈춰주고 출력
			for(int i=0; i<M; i++) {
				s.append(answers[i]).append(" ");
			}
			s.append("\n");
			return;
		}
		
		for(int i=0; i<N; i++) {
			answers[count] = numbers[i];
			Calculation(count+1);
		}
	}

} // main
