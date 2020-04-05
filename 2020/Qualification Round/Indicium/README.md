<div class="problem-description problem-analysis-detail"><div class="problem-statement-string"><h3>Problem</h3> <p>
  Indicium means "trace" in Latin. In this problem we work with Latin squares and
  matrix traces.
</p><p>
  A <i>Latin square</i> is an <b>N</b>-by-<b>N</b> square matrix in which each
  cell contains one of <b>N</b> different values, such that no value is
  repeated within a row or a column. In this problem, we will deal only with
  "natural Latin squares" in which the <b>N</b> values are the integers between
  1 and <b>N</b>.
</p><p>
  The <i>trace</i> of a square matrix is the sum of the values on the main
  diagonal (which runs from the upper left to the lower right).
</p><p>
  Given values <b>N</b> and <b>K</b>, produce any <b>N</b>-by-<b>N</b> "natural
  Latin square" with trace <b>K</b>, or say it is impossible. For example, here
  are two possible answers for <b>N</b> = 3, <b>K</b> = 6. In each case, the
  values that contribute to the trace are underlined.
</p><p><code><u>2</u> 1 3&nbsp;&nbsp;&nbsp;<u>3</u> 1 2<br>
  3 <u>2</u> 1&nbsp;&nbsp;&nbsp;1 <u>2</u> 3<br>
  1 3 <u>2</u>&nbsp;&nbsp;&nbsp;2 3 <u>1</u><br></code></p> <h3>Input</h3> <p>
  The first line of the input gives the number of test cases, <b>T</b>.
  <b>T</b> test cases follow. Each consists of one line containing two integers
  <b>N</b> and <b>K</b>: the desired size of the matrix and the desired trace.
</p> <h3>Output</h3> <p>
  For each test case, output one line containing <code>Case #x: y</code>, where
  <code>x</code> is the test case number (starting from 1) and <code>y</code>
  is <code>IMPOSSIBLE</code> if there is no answer for the given parameters or
  <code>POSSIBLE</code> otherwise. In the latter case, output <b>N</b> more
  lines of <b>N</b> integers each, representing a valid "natural Latin square"
  with a trace of <b>K</b>, as described above.
</p> <h3>Limits</h3> <p>
  Time limit: 20 seconds per test set.<br>
  Memory limit: 1GB.<br> <b>N</b> ≤ <b>K</b> ≤ <b>N</b><sup>2</sup>.<br></p> <h4>Test set 1 (Visible Verdict)</h4> <p><b>T</b> = 44.<br>
  2 ≤ <b>N</b> ≤ 5.<br></p> <h4>Test set 2 (Hidden Verdict)</h4> <p>
  1 ≤ <b>T</b> ≤ 100.<br>
  2 ≤ <b>N</b> ≤ 50.<br></p> <h3>Sample</h3> <div class="problem-io-wrapper"><table><tr><td><br> <span class="io-table-header">Input</span> <br>&nbsp;
  </td> <td><br> <span class="io-table-header">Output</span> <br>&nbsp;
  </td></tr> <tr><td><pre class="io-content">2
3 6
2 3

  </pre></td> <td><pre class="io-content">Case #1: POSSIBLE
2 1 3
3 2 1
1 3 2
Case #2: IMPOSSIBLE

  </pre></td></tr></table></div> <p>
  Sample Case #1 is the one described in the problem statement.
</p><p>
  Sample Case #2 has no answer. The only possible 2-by-2
  "natural Latin squares" are as follows:
</p> <code>
  1 2&nbsp;&nbsp;&nbsp;2 1<br>
  2 1&nbsp;&nbsp;&nbsp;1 2<br></code> <p>
  These have traces of 2 and 4, respectively. There is no way to get a trace
  of 3.
</p></div></div>