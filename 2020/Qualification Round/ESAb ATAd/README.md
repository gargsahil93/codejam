<div class="problem-statement-string"><h3>Problem</h3> <p>
  Last year, a research consortium
  <a href="https://codingcompetitions.withgoogle.com/codejam/round/0000000000051705/00000000000881de" target="_blank">had some trouble</a>
  with a distributed database system that sometimes lost pieces of the data.
  You do not need to read or understand that problem in order to solve this
  one!
</p><p>
  The consortium has decided that distributed systems are too complicated, so
  they are storing <b>B</b> bits of important information in a
  single array on one awesome machine. As an additional layer of security,
  they have made it difficult to obtain the information quickly; the user must
  query for a bit position between 1 and <b>B</b>, and then they receive that
  bit of the stored array as a response.
</p><p>
  Unfortunately, this ultra-modern machine is subject to random quantum
  fluctuations! Specifically, after every 1st, 11th, 21st, 31st... etc. query
  is sent, <i>but before the response is given</i>, quantum fluctuation causes
  exactly one of the following four effects, with equal probability:
</p> <ul><li>25% of the time, the array is complemented: every <code>0</code> becomes
    a <code>1</code>, and vice versa.</li> <li>25% of the time, the array is reversed: the first bit swaps with the last
    bit, the second bit swaps with the second-to-last bit, and so on.</li> <li>25% of the time, both of the things above (complementation and reversal)
    happen to the array. (Notice that the order in which they happen does not
    matter.)</li> <li>25% of the time, nothing happens to the array.</li></ul> <p>
  Moreover, there is no indication of what effect the quantum fluctuation
  has had each time. The consortium is now concerned, and it has hired you
  to get its precious data back, in whatever form it is in! Can you find
  the entire array, such that your answer is accurate
  <i>as of the time that you give it</i>? Answering does not count as a query,
  so if you answer after your 30th query, for example, the array will be the
  same as it was after your 21st through 30th queries.
</p> <h3>Input and output</h3> <p>
  This is an interactive problem. You should make sure you have read the
  information in the
  <a href="https://codingcompetitions.withgoogle.com/codejam/faq#interactive-problems" target="_blank">Interactive Problems section</a>
  of our FAQ.
</p><p>
  Initially, your program should read a single line containing two integers
  <b>T</b> and <b>B</b>: the number of test cases and the number of bits
  in the array, respectively. Note that <b>B</b> is the same for every test
  case.
</p><p>
  Then, you need to process <b>T</b> test cases. In each case, the judge begins
  with a predetermined <b>B</b>-bit array; note that this array can vary from
  test case to test case, and is not necessarily chosen at random. Then, you
  may make up to 150 queries of the following form:
</p> <ul><li>Your program outputs one line containing a single integer P between 1 and
    <b>B</b>, inclusive, indicating which position in the array you wish to
    look at.
  </li><li>
    If the number of queries you have made so far ends with a 1, the judge
    chooses one of the four possibilities described above (complementation,
    reversal, complementation + reversal, or nothing), uniformly at random and
    independently of all other choices, and alters the stored array
    accordingly. (Notice that this will happen on the very first query
    you make.)
  </li><li>
    The judge responds with one line containing a single character
    <code>0</code> or <code>1</code>, the value it currently has stored at bit
    position P, or <code>N</code> if you provided a malformed line (e.g., an
    invalid position).
  </li></ul> <p>
  Then, after you have made as many of the 150 queries above as you want, you
  must make one more exchange of the following form:
</p> <ul><li>Your program outputs one line containing a string of <b>B</b> characters,
    each of which is <code>0</code> or <code>1</code>, representing the bits
    <i>currently</i> stored in the array (which will not necessarily match the
    bits that were initially present!)
  </li> <li>
    The judge responds with one line containing a single letter:
    uppercase <code>Y</code> if your answer was correct, and uppercase
    <code>N</code> if it was not (or you provided a malformed line).
    If you receive <code>Y</code>, you should begin the next test case,
    or stop sending input if there are no more test cases.
  </li></ul> <p>
  After the judge sends <code>N</code> to your input stream, it will not send
  any other output. If your program continues to wait for the judge after
  receiving <code>N</code>, your program will time out, resulting in a Time
  Limit Exceeded error. Notice that it is your responsibility to have your
  program exit in time to receive a Wrong Answer judgment instead of a Time
  Limit Exceeded error. As usual, if the memory limit is exceeded, or your
  program gets a runtime error, you will receive the appropriate judgment.
</p> <h3>Limits</h3> <p>
  Time limit: 40 seconds per test set.<br>
  Memory limit: 1GB.<br>
  1 ≤ <b>T</b> ≤ 100.<br></p> <h4>Test set 1 (Visible Verdict)</h4> <p><b>B</b> = 10.<br></p> <h4>Test set 2 (Visible Verdict)</h4> <p><b>B</b> = 20.<br></p> <h4>Test set 3 (Hidden Verdict)</h4> <p><b>B</b> = 100.<br></p> <h3>Testing Tool</h3> <p>
  You can use this testing tool to test locally or on our servers.
  To test locally, you will need to run the tool in parallel with your code;
  you can use our
  <a href="https://storage.googleapis.com/coding-competitions.appspot.com/interactive_runner.py" target="_blank">interactive runner</a>
  for that. <b>The interactive runner was changed after the 2019 contest. Be sure to download the
  latest version.</b> For more information, read the
  <a href="https://codingcompetitions.withgoogle.com/codejam/faq#interactive-problems" target="_blank">Interactive Problems section</a>
  of the FAQ.
</p> <h3>Local Testing Tool</h3> <p>
  To better facilitate local testing, we provide you the following script.
  Instructions are included inside. You are encouraged to add more test cases
  for better testing. Please be advised that although the testing tool is
  intended to simulate the judging system, it is <b>NOT</b> the real judging
  system and might behave differently.
</p> <p>
  If your code passes the testing tool but fails the real judge, please check
  the <a href="https://codingcompetitions.withgoogle.com/codejam/faq#coding">
  Coding section</a> of our FAQ to make sure that you are using the same
  compiler as us.
</p><p><a href="https://codejam.googleapis.com/dashboard/get_file/AQj_6U1J1sPo9tw7JNMSbL8jn9SsS8lo9hUHLBYDH5mNVmgKaV6DJ_zLrVjy9INDjJAIdyRo8tA7aA/local_testing_tool.py" download="local_testing_tool.py">Download local testing tool</a></p> <h3>Sample Interaction</h3> <p>
  The following interaction corresponds to Test Set 1.
</p> <pre>  t, b = readline_int_list()      // reads 100 into t and 10 into b.
  // The judge starts with the predetermined array for this test case:
  // 0001101111. (Note: the actual Test Set 1 will not necessarily
  // use this array.)
  printline 1 to stdout   // we ask about position 1.
  flush stdout
  // Since this is our 1st query, and 1 is 1 mod 10, the judge secretly and
  // randomly chooses one of the four possible quantum fluctuation effects, as
  // described above. It happens to choose complementation + reversal, so now
  // the stored value is 0000100111.
  r = readline_chr()      // reads 0.
  printline 6 to stdout   // we ask about position 6.
  flush stdout
  // Since this is our 2nd query, and 2 is 2 mod 10, the judge does not choose
  // a quantum fluctuation effect.
  r = readline_chr()      // reads 0.
  ...
  // We have omitted the third through tenth queries in this example.
  ...
  printline 1 to stdout   // we decide to ask about position 1 again.
  flush stdout
  // Since this is our 11th query, and 11 is 1 mod 10, the judge secretly and
  // randomly chooses a quantum fluctuation effect, and happens to get
  // reversal, so now the stored value is 1110010000.
  r = readline_chr()      // reads 1.
  printline 1110110000 to stdout   // we try to answer. why?!?!
  flush stdout
  ok = readline_chr()     // reads N -- we have made a mistake!
  exit                    // exits to avoid an ambiguous TLE error
</pre></div>