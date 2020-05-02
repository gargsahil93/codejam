<div class="problem-description problem-analysis-detail"><div class="problem-statement-string"><h3>Problem</h3> <p>
  Today <i>will</i> be the day—today will be the day that you finally
  get a picture with Peppurr the cat!
</p><p>
  It has just been announced that Peppurr will be touring your city. The city has infinitely
  many infinitely-long streets running north-south and infinitely many infinitely-long streets
  running east-west. An intersection is any point at which a north-south street and an
  east-west street meet. From any given intersection, the closest intersection in each of the
  four directions (north, east, south and west) is exactly one block away.
</p><p>
  You know the exact path that Peppurr's tour will take along those streets.
  Your goal is to be at one of the intersections on Peppurr's tour at the same time that
  Peppurr is there, and you want to do so as fast as possible. This is how you will
  get your picture with Peppurr!
</p><p>
  Peppurr's tour starts at an intersection that is <b>X</b> blocks east and <b>Y</b>
  blocks north of the intersection where you are currently located. Both you and Peppurr
  take exactly one minute to walk one full block, and must finish each minute at an
  intersection; neither of you can walk partial blocks.
</p><p>
  Peppurr moves along a predefined path. Every minute, you can
  choose to stand still for the minute, or use it to walk a single block in any of
  the 4 directions (north, east, south or west). Both you and Peppurr only walk along the
  streets.
</p><p>
  If you and Peppurr are at the same intersection at the same time, you can take
  a picture, even at the last intersection of the tour. However, Peppurr is unavailable
  for pictures after the tour ends, so arriving at the tour's final intersection
  even a single minute after the tour finishes means you will not get a picture.
</p><p>
  Is it possible to get a picture with Peppurr? If so, how soon can you do it?
</p> <h3>Input</h3> <p>
  The first line of the input gives the number of test cases, <b>T</b>.
  <b>T</b> test cases follow. Each case consists of one line containing two
  integers, <b>X</b> and <b>Y</b>, and a string of characters <b>M</b>.
  This represents that Peppurr's tour starts exactly <b>X</b> blocks east
  and <b>Y</b> blocks north of you. The string <b>M</b> is the sequence
  of moves that Peppurr will make.
  The i-th character in <b>M</b> is one of <code>N</code>,
  <code>E</code>, <code>S</code> or <code>W</code>, and corresponds to the
  direction (north, east, south, or west, respectively) in which Peppurr will
  walk one block during the tour's i-th minute.
</p> <h3>Output</h3> <p>
  For each test case, output one line with <code>Case #x: y</code>, where
  <code>x</code> is the test case number (starting from 1). If there is no way
  to get a picture with Peppurr, <code>y</code> is <code>IMPOSSIBLE</code>. Otherwise,
  <code>y</code> is the smallest number of minutes from the start of the tour needed
  to get a picture with Peppurr.
</p> <h3>Limits</h3> <p>
  1 ≤ <b>T</b> ≤ 100.<br>
  Time limit: 20 seconds per test set.<br>
  Memory limit: 1GB.<br>
  (<b>X</b>, <b>Y</b>) ≠ (0, 0). (The tour does not start in the same intersection as you.)<br></p> <h4>Test Set 1 (Visible Verdict)</h4> <p>
  0 ≤ <b>X</b> ≤ 10.<br>
  0 ≤ <b>Y</b> ≤ 10.<br>
  1 ≤ length of <b>M</b> ≤ 8.<br>
  Each character in <b>M</b> is an uppercase letter —
      either <code>N</code> or <code>S</code>.<br></p> <h4>Test Set 2 (Visible Verdict)</h4> <p>
  0 ≤ <b>X</b> ≤ 1000.<br>
  0 ≤ <b>Y</b> ≤ 1000.<br>
  1 ≤ length of <b>M</b> ≤ 1000.<br>
  Each character in <b>M</b> is an uppercase letter —
      either <code>N</code> or <code>S</code>.<br></p> <h4>Test Set 3 (Visible Verdict)</h4> <p>
  0 ≤ <b>X</b> ≤ 1000.<br>
  0 ≤ <b>Y</b> ≤ 1000.<br>
  1 ≤ length of <b>M</b> ≤ 1000.<br>
  Each character in <b>M</b> is an uppercase letter —
      either <code>N</code>, <code>E</code>, <code>S</code> or <code>W</code>.<br></p> <h3>Sample</h3> <div class="problem-io-wrapper"><table><tr><td><br> <span class="io-table-header">Input</span> <br>&nbsp;
  </td> <td><br> <span class="io-table-header">Output</span> <br>&nbsp;
  </td></tr> <tr><td><pre class="io-content">5
4 4 SSSS
3 0 SNSS
2 10 NSNNSN
0 1 S
2 7 SSSSSSSS

  </pre></td> <td><pre class="io-content">Case #1: 4
Case #2: IMPOSSIBLE
Case #3: IMPOSSIBLE
Case #4: 1
Case #5: 5

  </pre></td></tr></table></div> <p>
  In Sample Case #1, you can walk east four blocks and you will be able to take a picture
  with Peppurr on the tour's last intersection.
</p><p>
  In Sample Case #2, the tour starts off exactly three blocks to the east of you. No matter how
  you move, you cannot get a picture with Peppurr.
</p><p>
  In Sample Case #3, the tour is too far north for you to get the picture before the tour ends.
</p><p>
  In Sample Case #4, the tour will come to you after one minute, so you don't even have to move!
  Enjoy the picture with Peppurr! Remember that you can only take pictures in intersections,
  so if you moved north while the tour moved south, which would cause you to cross paths
  with Peppurr outside of an intersection, you could not get your picture in 0.5 minutes.
</p><p>
  In Sample Case #5, you can move north twice, then east twice. Then, you can stay still
  and you will be able to take a picture with Peppurr in the next minute. There are other
  paths you can take which can get you a picture with Peppurr in 5 minutes, but none which
  can do it sooner than that.
</p><p>
  The following two cases could not appear in Test Set 1 or Test Set 2, but could appear in Test
  Set 3:
</p> <pre>2
3 2 SSSW
4 0 NESW
</pre> <p>
  The correct output for these two cases would be:
</p> <pre>Case #1: 4
Case #2: 4
</pre> <p>
  Note that in Case #1, you can take a picture with Peppurr one block to the south
  and two blocks to the east of your original starting point.
</p><p>
  In Case #2, Peppurr travels in a small square. You can take a picture when Peppurr
  returns to the starting point of that square.
</p></div></div>