Feature: Aggregate Data

    Scenario: Aggregate OCHL candles
        Given some OCHL candles data
        | open | close | high | low |
        | 10   | 12    | 16   | 8   |
        | 7    | 15    | 1    | 6   |
        | 10   | 5     | 21   | 19  |
        | 10   | 20    | 12   | 14  |
        When we aggregate those candles
        Then the resulting candle should be
        | open | close | high | low |
        | 10   | 20    | 21   | 6   |

    Scenario: Aggregate other OCHL candles
        Given some OCHL candles data
        | open | close | high | low |
        | 10   | 12    | 16   | 8   |
        | 7    | 15    | 1    | 6   |
        | 10   | 5     | 21   | 19  |
        | 33   | 40    | 30   | 50  |
        When we aggregate those candles
        Then the resulting candle should be
        | open | close | high | low |
        | 10   | 40    | 21   | 6   |

    Scenario: Aggregate volumes
        Given some volumes
        | amount |
        | 12     |
        | 16     |
        | 20     |
        When we aggregate those volumes
        Then the resulting volume should be 48

    Scenario: Aggregate other volumes
        Given some volumes
        | amount |
        | 50     |
        | 200    |
        | 500    |
        When we aggregate those volumes
        Then the resulting volume should be 750