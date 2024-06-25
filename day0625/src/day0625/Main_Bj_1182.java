package day0625;
import java.util.*;
public class Main_Bj_1182 {
	static int N,S;
	static int nums[];
	static boolean visited[];
	static int answer[];
	static int answerCount = 0;
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		N = sc.nextInt();
		S = sc.nextInt();
		nums = new int[N];
		visited = new boolean[N];
		answer = new int[N];
		
		for(int i = 0; i< N; i++) {
			nums[i] = sc.nextInt();
		}
		
		sumCal(0,0);
		if(S == 0) {
			System.out.println(answerCount-1);
		} else {
			System.out.println(answerCount);
		}
	}
	
	static void sumCal(int cnt,int sum) {
		if(cnt == N) {
			if(sum == S) {
				answerCount++;
			}
			return;
		}
		visited[cnt] = true;
		sumCal(cnt+1, sum+nums[cnt]);
		visited[cnt] = false;
		sumCal(cnt+1, sum);
	}
}



