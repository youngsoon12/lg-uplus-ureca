package day0626;
import java.util.*;
public class Practice {
	static int n,m,v;
	static boolean visited[];
	static int arr[][];
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		n=sc.nextInt();
		m=sc.nextInt();
		v=sc.nextInt();
		visited = new boolean[n+1];
		arr = new int[n+1][n+1];
		
		for(int i =1; i<=m; i++) {
			int from = sc.nextInt();
			int to = sc.nextInt();
			arr[to][from] = arr[from][to]=1;
		}
		for(int i=0; i<=n; i++) {
			System.out.println(Arrays.toString(arr[i]));
		}
		dfs(v,new boolean[n+1]);
		System.out.println();
		bfs(v,new boolean[n+1]);
		for(int i=0; i<=n; i++) {
			System.out.println(Arrays.toString(arr[i]));
		}
		sc.close();
	} // main
	
	public static void dfs(int current,boolean[] visited) {
		visited[current] = true;
		System.out.print(current+" ");
		for(int i=1; i<=n; i++) {
			if(arr[current][i]==1&&!visited[i]) {
				dfs(i,visited);
				
			}
//			arr[current][i] = true;
		}
	}
	
	public static void bfs(int current,boolean[] visited) {
		Queue<Integer> queue = new ArrayDeque<>();
		queue.offer(current);
		
		while(!queue.isEmpty()) {
			current = queue.poll();
			if(visited[current]) {
				continue;
			}
			visited[current]= true;
			System.out.print(current+" ");
			
			for(int i=1; i<=n; i++) {
				if(arr[current][i]&&!visited[i]) {
					queue.offer(i);
				}
			}
		}
	}

}
