Brands
ZEOTAP ASSIGNMENT 

As a web app challenge. Kindly make above layout.

Properties:

1. Timeline filter is a normal drop down ( values are : Today, last 7 days, last quarter, last month , last year , custom date)

2. Advertiser : It is auto suggest search box where on typing on input box, it shows all the matching advertisers name present.

3. Timeline filter and advertiser filters should be a global header of the app.

4. In the body, there is a widget which is showing the text message.

5. On selecting values from timeline and Advertiser name, it should be reflected in the widget message.

6. On changing Timeline value / Advertiser name, new selected value should be reflected in the top message.

7. On selecting any advertiser name, it makes an ajax call and loads the brand details ( provided as JSON) and displays as tabular format.

8. In the table, show brand names under brand name column. Inside the brand object (in json) there are many campaign objects, so show the campaign count of a brand object under “count of campaign object” column. Show first campaign name of a brand object under “Campaign name” column.

      

You will have to build a simple interface for reporting Advertiser, Brand and campaign spend. A JSON will be accompanied with this assignment, containing relevant data. As evident from attached JSON, one advertiser can have multiple brands. Each brand will have multiple campaigns.

 

Sample Campaign Object

    id": 3423424232,

    "name" : "Toyota high speed new launch",

    "CPC" : 3.45,

    "CPM" : 6.7,

    "spend": 45000,

    "impressions ": 5603424242,

    "clicks" : 34241312,

    "CPM" : 0.86,

    "CTR" : 0.89,

     "start date" : 12-02-2016

     "end date" : null ( means its on going campaign)

 

 

Sample Brand Object

    id": 342,

    "name" : "Toyota",

    "budget": 60000

  

Advertiser Object

     “id” : 23

     “name” : "Best Buy"

 

Problem Statement

Build the following interfaces as described below:

 

I have a list of advertisers. So implement the search functionality (auto suggest) for the list of advertisers.

           (Attached in the JSON for list of advertisers)

2. Kindly mention the difference in implementation when there are 10k advertisers and when there are 1m advertisers

3. Select the advertisers from the drop down. For the given advertiser, We can get all the brands for the selected advertiser. Show top 5 brands out of them based on budget.


Data JSON: http://hck.re/qmPuPD