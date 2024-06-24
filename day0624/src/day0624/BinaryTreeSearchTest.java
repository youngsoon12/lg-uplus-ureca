package day0624;

import java.util.Arrays;

public class BinaryTreeSearchTest {

	public static void main(String[] args) {
		 int size = 9;
		 BinaryTreeSearch<Character> tree = new BinaryTreeSearch<>(size);
		
		 // 'A'부터 9개의 문자를 저장!
		for (int i = 0; i<size; i++) {
			tree.add((char)(65+i));
		}
		
		tree.bfs();
		
		System.out.println("==============");
		 tree.printTreeByPreOrder();
		 tree.printTreeByInOrder();
		 tree.printTreeByPostOrder();

	} // main

}
