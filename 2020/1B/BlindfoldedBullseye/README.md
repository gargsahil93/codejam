<div class="problem-description problem-analysis-detail"><div class="problem-statement-string"><h3>Problem</h3> <p>
  Gary has a large square wall that is exactly 2 × 10<sup>9</sup> nanometers tall and
  2 × 10<sup>9</sup> nanometers wide.
  Gary has a dartboard placed on the wall. The dartboard is circular and its radius is
  between <b>A</b> and <b>B</b> nanometers, inclusive.
  The dartboard is fully contained within the wall, but it may touch its edges.
  The center of the dartboard is an integer number of nanometers from each edge of the wall.
</p><p>
  Gary invited his friend Mika over to play an interesting game. Gary blindfolds Mika and
  challenges her to throw a dart at the center of the dartboard. To help her, whenever Mika
  throws a dart at the wall, Gary will tell her whether the dart hit the dartboard.
</p><p>
  Mika does not know where on the wall the dartboard is, but since Mika is very skilled at darts,
  she can throw darts with nanometer precision. That is, she can aim and hit exactly any point that
  is an integer number of nanometers away from each edge of the wall. Immediately after throwing
  each dart, Gary tells her whether she hit the center of the dartboard, some other part of it, or
  missed it completely and hit the bare wall.
</p><p>
  Can you help Mika hit the center of the dartboard, without throwing more than 300 darts?
</p> <h3>Input and Output</h3> <p>
  Initially, your program should read a single line containing three integers <b>T</b>,
  <b>A</b> and <b>B</b>, indicating the number of test cases and the inclusive minimum and maximum
  values for the dartboard's radius, in nanometers, respectively. (Notice that <b>A</b> and
  <b>B</b> are the same for every test case within a test set.) Then, you need to process <b>T</b>
  test cases.
</p><p>
  We represent the points that darts can be aimed at as pairs (x, y), where x and y are
  integers between -10<sup>9</sup> and 10<sup>9</sup>, inclusive. The pair (x, y) is
  the point that is x + 10<sup>9</sup> nanometers away from the left edge of the wall and
  y + 10<sup>9</sup> nanometers away from the bottom edge of the wall. Point (0, 0) is therefore
  at the exact center of the wall.
</p><p>
  For each test case, there is a secretly chosen radius R for the dartboard, and a
  secretly chosen center of the dartboard (X, Y).
  R, X, and Y are integers chosen for each test case by the judges in a designed
  (not random) way, within the limits. For each test case you need to process up to 300 exchanges
  with the judge. Your program represents Mika and the judge program represents Gary.
  Each exchange consists of Mika (your program) choosing where to throw a dart and Gary
  (the judging program) giving information about that position.
</p><p>
  The i-th exchange consists of your program first outputting a single line containing two integers
  X<sub>i</sub> and Y<sub>i</sub>, both between -10<sup>9</sup> and 10<sup>9</sup>, inclusive,
  and the judge responding with a single line containing either:
</p> <ul><li><code>CENTER</code> if X<sub>i</sub> = X and Y<sub>i</sub> = Y</li> <li><code>HIT</code> if 0 &lt;
        (X - X<sub>i</sub>)<sup>2</sup> + (Y - Y<sub>i</sub>)<sup>2</sup> ≤ R<sup>2</sup></li> <li><code>MISS</code> in all other cases.</li></ul> <p>
  After sending <code>CENTER</code>, the judge will start waiting for the first
  exchange of the next test case, if there is any.
</p><p>
  If you output a line that is incorrectly formatted or with an out of bounds value,
  the judge will respond with a single line containing <code>WRONG</code>.
  If 300 exchanges occur (including 300 responses from the judge) without you receiving
  <code>CENTER</code>, or if you ever receive <code>WRONG</code>, the judge will finish all
  communication, wait for your own program to also finish, and give a Wrong Answer verdict.
  After sending the <b>T</b>-th <code>CENTER</code>, on the other hand, the judge will finish all
  communication, wait for your own program to finish, and give a Correct verdict.
  If, while waiting for your program to finish, time or memory limits are exceeded,
  the corresponding verdict will be assigned instead. (Note that verdicts are not messages
  sent to your program.)
</p> <h3>Limits</h3> <p>
  Time limit: 30 seconds per test set.<br>
  Memory limit: 1GB.<br>
  1 ≤ <b>T</b> ≤ 20.<br> <b>A</b> ≤ R ≤ <b>B</b>.<br>
  -10<sup>9</sup> + R ≤ X ≤ 10<sup>9</sup> - R.<br>
  -10<sup>9</sup> + R ≤ Y ≤ 10<sup>9</sup> - R.<br></p> <h4>Test set 1 (Visible Verdict)</h4> <p><b>A</b> = <b>B</b> = 10<sup>9</sup> - 5.<br></p> <h4>Test set 2 (Visible Verdict)</h4> <p><b>A</b> = <b>B</b> = 10<sup>9</sup> - 50.<br></p> <h4>Test set 3 (Hidden Verdict)</h4> <p><b>A</b> = 10<sup>9</sup> / 2.<br> <b>B</b> = 10<sup>9</sup>.<br></p> <h3>Testing Tool</h3> <p>
  You can use this testing tool to test locally or on our platform. To test
  locally, you will need to run the tool in parallel with your code; you can
  use our <a href="https://storage.googleapis.com/coding-competitions.appspot.com/interactive_runner.py">interactive runner</a>
  for that. For more information, read the instructions in comments in that
  file, and also check out the
  <a href="https://codingcompetitions.withgoogle.com/codejam/faq#interactive-problems" target="_blank">Interactive Problems section</a>
  of the FAQ.
</p><p>
  Instructions for the testing tool are included in comments within the tool.
  We encourage you to add your own test cases. Please be advised that although
  the testing tool is intended to simulate the judging system, it is <b>NOT</b>
  the real judging system and might behave differently. If your code passes the
  testing tool but fails the real judge, please check the
  <a href="https://codingcompetitions.withgoogle.com/codejam/faq#coding" target="_blank">Coding section</a>
  of the FAQ to make sure that you are using the same compiler as us.
</p><p><a href="https://codejam.googleapis.com/dashboard/get_file/AQj_6U3hs6l9rQazzRbH77KTAj6MDmV_lNWQYxNLANPV16oNwtQbyxWzfj9LruA64ETFqg/testing_tool.py" download="testing_tool.py">Download testing tool</a></p> <p><b>The interactive runner was changed after the 2020 Qualification Round.
  Be sure to download the latest version.</b></p> <h3>Sample Interaction</h3> <p>
  The following sample interaction uses the limits of Test Set 1.
</p> <pre>  // The following reads 20 into t and 999999995 into a and b.
  t, a, b = readline_int_list()
  // The judge secretly picks R = 999999995 (it had no choice) and X = -1,
  // Y = 3 (it did have a choice here). (Note: the actual Test Set 1 will
  // not necessarily use the values in this example.)
  // We try to throw at the upper left corner of the wall, and the dartboard
  // does not overlap with that point.
  printline -1000000000 1000000000 to stdout
  flush stdout
  r = readline_string()  // reads MISS.
  // We try to throw at the center of the wall. That does hit the dartboard,
  // but not the center.
  printline 0 0 to stdout
  flush stdout
  r = readline_string()  // reads HIT.
  // We make a super lucky choice and throw at the center of the dartboard.
  printline -1 3 to stdout
  flush stdout
  r = readline_string()  // reads CENTER.
  // The judge begins the next test case. It secretly picks R = 999999995
  // and X = 5, Y = 5.
  // We accidentally throw a dart out of the allowed range.
  printline -1234567890 1234567890 to stdout
  flush stdout
  r = readline_string()  // reads WRONG.
  exit  // exits to avoid an ambiguous TLE error.
</pre></div></div>