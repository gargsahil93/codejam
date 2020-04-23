<div class="problem-statement-string"><h3>Problem</h3> <p>
  You have just received the best gift ever: an Expogo stick. You can stand on
  it and use it to make increasingly large jumps.
</p><p>
  You are currently standing on point (0, 0) in your infinite two-dimensional
  backyard, and you are trying to reach a goal point (<b>X</b>, <b>Y</b>), with
  integer coordinates, in as few jumps as possible. You must land exactly on
  the goal point; it is not sufficient to pass over it on a jump.
</p><p>
  Each time you use your Expogo stick to jump, you pick a cardinal direction:
  north, south, east, or west. The i-th jump with your Expogo stick moves you
  2<sup>(i-1)</sup> units in the chosen direction, so your first jump takes you
  1 unit, your second jump takes you 2 units, your third jump takes you 4 units,
  and so on.
</p><p>
  Given a goal point (<b>X</b>, <b>Y</b>), determine whether it is possible to
  get there, and if so, demonstrate how to do it using as few jumps as
  possible.
</p> <h3>Input</h3> <p>
  The first line of the input gives the number of test cases, <b>T</b>.
  <b>T</b> test cases follow. Each consists of a single line with two integers
  <b>X</b> and <b>Y</b>: the coordinates of the goal point.
</p> <h3>Output</h3> <p>
  For each test case, output one line containing <code>Case #x: y</code>, where
  <code>x</code> is the test case number (starting from 1) and <code>y</code>
  is <code>IMPOSSIBLE</code> if the goal point cannot be reached. Otherwise,
  <code>y</code> must be a string of one or more characters, each of which is
  either <code>N</code> (north), <code>S</code> (south), <code>E</code> (east),
  or <code>W</code> (west), representing the directions of the jumps that you
  will make, in order. This sequence of jumps must reach the goal point at the
  end of the final jump, and it must be as short as possible.
</p> <h3>Limits</h3> <p>
  Time limit: 20 seconds per test set.<br>
  Memory limit: 1GB.<br>
  (<b>X</b>, <b>Y</b>) ≠ (0, 0).<br></p> <h4>Test set 1 (Visible Verdict)</h4> <p>
  1 ≤ <b>T</b> ≤ 80.<br>
  -4 ≤ <b>X</b> ≤ 4.<br>
  -4 ≤ <b>Y</b> ≤ 4.<br></p> <h4>Test set 2 (Visible Verdict)</h4> <p>
  1 ≤ <b>T</b> ≤ 100.<br>
  -100 ≤ <b>X</b> ≤ 100.<br>
  -100 ≤ <b>Y</b> ≤ 100.<br></p> <h4>Test set 3 (Visible Verdict)</h4> <p>
  1 ≤ <b>T</b> ≤ 100.<br>
  -10<sup>9</sup> ≤ <b>X</b> ≤ 10<sup>9</sup>.<br>
  -10<sup>9</sup> ≤ <b>Y</b> ≤ 10<sup>9</sup>.<br></p> <h3>Sample</h3> <div class="problem-io-wrapper"><table><tr><td><br> <span class="io-table-header">Input</span> <br>&nbsp;
  </td> <td><br> <span class="io-table-header">Output</span> <br>&nbsp;
  </td></tr> <tr><td><pre class="io-content">4
2 3
-2 -3
3 0
-1 1

  </pre></td> <td><pre class="io-content">Case #1: SEN
Case #2: NWS
Case #3: EE
Case #4: IMPOSSIBLE

  </pre></td></tr></table></div> <p>
  In Sample Case #1, you can jump south from (0, 0) to (0, -1), then jump east
  to (2, -1), then jump north to (2, 3).
</p><p>
  We can be sure there is not a more efficient solution (two moves or fewer)
  because at least 2 + 3 = 5 units of distance are needed to reach the goal
  point, but the first two jumps combined only give us 3 units of distance.
</p><p>
  Notice that Sample Case #2 is like Sample Case #1 but reflected across both
  axes, and so the answer comes from reflecting all directions in Sample Case
  #1's answer.
</p><p>
  In Sample Case #3, notice that <code>EWE</code> would not be a valid answer,
  even though it reaches the target, because there is a way to get there using
  fewer jumps.
</p><p>
  We leave it to you to determine why it is impossible to reach the target in
  Sample Case #4.
</p></div>