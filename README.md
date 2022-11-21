# Lab 8 - Starter
Rishigesh Jayananth and Shengqiu Jin

### Check Your Understanding Questions

1. Since these are automated tests, there is no point in us trying to run it manually. We also want our automated tests to run once code gets pushed to test to make sure we are making the right small incremental steps in building out product. Thus, we woudld use a Github action that runs the automated test when code gets pushed.
2. We use end to end testing to test actions from start to end. Functional tests are not from start to end but are just one part of our product that we want to test.Thus, we would not want to use a use an end to end test to check if a function is returning the correct output.
3. No, a message feature of a messaging application would incorporate many other smaller functions. Our unit testing would be good to test these smaller functions but since a message feature can incorporate many different components, unit testing is not a good idea to test with.
4. Yes, testing for max length of a message can be thought of as a small feature as testing for this and the max length of a message isn't going to be affected by other features in our application. This unit test is a good idea as this is a small and quick test to write.