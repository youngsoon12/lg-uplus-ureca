import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class practice {

	public static void main(String[] args) throws IOException,NoSuchElementException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String str = br.readLine();
		StringTokenizer tokens = new StringTokenizer(str);
		for(int i=0; i<str.length(); i++) {
			System.out.println(Integer.parseInt(tokens.nextToken()));
		}

	}
}
