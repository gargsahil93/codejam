<div class="problem-description problem-analysis-detail"><div class="problem-statement-string"><h3>Problem</h3> <p>
  Pascal's triangle consists of an infinite number of rows of an increasing
  number of integers each, arranged in a triangular shape.
</p><p>
  Let us define (r, k) as the k-th position from the left in the r-th row,
  with both r and k counted starting from 1.
  Then Pascal's triangle is defined by the following rules:
</p> <ul><li>The r-th row contains r positions (r, 1), (r, 2), ..., (r, r).</li> <li>The numbers at positions (r, 1) and (r, r) are 1, for all r.</li> <li>The number at position (r, k) is the sum of the numbers at positions
    (r - 1, k - 1) and (r - 1, k), for all k with 2 ≤ k ≤ r - 1.</li></ul> <p>
  The first 5 rows of Pascal's triangle look like this:
</p> <p style="text-align: center;"><img src="https://codejam.googleapis.com/dashboard/get_file/AQj_6U3oBspTYXQvoDa1FnCqRLSz7uw68lsleQuZDeKaCI-zdq9BVZ4DIfn5oMdX286_UlEPKKEcPlExDlsr/pascal_triangle.png" style="width: 250px; height: auto;"></p> <p>
  In this problem, a <i>Pascal walk</i> is a sequence of s positions
  (r<sub>1</sub>, k<sub>1</sub>),  (r<sub>2</sub>, k<sub>2</sub>), ...,
  (r<sub>s</sub>, k<sub>s</sub>)
  in Pascal's triangle that satisfy the following criteria:
</p> <ul><li>r<sub>1</sub> = 1 and k<sub>1</sub> = 1.</li> <li>Each subsequent position must be within the triangle and adjacent (in
    one of the six possible directions) to the previous position. That is,
    for all i ≥ 1, (r<sub>i + 1</sub>, k<sub>i + 1</sub>) must be one of
    the following that is within the triangle:
    (r<sub>i</sub> - 1, k<sub>i</sub> - 1), (r<sub>i</sub> - 1, k<sub>i</sub>),
    (r<sub>i</sub>, k<sub>i</sub> - 1), (r<sub>i</sub>, k<sub>i</sub> + 1),
    (r<sub>i</sub> + 1, k<sub>i</sub>), (r<sub>i</sub> + 1, k<sub>i</sub> + 1).
  </li> <li>No position may be repeated within the sequence. That is, for every i
    ≠ j, either r<sub>i</sub> ≠ r<sub>j</sub> or k<sub>i</sub> ≠
    k<sub>j</sub>, or both.</li></ul> <p>
  Find any Pascal walk of S ≤ 500 positions such that the sum of the numbers
  in all of the positions it visits is equal to <b>N</b>. It is guaranteed
  that at least one such walk exists for every <b>N</b>.
</p> <h3>Input</h3> <p>
  The first line of the input gives the number of test cases, <b>T</b>.
  <b>T</b> test cases follow. Each consists of a single line containing a
  single integer <b>N</b>.
</p> <h3>Output</h3> <p>
  For each test case, first output a line containing <code>Case #x:</code>,
  where <code>x</code> is the test case number (starting from 1). Then, output
  your proposed Pascal walk of length S ≤ 500 using S additional lines. The i-th of
  these lines must be <code>r<sub>i</sub> k<sub>i</sub></code> where
  (r<sub>i</sub>, k<sub>i</sub>) is the i-th position in the walk. For example, the first line
  should be <code>1 1</code> since the first position for all valid walks is (1, 1).
  The sum of the numbers at the S positions of your proposed Pascal walk must be exactly <b>N</b>.
</p> <h3>Limits</h3> <p>
  Time limit: 20 seconds per test set.<br>
  Memory limit: 1GB.<br>
  1 ≤ <b>T</b> ≤ 100.<br></p> <h4>Test set 1 (Visible Verdict)</h4> <p>
  1 ≤ <b>N</b> ≤ 501.<br></p> <h4>Test set 2 (Visible Verdict)</h4> <p>
  1 ≤ <b>N</b> ≤ 1000.<br></p> <h4>Test set 3 (Hidden Verdict)</h4> <p>
  1 ≤ <b>N</b> ≤ 10<sup>9</sup>.<br></p> <h3>Sample</h3> <div class="problem-io-wrapper"><table><tr><td><br> <span class="io-table-header">Input</span> <br>&nbsp;
  </td> <td><br> <span class="io-table-header">Output</span> <br>&nbsp;
  </td></tr> <tr><td><pre class="io-content">3
1
4
19

  </pre></td> <td><pre class="io-content">Case #1:
1 1
Case #2:
1 1
2 1
2 2
3 3
Case #3:
1 1
2 2
3 2
4 3
5 3
5 2
4 1
3 1

  </pre></td></tr></table></div> <p>
  In Sample Case #1, only the starting position is needed.
</p> <p style="text-align: center;"><img src="https://codejam.googleapis.com/dashboard/get_file/AQj_6U16a3XAta8SpLMjOA7a4nRIewel7LMBVnZNpGwzoPiOHyCmp6BT3PGNPJVsIOORIXt2t8Fm64ltTg/sample_case_1.png" style="width: 250px; height: auto;"></p> <p>
  In Sample Case #2, notice that although a shorter path exists, the path does
  not need to be of minimal length, as long as it uses no more than 500
  positions.
</p> <p style="text-align: center;"><img src="https://codejam.googleapis.com/dashboard/get_file/AQj_6U3O6oyGfAj6qCy6YNX-XntrAJKITCNB9suU3IvD9xGPYTZgcsZvcZ1S1HckE3nXMl9_pRe9IwbmFg/sample_case_2.png" style="width: 250px; height: auto;"></p> <p>
  The following image depicts our solution to Sample Case #3:
</p> <p style="text-align: center;"><img src="https://codejam.googleapis.com/dashboard/get_file/AQj_6U19xA6lCXIEkIET8zsGQcxE656YbAxW8yr-PvGY23WjIxkhKw2xZBlp-PAW8xyiNGiBA7Mep6YRew/sample_case_3.png" style="width: 250px; height: auto;"></p></div></div>