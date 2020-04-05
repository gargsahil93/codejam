<div class="problem-description problem-analysis-detail"><div class="problem-statement-string"><h3>Problem</h3> <p>
  tl;dr: Given a string of digits <b>S</b>, insert a minimum number of opening
  and closing parentheses into it such that the resulting string is balanced and
  each digit d is inside exactly d pairs of matching parentheses.
</p><p>
  Let the <i>nesting</i> of two parentheses within a string be the substring
  that occurs strictly between them. An opening parenthesis and a closing
  parenthesis that is further to its right are said to <i>match</i> if their
  nesting is empty, or if every parenthesis in their nesting matches with
  another parenthesis in their nesting. The <i>nesting depth</i> of a position
  p is the number of pairs of matching parentheses m such that p is included in
  the nesting of m.
</p><p>
  For example, in the following strings, all digits match their nesting
  depth: <code>0((2)1)</code>, <code>(((3))1(2))</code>, <code>((((4))))</code>,
  <code>((2))((2))(1)</code>. The first three strings have minimum length among
  those that have the same digits in the same order, but the last one does not
  since <code>((22)1)</code> also has the digits <code>221</code> and is
  shorter.
</p><p>
  Given a string of digits <b>S</b>, find another string S',
  comprised of parentheses and digits, such that:
  <ul><li>all parentheses in S' match some other parenthesis,</li> <li>removing any and all parentheses from S' results in <b>S</b>,</li> <li>each digit in S' is equal to its nesting depth, and</li> <li>S' is of minimum length.</li></ul></p> <h3>Input</h3> <p>
  The first line of the input gives the number of test cases, <b>T</b>.
  <b>T</b> lines follow. Each line represents a test case and contains only the
  string <b>S</b>.
</p> <h3>Output</h3> <p>
  For each test case, output one line containing <code>Case #x: y</code>, where
  <code>x</code> is the test case number (starting from 1) and <code>y</code>
  is the string S' defined above.
</p> <h3>Limits</h3> <p>
  Time limit: 20 seconds per test set.<br>
  Memory limit: 1GB.<br>
  1 ≤ <b>T</b> ≤ 100.<br>
  1 ≤ length of <b>S</b> ≤ 100.<br></p> <h4>Test set 1 (Visible Verdict)</h4> <p>
  Each character in <b>S</b> is either <code>0</code> or <code>1</code>.<br></p> <h4>Test set 2 (Visible Verdict)</h4> <p>
  Each character in <b>S</b> is a decimal digit between <code>0</code> and
  <code>9</code>, inclusive.<br></p> <h3>Sample</h3> <div class="problem-io-wrapper"><table><tr><td><br> <span class="io-table-header">Input</span> <br>&nbsp;
  </td> <td><br> <span class="io-table-header">Output</span> <br>&nbsp;
  </td></tr> <tr><td><pre class="io-content">4
0000
101
111000
1

  </pre></td> <td><pre class="io-content">Case #1: 0000
Case #2: (1)0(1)
Case #3: (111)000
Case #4: (1)

  </pre></td></tr></table></div> <p>
  The strings <code>()0000()</code>, <code>(1)0(((()))1)</code> and
  <code>(1)(11)000</code> are not valid solutions to Sample Cases #1, #2 and
  #3, respectively, only because they are not of minimum length. In addition,
  <code>1)(</code> and <code>)(1</code> are not valid solutions to Sample Case
  #4 because they contain unmatched parentheses and the nesting depth is 0
  at the position where there is a 1.
</p><p>
  You can create sample inputs that are valid only for Test Set 2 by removing
  the parentheses from the example strings mentioned in the problem statement.
</p></div></div>