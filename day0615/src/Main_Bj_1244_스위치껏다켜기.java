import java.util.*;

public class Main_Bj_1244_스위치껏다켜기 {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int N = scan.nextInt(); //스위치 개수
		
		int[] switchArry = new int[N+1];
		
		for(int i=1; i<=N; i++) {
			switchArry[i] = scan.nextInt();
		}
		
		int stuNum = scan.nextInt(); //학생수
		
		for(int i=0; i<stuNum; i++) {
			int gender = scan.nextInt();
			int startNum = scan.nextInt();
			if(gender == 1 ) { // 남학생 : 시작번호를 기준해서 배수를 스위치
				for(int j=startNum; j<=N; j+=startNum) {
					if(switchArry[j]==1)switchArry[j]=0;
					else switchArry[j]=1;
				}
			}
			else {
			//좌우 비교할 길이가 다를 수 있으므로 최소 비교 길이를 구하자!!
			int limit = startNum;
			if(N-startNum+1 < startNum) {
				limit = N-startNum+1;
			}
			
			//1. 선택된 스위치는 무조건 변경
			if(switchArry[startNum] == 0) switchArry[startNum] = 1;
			else switchArry[startNum] = 0;
			
			for(int j=0,left=startNum-1, right=startNum+1;
				j<limit-1;
				j++, left--, right++) {
				if(switchArry[left] != switchArry[right]) break;
				if(switchArry[left] == 0) switchArry[left] = 1;
				else switchArry[left] = 0;
				
				if(switchArry[right] == 0) switchArry[right] = 1;
				else switchArry[right] = 0;
			}
			}
		} //for
		
		//스위칭 결과를 출력
		for(int i = 1; i<=N; i++) { //스위치 인덱스 표현
			System.out.print(switchArry[i]+" ");
			if(i%20 == 0) System.out.println();
		}
		
		scan.close();
	} // main
}
