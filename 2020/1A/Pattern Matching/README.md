<div class="problem-statement-string"><h3>Problem</h3> <p>
  Many terminals use asterisks (<code>*</code>) to signify "any string",
  including the empty string. For example, when listing files matching
  <code>BASH*</code>, a terminal may list <code>BASH</code>,
  <code>BASHER</code> and <code>BASHFUL</code>. For <code>*FUL</code>, it may
  list <code>BEAUTIFUL</code>, <code>AWFUL</code> and <code>BASHFUL</code>.
  When listing <code>B*L</code>, <code>BASHFUL</code>, <code>BEAUTIFUL</code>
  and <code>BULL</code> may be listed.
</p><p>
  In this problem, formally, a <i>pattern</i> is a string consisting of only
  uppercase English letters and asterisks (<code>*</code>), and a <i>name</i>
  is a string consisting of only uppercase English letters. A pattern <i>p</i>
  matches a name <i>m</i> if there is a way of replacing every asterisk in
  <i>p</i> with a (possibly empty) string to obtain <i>m</i>. Notice that each
  asterisk may be replaced by a different string.
</p><p>
  Given <b>N</b> patterns, can you find a single name of at most 10<sup>4</sup>
  letters that matches all those patterns at once, or report that it cannot be done?
</p> <h3>Input</h3> <p>
  The first line of the input gives the number of test cases, <b>T</b>.
  <b>T</b> test cases follow. Each test case starts with a line with a single
  integer <b>N</b>: the number of patterns to simultaneously match. Then,
  <b>N</b> lines follow, each one containing a single string
  <b>P<sub>i</sub></b> representing the i-th pattern.
</p> <h3>Output</h3> <p>
  For each test case, output one line containing <code>Case #x: y</code>, where
  <code>x</code> is the test case number (starting from 1) and <code>y</code>
  is any name containing at most 10<sup>4</sup> letters such that each
  <b>P<sub>i</sub></b> matches <code>y</code> according to the definition
  above, or <code>*</code> (i.e., just an asterisk) if there is no such name.
</p> <h3>Limits</h3> <p>
  Time limit: 20 seconds per test set.<br>
  Memory limit: 1GB.<br>
  1 ≤ <b>T</b> ≤ 100.<br>
  2 ≤ <b>N</b> ≤ 50.<br>
  2 ≤ length of <b>P<sub>i</sub></b> ≤ 100, for all i.<br>
  Each character of <b>P<sub>i</sub></b> is either an uppercase English letter
  or an asterisk (<code>*</code>), for all i.<br>
  At least one character of <b>P<sub>i</sub></b> is an uppercase English
  letter, for all i.
</p> <h4>Test set 1 (Visible Verdict)</h4> <p>
  Exactly one character of <b>P<sub>i</sub></b> is an asterisk
  (<code>*</code>), for all i.<br>
  The leftmost character of <b>P<sub>i</sub></b> is the only asterisk
  (<code>*</code>), for all i.<br></p> <h4>Test set 2 (Visible Verdict)</h4> <p>
  Exactly one character of <b>P<sub>i</sub></b> is an asterisk
  (<code>*</code>), for all i.<br></p> <h4>Test set 3 (Visible Verdict)</h4> <p>
  At least one character of <b>P<sub>i</sub></b> is an asterisk
  (<code>*</code>), for all i.<br></p> <h3>Sample</h3> <div class="problem-io-wrapper"><table><tr><td><br> <span class="io-table-header">Input</span> <br>&nbsp;
  </td> <td><br> <span class="io-table-header">Output</span> <br>&nbsp;
  </td></tr> <tr><td><pre class="io-content">2
5
*CONUTS
*COCONUTS
*OCONUTS
*CONUTS
*S
2
*XZ
*XYZ

  </pre></td> <td><pre class="io-content">Case #1: COCONUTS
Case #2: *

  </pre></td></tr></table></div> <p>
  In Sample Case #1, there are other possible answers, including
  <code>COCOCONUTS</code> and <code>ILIKECOCONUTS</code>.
  Neither <code>COCONUTSAREGREAT</code> nor <code>COCOANUTS</code> would be
  acceptable. Notice that the same pattern may appear more than once within a
  test case.
</p><p>
  In Sample Case #2, there is no acceptable name, so the answer is
  <code>*</code>.
</p><p>
  The following cases could not appear in Test Set 1, but could appear in Test
  Set 2 or Test Set 3:
</p> <pre>  4
  H*O
  HELLO*
  *HELLO
  HE*
</pre> <p><code>HELLO</code> and <code>HELLOGOODBYEHELLO</code> are examples of
  acceptable answers. <code>OTHELLO</code> and <code>HELLOO</code> would not be
  acceptable.
</p> <pre>  2
  CO*DE
  J*AM
</pre> <p>
  There is no name that matches both patterns, so the answer would be
  <code>*</code>.
</p> <pre>  2
  CODE*
  *JAM
</pre> <p><code>CODEJAM</code> is one example of an acceptable answer.
</p> <p>
  The following cases could not appear in Test Set 1 or Test Set 2, but could
  appear in Test Set 3:
</p> <pre>  2
  A*C*E
  *B*D*
</pre> <p><code>ABCDE</code> and <code>ABUNDANCE</code> are among the possible
  acceptable answers, but <code>BOLDFACE</code> is not.
</p> <pre>  2
  A*C*E
  *B*D
</pre> <p>
  There is no name that matches both patterns, so the answer would be
  <code>*</code>.
</p> <pre>  2
  **Q**
  *A*
</pre> <p><code>QUAIL</code> and <code>AQ</code> are among the possible acceptable
  answers here.
</p></div>