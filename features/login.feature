@login
Feature: Sauce Demo Login
@loginPositive
  Scenario: Login Positive
    Given Anonymous on the login page
    When Anonymous login with "<username>" and "<password>"
    Then Anonymous successfully see home screen 
    Examples:
      | username      | password     |
      | standard_user | secret_sauce |
@loginNegative
  Scenario: Login Negative
    Given Anonymous on the login page
    When Anonymous login with "<username>" and "<password>"
    Then Anonymous failed to see home screen
    Examples:
      | username         | password |
      | standard_invuser | password |

@loginLockedOut
Scenario: Login Locked out user
  Given Anonymous on the login page
  When Anonymous login with "<username>" and "<password>"
  Then Anonymous failed to see home screen locked out
  Examples:
    | username         | password     |
    | locked_out_user  | secret_sauce |