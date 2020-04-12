<div class="problem-description problem-analysis-detail"><div class="problem-statement-string"><h3>Problem</h3> <p>
  You are organizing an international dancing competition. You have already obtained all of the
  following:
</p> <ul><li>A dance floor with <b>R</b> rows and <b>C</b> columns, consisting of unit square cells;</li> <li><b>R × C</b> competitors;</li> <li>A cutting-edge automated judge for the competition.</li></ul> <p>
  But you are still missing an audience! You are worried that the competition might not be
  interesting enough, so you have come up with a way to calculate the <i>interest level</i>
  for the competition.
</p> <p>
  Each competitor occupies one square unit cell of the floor and stays there until they are
  eliminated. A <i>compass neighbor</i> of a competitor x is another competitor y chosen such that
  y shares a row or column with x, and there are no competitors still standing in cells in
  between x and y. Each competitor may have between 0 and 4 compass neighbors, inclusive,
  and the number may decrease if all the other competitors in one orthogonal direction
  are eliminated.
</p><p>
  The competition runs one round at a time.
  In between rounds i and i+1, if a competitor d had at least one compass neighbor during
  round i, and d's skill level is strictly less than the average skill level of all of d's
  compass neighbors, d is eliminated and is not part of the competition for rounds
  i+1, i+2, i+3, etc.
  Notice that d still counts as a neighbor of their other compass neighbors for the purpose
  of other eliminations that may also happen between rounds i and i+1.
  Competitors that do not have any compass neighbors are never eliminated.
  If after a round no competitor is eliminated, then the competition ends.
</p><p>
  The <i>interest level of a round</i> is the sum of skill levels of the competitors dancing in
  that round (even any competitors that are to be eliminated between that round and the next).
  The <i>interest level of the competition</i> is the sum of the interest levels of all of the
  rounds.
</p> <p>
  Given the skill levels of the dancers that are on the floor for the first round,
  what is the interest level of the competition?
</p> <h3>Input</h3> <p>
  The first line of the input gives the number of test cases, <b>T</b>.
  <b>T</b> test cases follow. Each test case begins with a line containing
  two integers <b>R</b> and <b>C</b>. Then, there are <b>R</b> more lines containing <b>C</b>
  integers each. The j-th value on the i-th of these lines, <b>S<sub>i, j</sub></b>,
  represents the skill level of the dancer in the cell in the i-th row and j-th
  column of the floor.
</p> <h3>Output</h3> <p>
  For each test case, output one line containing
  <code>Case #x: y</code>,
  where <code>x</code> is the test case number (starting from 1) and
  <code>y</code> is the interest level of the competition.
</p> <h3>Limits</h3> <p>
  Time limit: 40 seconds per test set.<br>
  Memory limit: 1GB.<br>
  1 ≤ <b>S<sub>i,j</sub></b> ≤ 10<sup>6</sup>, for all i and j.<br></p> <h4>Test set 1 (Visible Verdict)</h4> <p>
  1 ≤ <b>T</b> ≤ 100.<br>
  1 ≤ <b>R</b> × <b>C</b> ≤ 100.<br></p> <h4>Test set 2 (Hidden Verdict)</h4> <p>
  10 ≤ <b>T</b> ≤ 100.<br>
  1000 &lt; <b>R</b> × <b>C</b> ≤ 10<sup>5</sup>, in exactly 10 cases.<br>
  1 ≤ <b>R</b> × <b>C</b> ≤ 1000, in exactly <b>T</b> - 10 cases.<br></p> <h3>Sample</h3> <div class="problem-io-wrapper"><table><tr><td><br> <span class="io-table-header">Input</span> <br>&nbsp;
  </td> <td><br> <span class="io-table-header">Output</span> <br>&nbsp;
  </td></tr> <tr><td><pre class="io-content">4
1 1
15
3 3
1 1 1
1 2 1
1 1 1
1 3
3 1 2
1 3
1 2 3

  </pre></td> <td><pre class="io-content">Case #1: 15
Case #2: 16
Case #3: 14
Case #4: 14

  </pre></td></tr></table></div> <p>
  In Sample Case #1, only one competitor is on the floor. Since the competitor does not have any
  compass neighbors, they dance in one round, and then the competition is over. Thus the answer is
  equal to the dancer's skill level, 15.
</p> <p>
  In Sample Case #2, the interest level of the first round is
  1+1+1+1+2+1+1+1+1=10.
</p><p>
  The competitors that are not in the center nor in a corner have a skill level of 1, but the
  average of their compass neighbors is 4 / 3, which is greater than 1, so they are eliminated.
  The floor during the second round looks like this:
</p> <pre>1 . 1
. 2 .
1 . 1
</pre> <p>
  This round is the last one. The competitors in the corner have two compass neighbors each,
  but the average of their skill level is equal to their own. The competitor in the center has
  no compass neighbor. The interest level of the round is 1+1+2+1+1=6.
  This means the interest level of the competition is 10+6=16.
</p> <p>
  In Sample Case #3, the competitor with skill level 1 is eliminated after the first round, while
  the other two remain. In the second round, the two other competitors become compass neighbors,
  and this causes the competitor with skill level 2 to be eliminated. There is a single competitor
  in the third round, which makes it the last one. The interest levels of the rounds are 6, 5 and 3,
  making the interest level of the competition 14.
</p></div></div>