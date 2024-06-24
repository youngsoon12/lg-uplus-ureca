package day0624;

import java.util.LinkedList;
import java.util.Queue;

public class BinaryTreeSearch<T> { //<> : 제네릭표현방법 => 자료형을 명시
	
	private Object[] nodes;//입력 데이터 저장 배열
	private int lastIndex; //마지막 인덱스
	private final int SIZE;//배열크기 지정  
	//==> final변수는 상수(constant)이므로 반드시 초기화 해서 사용!!
	//1. 선언과 동시에 초기값 설정   2. 생성자에서 초기화
	
	public BinaryTreeSearch(int size) {
		SIZE = size;
		nodes = new Object[size+1];// 0인덱스 사용 안함
	}
	
	//데이터 추가
	public void add(T e) {
		if(isFull()){
			System.out.println("포화상태입니다..");
			return;
		}
		nodes[++lastIndex] = e;		
	}
	
	
	public boolean isEmpty(){
		return lastIndex == 0;
	}	
	
	private boolean isFull(){
		return lastIndex == SIZE;
	}

	public void bfs() {
		//1. 큐(대기열FIFO)생성  Queue : 구현체(LinkedList,ArrayDeque)
		Queue<Integer> queue = new LinkedList<Integer>();
		
		//2. 큐에 루트노드 입력
		queue.offer(1); //'A'가 입력된 배열 인덱스
		
		int current;
		//3. 반복문 : 빈 대기열확인
		while(!queue.isEmpty()) {//종료조건 (데이터가 있다면 반복)
			current = queue.poll();//(기준,부모노드)데이터 뽑기
			
			//데이터에 대한 처리 ==> 데이터 출력
			System.out.println(nodes[current]);
			
			//자식노드 찾기 : 이진트리 => *2(왼쪽자식노드)  *2+1(오른쪽자식노드)
			
			//자식노드 대기열에 추가
			if(current*2 <= lastIndex) queue.offer(current*2);
			if(current*2+1 <= lastIndex) queue.offer(current*2+1);
		}
		
	}//bfs
	
	public void printTreeByPreOrder(){
		System.out.print("PreOrder :");
		printTreeByPreOrder(1);
		System.out.println();
	}
	private void printTreeByPreOrder(int current){
		System.out.print(nodes[current]+" "); // 현재 노드 방문처리
		if(current*2<=lastIndex) printTreeByPreOrder(current*2);// 왼쪽 자식노드 방문처리
		if(current*2+1<=lastIndex) printTreeByPreOrder(current*2+1);// 오른쪽 자식노드 방문처리
	}
	
	public void printTreeByInOrder(){
		System.out.print("InOrder :");
		printTreeByInOrder(1);
		System.out.println();
	}
	
	private void printTreeByInOrder(int current){
		if(current > lastIndex) return;
		
		printTreeByInOrder(current*2);			// 왼쪽 자식노드 방문처리
		System.out.print(nodes[current]+" ");		// 현재 노드 방문처리
		printTreeByInOrder(current*2+1);			// 오른쪽 자식노드 방문처리
	}
	
	public void printTreeByPostOrder(){
		System.out.print("PostOrder :");
		printTreeByPostOrder(1);
		System.out.println();
	}
	private void printTreeByPostOrder(int current){
		if(current > lastIndex) return;
		
		printTreeByPostOrder(current*2);			// 왼쪽 자식노드 방문처리
		printTreeByPostOrder(current*2+1);		// 오른쪽 자식노드 방문처리
		System.out.print(nodes[current]+" ");		// 현재 노드 방문처리
		
	}	
	
}
