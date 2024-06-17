import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main_BJ_1000_AB {

	public static void main(String[] args) throws Exception {
		// 입력도구 : Scanner, BufferedReader
		// A a = new A(); ==> A클래스의 멤버를 사용할 준비
//		Scanner scan = new Scanner(System.in);
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		// ==> BufferedReader 클래스의 벰버를 사용할 준비
		
		//입력 데이터 => 1 2
		String str= br.readLine(); // str="1 2"
		System.out.println(str);
		StringTokenizer tokens = new StringTokenizer(str," ");
		
		int su1 = Integer.parseInt(tokens.nextToken());
		int su2 = Integer.parseInt(tokens.nextToken());

		System.out.println(su1+su2);

	} //main

}
