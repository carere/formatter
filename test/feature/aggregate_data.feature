Feature: Aggregate Data

    Background:
        Given some candles
        | id  | open | close | high | low |
        | abc | 10   | 1     | 10   | 1   |
        | def | 20   | 16    | 34   | 6   |
        | ghi | 30   | 25    | 100  | 5   |
        | jkl | 40   | 70    | 99   | 20  |
        | mno | 53   | 80    | 125  | 15  |
        | pqr | 10   | 70    | 100  | 1   |
        | stu | 20   | 25    | 125  | 5   |

        Given some volumes
        | id  | amount |
        | vwx | 10     |
        | yza | 20     |
        | fko | 30     |
        | wxc | 44     |
        | gfh | 60     |
        | qsd | 84     |

    Scenario Outline: Aggregate candles
        Given some OCHL candle's list id: "<candles_list>"
        When we aggregate those candles
        Then the resulting candle should be "<id_candle>"

        Examples:
        | id_candle | candles_list  |
        | pqr       | abc, ghi, jkl |
        | stu       | def, mno, ghi |

    Scenario Outline: Aggregate volumes
        Given some volume's list id: "<volumes_list>" 
        When we aggregate those volumes
        Then the resulting volume should be "<id_volume>"

        Examples:
        | id_volume | volumes_list  |
        | gfh       | vwx, yza, fko |
        | qsd       | wxc, fko, vwx |
