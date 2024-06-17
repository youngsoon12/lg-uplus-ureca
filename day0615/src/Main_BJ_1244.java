import java.util.*;
public class Main_BJ_1244 {

	public static void main(String[] args) throws Exception {
		// 첫째 줄 : 스위치 개수 (100이하의 양의정수)
		// 둘째 줄 : 스위치 상태 (켜져있으면 1, 꺼져있으면 0)
		// 셋째 줄 : 학생 수
		// 넷째줄 ~ : 한 학생의 성별(남자는 1, 여자는 2), 학생이 받은 수 
		Scanner sc = new Scanner(System.in);
		int length = Integer.parseInt(sc.nextLine()); 
		String status1 = sc.nextLine();
		int[] status = new int[length];
		StringTokenizer tokens = new StringTokenizer(status1," ");
		for(int i =0; i<length; i++) {
			status[i] = Integer.parseInt(tokens.nextToken());
		}

		int students = Integer.parseInt(sc.nextLine());
		LinkedList<String> genders = new LinkedList<>();
		
		for(int i=0; i<students; i++) { // 성별
			genders.add(sc.nextLine());	
		}
		
		for(int i =0; i<students; i++) { // 스위치 바꾸기
			if(genders.get(i).charAt(0)=='1') {
//				for(int j=1; j<=length; j++) {
//					if(j%Integer.parseInt(genders.get(i), genders.get(i).charAt(2)) == 0) {
//						if(status[j-1] == 0) {
//							status[j-1] = 1;
//						}
//					}
//				}
			}
			System.out.println(genders.get(i).charAt(2));
		
		}
		for(int i=0; i<length; i++) {
			System.out.print(status[i]+" ");
		}
	} // main
}

//StringTokenizer tokens = new StringTokenizer(status," ");


