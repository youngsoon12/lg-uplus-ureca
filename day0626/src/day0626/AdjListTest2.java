package day0626;

import java.io.FileInputStream;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;

import org.w3c.dom.Node;

public class AdjListTest2 { //인접행렬로 그래프구조 저장

	static ArrayList<Integer>[] adjList;
	static int N;
	
	public static void main(String[] args) throws Exception {
		System.setIn(new FileInputStream("input1.txt"));
		Scanner scan = new Scanner(System.in);
		N = scan.nextInt(); // 정점수
		int C = scan.nextInt(); // 주어진 입력 간선정보의 수
		
		adjList = new ArrayList[N];
		
		//배열 각 번지에 List 바구니 각각 생성
		//각 List는 배열 인덱스에 인접한 노드(정점)의 번호가 저장
		for(int i = 0; i<adjList.length; i++) {
			adjList[i] = new ArrayList<Integer>();
		}
		
		for(int i = 0; i<C; i++) {
			int from = scan.nextInt(); //시작정점
			int to = scan.nextInt(); //끝정점
			
			adjList[from].add(to); // ==> 의미 : ArrayList.add(인접 정점 번호);
			adjList[to].add(from); // ==> 의미 : ArrayList.add(인접 정점 번호);
		}
		
		print();
		scan.close();
	} // main
	
	//저장 데이터 확인
	private static void print() {
		int a=0;
		for(ArrayList<Integer> i : adjList) { // i는 정점 번호와 같다	
			System.out.println(a+" : "+i); // head=노트(Node클래스)
			a++;
		}
	}
}
