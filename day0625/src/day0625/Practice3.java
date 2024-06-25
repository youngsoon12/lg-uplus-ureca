package day0625;

import java.util.ArrayList;
import java.util.*;

public class Practice3 {
	static int [] arr;
	static boolean [] used;
	static int N,S;
	static int total=0;
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		N = sc.nextInt();
		S = sc.nextInt();
		arr = new int[N];
		for(int i =0; i<N; i++) {
			arr[i] = sc.nextInt();
		}
		
		used = new boolean[arr.length];
		
		perm(0,0);
		System.out.println(total);
		sc.close();
	}
	static void perm(int cnt,int sum ) {
		// 조합을 만들어보다가 부분집합의 합이 N 이 되면 result 출력하고 끝내고
		if(sum == S ) {
			total++;
			return;
		}
		// 부분집합의 합이 N이 되지 못하고 조합을 다 돌아보앗으면 리턴하자 
		if(cnt >=arr.length) {
			return;
		}
		for (int i = 0; i < arr.length; i++) {
			if(!used[i]) {
				used[i]= true;
				sum+=arr[i];
				perm(cnt+1,sum);
				used[i]=false;
				sum-=arr[i];
		
			}
		}
	}
}