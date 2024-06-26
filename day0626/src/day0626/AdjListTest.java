package day0626;

import java.io.FileInputStream;
import java.util.Arrays;
import java.util.Scanner;

import org.w3c.dom.Node;

public class AdjListTest { //인접행렬로 그래프구조 저장
	static class Node{ //현재정점과 그 정점에 연결된 다른 정점의 정보를 표현 객체
		int vertex;
		Node next;
		public Node(int vertex, Node next) {
			this.vertex = vertex;
			this.next = next;
		}
		
		@Override
		public String toString() {
			return "Node [vertex=" + vertex + ", next=" + next + "]";
		}
		
		
	}
	
	static Node adjList[];
	static int N;
	
	public static void main(String[] args) throws Exception {
		System.setIn(new FileInputStream("input1.txt"));
		Scanner scan = new Scanner(System.in);
		N = scan.nextInt(); // 정점수
		int C = scan.nextInt(); // 주어진 입력 간선정보의 수
		
		adjList = new Node[N];
		
		for(int i = 0; i<C; i++) {
			int from = scan.nextInt(); //시작정점
			int to = scan.nextInt(); //끝정점
			
			adjList[from] = new Node(to, adjList[from]);
			adjList[to] = new Node(from, adjList[to]);	
		}
		
		print();
		scan.close();
	} // main
	
	//저장 데이터 확인
	private static void print() {
		Node head = null;
		for(int i = 0; i<N; i++) { // i는 정점 번호와 같다	
			head = adjList[i];
			System.out.println(i+" : "+head); // head=노트(Node클래스)
		}
	}
}
