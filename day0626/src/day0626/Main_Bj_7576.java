package day0626;
import java.util.*;
public class Main_Bj_7576 {
	static int n,m,v;
	static boolean visited[];
	static int arr[][];
	static int day = 0;
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		n=sc.nextInt();
		m=sc.nextInt();
		visited = new boolean[n];
		arr = new int[n][n];
		
		for(int i =0; i<m; i++) {
			for(int j=0; j<n; j++) {
				arr[i][j] = sc.nextInt();
			}
		}
		for(int i=0; i<m; i++) {
			System.out.println(Arrays.toString(arr[i]));
		}
		dfs(1);
		System.out.println();
		System.out.println();
		for(int i=0; i<m; i++) {
			System.out.println(Arrays.toString(arr[i]));
		}
		sc.close();
	} // main
	
	public static void dfs(int current) {
		if(current == m) {
			day++;
			return;
		}
		for(int i=0; i<n; i++) {
			if(arr[current][i]==1) {
				arr[current-1][i]=1;
				arr[current][i] = 1;
				dfs(current+1);
			}
		}
	}
	


}
