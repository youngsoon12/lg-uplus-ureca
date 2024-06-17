import java.util.*;

public class Main_Bj_12891 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int length = sc.nextInt();
		int checkLength = sc.nextInt();
		String dna = sc.next();
		boolean boo = true;
		
		int[] condiArry = new int[4];
		for(int i=0; i<condiArry.length; i++) {
			condiArry[i] = sc.nextInt();
		}
	
//		while(boo) {
//			if(length<checkLength) {boo=false;}
//			
//			for(int i = 0; i<length; i++) {
//				dna[]			}
//			
//			
//			
//			
//			length--;
//		}
		
		
		System.out.println("length:"+length);
		System.out.println("checklength:"+checkLength);
		System.out.println("dna:"+dna.substring(length-checkLength));
		
	}

}
