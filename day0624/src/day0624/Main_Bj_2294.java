package day0624;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main_Bj_2294 {

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String str = br.readLine();
		StringTokenizer stk = new StringTokenizer(str);
		int coin2=100;
		int coin3;
		int success = 0;
		
		int N = Integer.parseInt(stk.nextToken());
		int K = Integer.parseInt(stk.nextToken());
		int coins []= new int[N];
		int current = K;
		
		for(int i=0; i<N; i++) {
			coins[i] = Integer.parseInt(br.readLine());
		}
		
		if(K == coins[N-1]) {coin2=1; success++;}
		else {
		for(int i=0; i<N; i++) {
			current = K;
			coin3 = 0;
			if(!(current%coins[i] == 0)) {
				for(int j=i; j>=0; j--) {
					if(current%coins[j] < current) {
						coin3 += current/coins[j];
						current = current%coins[j];
					}	
				}
				if(current % coins[0] == 0) {
					success++;
				}
				coin2= (coin2>coin3) ? coin3 : coin2;
			}
			else {
				coin2 = coin2>current/coins[i] ? current/coins[i] : coin2;
			}
		}
		}
		coin2 = success>0 ? coin2 : -1;
	
		System.out.println(coin2);

	}

}



