package com.ureca;
import java.util.Scanner;

public class NameMenu {

	public static void main(String[] args) {
		// 화면출력
		// 사용자 데이터 입력
		// => Scanner BufferedReader(scanner 보다 빠름)
		NameMenuM menu = new NameMenuM();
		
		Scanner scan = new Scanner(System.in);
		int no;
		do {
			System.out.print("<이름메뉴>\r\n"
				+ "1.추가 2.검색 3.수정 4.삭제 5.종료\r\n"
				+ "번호입력 ==>");
			no = scan.nextInt();
		
			switch (no) {
				case 1:System.out.print("이름입력: ");
					String name = scan.next();
					menu.create(name);
					break;
				case 2:
					String []names=menu.read();
					System.out.println("#이름목록");
					for(String name1:names) {
						if(name1 != null)
						System.out.println(" "+name1);
					}
					break;
				case 3:
					System.out.println("기존이름입력: ");
					String oldName = scan.next();
					System.out.println("변경이름입력: ");
					String newName = scan.next();
					menu.update(oldName, newName);
					
					break;
				case 4:
					System.out.print("삭제이름입력 ");
					String delName = scan.next();
					menu.delete(delName);
					break;
			}
		}while(no!=5); //(no<5)
		scan.close();
	}//main
}
