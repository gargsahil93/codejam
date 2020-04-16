<div class="problem-description problem-analysis-detail"><div class="problem-statement-string"><h3>Problem</h3> <p>
  There are a lot of great streetside food vendors in Manhattan, but without a
  doubt, the one with the tastiest food is the Code Jam Crepe Cart!
</p><p>
  You want to find the cart, but you do not know where it is, except that it is
  at some street intersection. You believe that people from across Manhattan
  are currently walking toward that intersection, so you will try to identify
  the intersection toward which the most people are traveling.
</p><p>
  For the purposes of this problem, Manhattan is a regular grid with its axes
  aligned to compass lines and bounded between 0 and <b>Q</b>, inclusive, on
  each axis. There are west-east streets corresponding to gridlines
  y&nbsp;=&nbsp;0, y&nbsp;=&nbsp;1, y&nbsp;=&nbsp;2, …,
  y&nbsp;=&nbsp;<b>Q</b> and south-north streets corresponding to gridlines
  x&nbsp;=&nbsp;0, x&nbsp;=&nbsp;1, x&nbsp;=&nbsp;2, …,
  x&nbsp;=&nbsp;<b>Q</b>, and people move only along these streets.
  The points where the lines meet — e.g., (0, 0) and (1, 2) — are
  intersections. The shortest distance between two intersections is measured via the
  <a href="https://en.wikipedia.org/wiki/Taxicab_geometry">Manhattan distance</a>
  — that is, by the sum of the absolute horizontal difference and the
  absolute vertical difference between the two sets of coordinates.
</p><p>
  You know the locations of <b>P</b> people, all of whom are standing at
  intersections, and the compass direction each person is headed: north
  (increasing y direction), south (decreasing y direction), east (increasing x
  direction), or west (decreasing x direction). A person is moving toward a
  street intersection if their current movement is on a shortest path to that
  street intersection within the Manhattan grid. For
  example, if a person located at (x<sub>0</sub>, y<sub>0</sub>) is moving
  north, then they are moving toward all street intersections that have
  coordinates (x, y) with y &gt; y<sub>0</sub>.
</p><p>
  You think the crepe cart is at the intersection toward which the most people
  are traveling. Moreover, you believe that more southern and western parts of
  the island are most likely to have a crepe cart, so if there are multiple
  such intersections, you will choose the one with the smallest non-negative
  <code>x</code> coordinate, and if there are multiple such intersections with
  that same <code>x</code> coordinate, the one among those with the smallest
  non-negative <code>y</code> coordinate. Which intersection will you choose?
</p> <h3>Input</h3> <p>
  The first line of the input gives the number of test cases, <b>T</b>.
  <b>T</b> test cases follow. Each test case starts with one line containing
  two integers <b>P</b> and <b>Q</b>: the number of people, and the maximum
  possible value of an x or y coordinate in Manhattan, as described above.
  Then, there are <b>P</b> more lines. The i-th of those lines contains two
  integers <b>X<sub>i</sub></b> and <b>Y<sub>i</sub></b>, the current location
  (street corner) of a person, and a character <b>D<sub>i</sub></b>, the
  direction that person is headed. <b>D<sub>i</sub></b> is one of the uppercase
  letters <code>N</code>, <code>S</code>, <code>E</code>, or <code>W</code>,
  which stand for north, south, east, and west, respectively.
</p> <h3>Output</h3> <p>
  For each test case, output one line containing <code>Case #t: x y</code>,
  where <code>t</code> is the test case number (starting from 1) and
  <code>x</code> and <code>y</code> are the horizontal and vertical coordinates
  of the intersection where you believe the crepe cart is located.
</p> <h3>Limits</h3> <p>
  1 ≤ <b>T</b> ≤ 100.<br>
  Time limit: 20 seconds per test set.<br>
  Memory limit: 1GB.<br>
  1 ≤ <b>P</b> ≤ 500.<br>
  0 ≤ <b>X<sub>i</sub></b> ≤ <b>Q</b>, for all i.<br>
  0 ≤ <b>Y<sub>i</sub></b> ≤ <b>Q</b>, for all i.<br>
  For all i, if <b>X<sub>i</sub></b> = 0,
    <b>D<sub>i</sub></b> ≠ <code>W</code>.<br>
  For all i, if <b>Y<sub>i</sub></b> = 0,
    <b>D<sub>i</sub></b> ≠ <code>S</code>.<br>
  For all i, if <b>X<sub>i</sub></b> = <b>Q</b>,
    <b>D<sub>i</sub></b> ≠ <code>E</code>.<br>
  For all i, if <b>Y<sub>i</sub></b> = <b>Q</b>,
    <b>D<sub>i</sub></b> ≠ <code>N</code>.<br></p> <h4>Test set 1 (Visible)</h4> <p><b>Q</b> = 10.<br></p> <h4>Test set 2 (Hidden)</h4> <p><b>Q</b> = 10<sup>5</sup>.<br></p> <h3>Sample</h3> <div class="problem-io-wrapper"><table><tr><td><br> <span class="io-table-header">Input</span> <br>&nbsp;
  </td> <td><br> <span class="io-table-header">Output</span> <br>&nbsp;
  </td></tr> <tr><td><pre class="io-content">3
1 10
5 5 N
4 10
2 4 N
2 6 S
1 5 E
3 5 W
8 10
0 2 S
0 3 N
0 3 N
0 4 N
0 5 S
0 5 S
0 8 S
1 5 W

  </pre></td> <td><pre class="io-content">Case #1: 0 6
Case #2: 2 5
Case #3: 0 4

  </pre></td></tr></table></div> <p>
  In Sample Case #1, there is only one person, and they are moving north from
  (5, 5). This means that all street corners with y ≥ 6 are possible
  locations for the crepe cart. Of those possibilities, we choose the one with
  lowest x ≥ 0 and then lowest y ≥ 6.
</p><p>
  In Sample Case #2, there are four people, all moving toward location (2, 5).
  There is no other location that has as many people moving toward it.
</p><p>
  In Sample Case #3, six of the eight people are moving toward location (0, 4).
  There is no other location that has as many people moving toward it.
</p></div></div>
