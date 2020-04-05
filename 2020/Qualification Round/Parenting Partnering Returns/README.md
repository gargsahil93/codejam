<div class="problem-description problem-analysis-detail"><div class="problem-statement-string"><h3>Problem</h3> <p>
Cameron and Jamie's kid is almost 3 years old! However, even though the child is more independent
now, scheduling kid activities and domestic necessities is still a challenge for the couple.
</p><p>
Cameron and Jamie have a list of <b>N</b> activities to take care of during the day. Each activity
happens during a specified interval during the day. They need to assign each activity to one
of them, so that neither of them is responsible for two activities that overlap.
An activity that ends at time t is not considered to overlap with another activity that
starts at time t.
</p><p>
For example, suppose that Jamie and Cameron need to cover 3 activities: one running
from 18:00 to 20:00, another from 19:00 to 21:00 and another from 22:00 to 23:00.
One possibility would be for Jamie to cover the activity running from 19:00 to 21:00,
with Cameron covering the other two. Another valid schedule would be for Cameron to
cover the activity from 18:00 to 20:00 and Jamie to cover the other two. Notice
that the first two activities overlap in the time between 19:00 and 20:00, so it is
impossible to assign both of those activities to the same partner.
</p><p>
Given the starting and ending times of each activity, find any schedule that does not require
the same person to cover overlapping activities, or say that it is impossible.
</p> <h3>Input</h3> <p>
The first line of the input gives the number of test cases, <b>T</b>. <b>T</b> test cases follow.
Each test case starts with a line containing a single integer <b>N</b>, the number of activities
to assign. Then, <b>N</b> more lines follow. The i-th of these lines (counting starting from 1)
contains two integers <b>S<sub>i</sub></b> and <b>E<sub>i</sub></b>.
The i-th activity starts exactly <b>S<sub>i</sub></b> minutes after
midnight and ends exactly <b>E<sub>i</sub></b> minutes after midnight.
</p> <h3>Output</h3> <p>
For each test case, output one line containing <code>Case #x: y</code>, where <code>x</code> is
the test case number (starting from 1) and <code>y</code> is <code>IMPOSSIBLE</code> if there
is no valid schedule according to the above rules, or a string of exactly <b>N</b> characters
otherwise. The i-th character in <code>y</code> must be <code>C</code> if the i-th activity
is assigned to Cameron in your proposed schedule, and <code>J</code> if it is assigned to
Jamie.
</p><p>
  If there are multiple solutions, you may output any one of them. (See
  "What if a test case has multiple correct solutions?" in the Competing
  section of the
  <a href="https://codingcompetitions.withgoogle.com/codejam/faq#competing">FAQ</a>. This
  information about multiple solutions will not be explicitly stated in the
  remainder of the 2020 contest.)
</p> <h3>Limits</h3> <p>
Time limit: 20 seconds per test set.<br>
Memory limit: 1GB.<br>
1 ≤ <b>T</b> ≤ 100.<br>
0 ≤ <b>S<sub>i</sub></b> &lt; <b>E<sub>i</sub></b> ≤ 24 × 60.<br></p> <h4>Test set 1 (Visible Verdict)</h4> <p>
2 ≤ <b>N</b> ≤ 10.<br></p> <h4>Test set 2 (Visible Verdict)</h4> <p>
2 ≤ <b>N</b> ≤ 1000.<br></p> <h3>Sample</h3> <div class="problem-io-wrapper"><table><tr><td><br> <span class="io-table-header">Input</span> <br>&nbsp;
  </td> <td><br> <span class="io-table-header">Output</span> <br>&nbsp;
  </td></tr> <tr><td><pre class="io-content">4
3
360 480
420 540
600 660
3
0 1440
1 3
2 4
5
99 150
1 100
100 301
2 5
150 250
2
0 720
720 1440

  </pre></td> <td><pre class="io-content">Case #1: CJC
Case #2: IMPOSSIBLE
Case #3: JCCJJ
Case #4: CC

  </pre></td></tr></table></div> <p>
  Sample Case #1 is the one described in the problem statement. As mentioned above, there are other
  valid solutions, like <code>JCJ</code> and <code>JCC</code>.
</p><p>
  In Sample Case #2, all three activities overlap with each other. Assigning them all would mean
  someone would end up with at least two overlapping activities, so there is no valid schedule.
</p><p>
  In Sample Case #3, notice that Cameron ends an activity and starts another one at minute 100.
</p><p>
  In Sample Case #4, any schedule would be valid. Specifically, it is OK for one partner to do
  all activities.
</p></div></div>