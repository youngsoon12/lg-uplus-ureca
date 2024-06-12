package com.ureca;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner; 

public class NameMenuTest {

	public static void main(String[] args) {

		Scanner sc = new Scanner(System.in);
		String []names = new String[5];
		int length = 0;
		
		while(true) {
			System.out.println("<이름메뉴>");
			System.out.println("1.추가 2.검색 3.수정 4.삭제 5.종료");
			System.out.print("번호입력 ==>");
			int num = sc.nextInt();
			if(num == 1) {
				System.out.print("이름 입력 : ");
				String name = sc.next();
				names[length] = name;
				length++;
			}
			if(num == 2) {
				System.out.println("#이름목록");
				for(int a = 0; a<length; a++) {
					System.out.println(names[a]);
				}
			}
			if(num == 3) {
				System.out.print("기존이름입력: ");
				String now = sc.next();
				System.out.print("변경이름입력: ");
				String change = sc.next();
				for(int a = 0; a<length; a++) {
					if(names[a].equals(now)) {
						names[a] = change;
					}
				}
			}
			if(num == 4 ) {
				System.out.print("삭제이름입력: ");
				String del = sc.next();
				for(int a = 0; a<length; a++) {
					if(names[a].equals(del)) {
						List<String> nameList = new ArrayList<>(Arrays.asList(names));
						names[a] = del;
						nameList.remove(a);
						names = nameList.toArray(new String[0]);
						length--;
					}
				}
			}
			if(num == 5) {
				System.out.println("-- END --");
				sc.close();
				break;
			}
			
		}
	}

}

