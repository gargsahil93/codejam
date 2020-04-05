<div class="problem-description problem-analysis-detail"><div class="problem-statement-string"><h3>Problem</h3> <p>
  Vestigium means "trace" in Latin. In this problem we work with Latin squares
  and matrix traces.
</p><p>
  The <i>trace</i> of a square matrix is the sum of the values on the main
  diagonal (which runs from the upper left to the lower right).
</p><p>
  An <b>N</b>-by-<b>N</b> square matrix is a <i>Latin square</i> if each
  cell contains one of <b>N</b> different values, and no value is repeated
  within a row or a column. In this problem, we will deal only with "natural
  Latin squares" in which the <b>N</b> values are the integers between 1 and
  <b>N</b>.
</p><p>
  Given a matrix that contains only integers between 1 and <b>N</b>, we want to
  compute its trace and check whether it is a natural Latin square. To give
  some additional information, instead of simply telling us whether the matrix
  is a natural Latin square or not, please compute the number of rows and the
  number of columns that contain repeated values.
</p> <h3>Input</h3> <p>
  The first line of the input gives the number of test cases, <b>T</b>.
  <b>T</b> test cases follow. Each starts with a line containing a single
  integer <b>N</b>: the size of the matrix to explore. Then, <b>N</b> lines
  follow. The i-th of these lines contains <b>N</b> integers
  <b>M<sub>i,1</sub></b>, <b>M<sub>i,2</sub></b> ..., <b>M<sub>i,N</sub></b>.
  <b>M<sub>i,j</sub></b> is the integer in the i-th row and j-th column of the
  matrix.
</p> <h3>Output</h3> <p>
  For each test case, output one line containing <code>Case #x: k r c</code>,
  where <code>x</code> is the test case number (starting from 1),
  <code>k</code> is the trace of the matrix, <code>r</code> is the number of
  rows of the matrix that contain repeated elements, and <code>c</code> is the
  number of columns of the matrix that contain repeated elements.
</p> <h3>Limits</h3> <h4>Test set 1 (Visible Verdict)</h4> <p>
  Time limit: 20 seconds per test set.<br>
  Memory limit: 1GB.<br>
  1 ≤ <b>T</b> ≤ 100.<br>
  2 ≤ <b>N</b> ≤ 100.<br>
  1 ≤ <b>M<sub>i,j</sub></b> ≤ <b>N</b>, for all i, j.<br></p> <h3>Sample</h3> <div class="problem-io-wrapper"><table><tr><td><br> <span class="io-table-header">Input</span> <br>&nbsp;
  </td> <td><br> <span class="io-table-header">Output</span> <br>&nbsp;
  </td></tr> <tr><td><pre class="io-content">3
4
1 2 3 4
2 1 4 3
3 4 1 2
4 3 2 1
4
2 2 2 2
2 3 2 3
2 2 2 3
2 2 2 2
3
2 1 3
1 3 2
1 2 3

  </pre></td> <td><pre class="io-content">Case #1: 4 0 0
Case #2: 9 4 4
Case #3: 8 0 2

  </pre></td></tr></table></div> <p>
  In Sample Case #1, the input is a natural Latin square, which means no row or
  column has repeated elements. All four values in the main diagonal are 1, and
  so the trace (their sum) is 4.
</p><p>
  In Sample Case #2, all rows and columns have repeated elements. Notice that
  each row or column with repeated elements is counted only once regardless of
  the number of elements that are repeated or how often they are repeated
  within the row or column. In addition, notice that some integers in the range
  1 through <b>N</b> may be absent from the input.
</p><p>
  In Sample Case #3, the leftmost and rightmost columns have repeated elements.
</p></div></div>