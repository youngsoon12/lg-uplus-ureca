package day0625;

import java.util.Scanner;

public class Main_Bj_1009 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		int answer[] = new int[n];
		for(int i=0; i<n; i++) {
			int sum=1;
			int a = sc.nextInt();
			int b = sc.nextInt();
			for(int j=0; j<b; j++) {
				sum = sum*a%10;
			}
			answer[i] = sum;
		}
		for(int i : answer) {
			if(i == 0) {
				System.out.println(10);
			}else {
				System.out.println(i);
			}
			
		}
		sc.close();
	}// main

}
