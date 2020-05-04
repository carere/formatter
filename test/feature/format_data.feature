Feature: Format data

    Background:
        Given some data timestamp by minutes
        | from                | to                  |
        | 2018-01-01T00:00:00 | 2018-06-01T00:00:00 |

    Scenario Outline: Format by unit of time for specific time interval
        Given a period from "<from>" to "<to>"
        When we try to format those data for unit of time "<unit_of_time>"
        Then we should get "<nb_list>" list of entries
        And we should get "<nb_entries>" in each list

        Examples:
        | from                | to                  | unit_of_time | nb_list | nb_entries |
        | 2018-01-01T00:00:00 | 2018-01-02T00:00:00 | H1           | 24      | 60         |
        | 2018-01-01T00:30:00 | 2018-01-02T00:00:00 | H4           | 5       | 240        |
        | 2018-01-01T00:00:00 | 2018-01-15T00:00:00 | D1           | 15      | 1440       |
        | 2018-01-01T00:00:00 | 2018-02-01T00:00:00 | M1           | 1       | 44640      |
        | 2018-02-01T00:00:00 | 2018-03-01T00:00:00 | M1           | 1       | 40320      |
        | 2018-04-01T00:00:00 | 2018-05-01T00:00:00 | M1           | 1       | 43200      |


    Scenario Outline: Unable to format
        Given a period from "<from>" to "<to>"
        When we try to format those data for unit of time "<unit_of_time>"
        Then an alert for "<alert_type>" should be thrown 

        Examples:
        | from                | to                  | unit_of_time | alert_type            |
        | 2018-01-01T00:00:00 | 2018-02-10T00:00:00 | Z3           | unknow unit of time   |
        | 2018-01-05T00:00:00 | 2020-01-10T00:00:00 | H1           | high limit invalid    |
        | 2017-01-05T00:00:00 | 2018-01-10T00:00:00 | H1           | low limit invalid     |