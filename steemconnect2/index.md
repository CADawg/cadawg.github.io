# SteemConnect V2 API

After getting setup, you can send this to https://v2.steemconnect.com/api/broadcast with the Authorisation: [Session Token] header to create a post
## Post:
```
{
  "operations": [
    [
      "comment",
      {
        "parent_author": "",
        "parent_permlink": "category",
        "title": "title",
        "body": "body",
        "json_metadata": "{\"community\":\"YourApplicationName\",\"app\":\"YourAppName\\/0.1.0(VERSION)\",\"format\":\"markdown\",\"tags\":[\"category\",\"tag1\",\"tag2\",\"tag2\",\"tag3\"]}",
        "author": "user_posting_no_at",
        "permlink": "permlink"
      }
    ],
    [
      "comment_options",
      {
        "author": "user_posting_no_at",
        "permlink": "permlink",
        "max_accepted_payout": "1000000.000 SBD",
        "percent_steem_dollars": 10000,
        "allow_votes": true,
        "allow_curation_rewards": true,
        "extensions": [
          [
            0,
            {
              "beneficiaries": [
                {
                  "account": "beneficiary_1",
                  "weight": 0
                },{
                  "account": "beneficiary_2",
                  "weight": 0
                }
              ]
            }
          ]
        ]
      }
    ]
  ]
}
```

Where:
Comment:
- parent_author is ALWAYS an empty string for a post
- parent_permlink is the category for the post (I know, confusing!)
- title is the title for the post
- body is the body of the post
- json_metadata is the data surrounding the post (such as app, version and tags)
- author is the user posting without an @
- permlink is the link for the post after the user (https://steemit.com/category/@author/permlink)
Comment_Options:
- author is same as above
- permlink is same as above
- max_accepted_payout is the maximum payout in SBD
- percent_steem_dollars is the percentage of the 50% of post payouts to be recieved as SBD 
- allow_votes is whether votes are allowed true/false
- extensions allows for more extensions
  - 0 has to be there as it is part of the format
  - beneficiaries is a list of users who get a % of the post share
  - account is the account to be given the % of rewards as STEEM POWER
  - weight is the percentage given (out of a total 100.00% represented as 10000) i.e 100x so 10% = 1000
    - You can add more ,{"account": "x", "weight":0} to add more benificiaries, such as above.
  
