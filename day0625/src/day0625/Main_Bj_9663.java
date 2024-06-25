package day0625;

import java.util.*;

public class Main_Bj_9663 {
	static int n;
	static int board[];
	static int ans[];
	static boolean isSelected[][];
	static int total = 0;
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		n = sc.nextInt();
		board = new int[n];
		ans = new int[n];
		isSelected = new boolean[n][n];
		
		for(int i =0; i<n; i++) {
			board[i] = i;
		}
		
		backTrack(0);
		System.out.println(total);
		sc.close();	
	} //main
	
	public static void backTrack(int k) {
		if(k == n) {
			total++;
			System.out.println("ans : "+Arrays.toString(ans));
			return;
		}
		for(int i = 0; i<n; i++) {
			ans[k] = board[i];
			System.out.println("k : "+k+", i : "+i);
		if(Passibility(k)) {
			backTrack(k+1);
		} //k=0;
		}
	}
	
	public static boolean Passibility(int k) {
		for(int i =0; i<k; i++) {
			if(ans[k] == ans[i]) {
				return false;
			}
			else if(Math.abs(k-i)==Math.abs(ans[k]-ans[i])) {
				return false;
			}
		}
		return true;
	}
}
