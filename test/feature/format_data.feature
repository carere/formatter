Feature: Format data

    Scenario Outline: Format by unit of time for specific time interval
        Given a time interval from "<from>" to "<to>"
        And some data timestamp by minutes
        When we format those data for unit of time "<unit_of_time>"
        Then we should get "<nb_entries>" entries as result

        Examples:
        | from                | to                  | unit_of_time | nb_entries |
        | 2020-01-01T00:00:00 | 2020-01-10T00:00:00 | H1           | 240        |
        | 2020-01-01T00:00:00 | 2020-01-10T00:00:00 | H4           | 60         |
        | 2020-01-01T00:00:00 | 2020-01-10T00:00:00 | D1           | 10         |
        | 2020-01-01T00:00:00 | 2020-01-10T00:00:00 | W1           | 1          |
        | 2020-01-01T00:00:00 | 2020-01-10T00:00:00 | M1           | 0          |

    Scenario Outline: Unable to format
        Given a time interval from "<from>" to "<to>"
        And some data timestamp by minutes
        When we format those data for unit of time "<unit_of_time>"
        Then an alert for "<alert_type>" should be thrown 

        Examples:
        | from                | to                  | unit_of_time | alert_type            |
        | 2020-01-01T00:00:00 | 2020-01-10T00:00:00 | Z3           | unknow unit of time   |
        | 2020-01-13T00:00:00 | 2020-01-10T00:00:00 | H1           | invalid date interval |