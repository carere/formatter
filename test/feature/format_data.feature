Feature: Format data

    Scenario Outline: Format by unit of time for specific time interval
        Given some data timestamp by minutes
        And a time interval from "<from>" to "<to>"
        When we format those data for unit of time "<unit_of_time>"
        Then we should get "<nb_entries>" entries as result

        Examples:
        | from                | to                  | unit_of_time | nb_entries |
        | 01/01/2020 00:00:00 | 10/01/2020 00:00:00 | H1           | 240        |
        | 01/01/2020 00:00:00 | 10/01/2020 00:00:00 | H4           | 60         |
        | 01/01/2020 00:00:00 | 10/01/2020 00:00:00 | D1           | 10         |
        | 01/01/2020 00:00:00 | 10/01/2020 00:00:00 | W1           | 1          |
        | 01/01/2020 00:00:00 | 10/01/2020 00:00:00 | M1           | 0          |

    Scenario: Unable to format
        Given some data timestamp by minutes
        And a time interval from "<from>" to "<to>"
        When we format those data for unit of time "<unit_of_time>"
        Then an alert for "<alert_type>" should be thrown

        Examples:
        | from                | to                  | unit_of_time | alert_type            |
        | 01/01/2020 00:00:00 | 10/01/2020 00:00:00 | Z3           | unknow unit of time   |
        | 13/01/2020 00:00:00 | 10/01/2020 00:00:00 | H1           | invalid date interval |
