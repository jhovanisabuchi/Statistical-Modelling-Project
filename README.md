# Final-Project-Statistical-Modelling-with-Python
This project aims to analyze and compare data from City Bike stations and nearby points of interest (POIs) within a specified radius. Using the City Bike API, we fetch details about stations in the selected area and gather information about businesses near each station using the Yelp dataset. The ultimate goal is to combine these datasets and perform exploratory data analysis (EDA) to uncover relationships between the data points.

## Project/Goals
Retrieve station data from the City Bike API for a specific city.
For each station, collect up to 50 businesses (POIs) within a 1000-meter radius using relevant APIs.
Combine the station and POI data for analysis.
Conduct exploratory data analysis (EDA) to identify trends, patterns, and insights from the combined dataset.

## Process
1.Data Retrieval:
* Select stations from the City Bike API.
* Query the Yelp API for businesses within 1000 meters of each station.
2.Data Processing:
* Merge station data with POI information.
* Handle missing or inconsistent data.
3.Exploratory Data Analysis:
* Compare metrics such as business ratings and distances with station attributes.
* Visualize trends and correlations using plots and charts.
4.Regression Modeling:
* Perform regression analysis to model the relationship between independent variables (e.g., empty slots, free bikes, business distance) and the target variable (business rating).
* Assess the performance of the model and evaluate how well the independent variables predict business ratings.

## Results
The project provides insights into:

* Relationships between bike station usage (e.g., empty slots, free bikes) and nearby business metrics (e.g., rating, distance).

* Potential patterns that could inform business or transportation planning.

* Nearby POI Data Collection: Gather information on nearby businesses (e.g., name, distance, and rating) for each selected station.

## Challenges 
While working on this project, several challenges were encountered:

1.API Rate Limits:
The API calls were restricted, requiring long wait times between requests. This significantly slowed down the data collection process, necessitating overnight waits to gather sufficient data for analysis.

2.Lack of Relationships Between Variables:
Initial analyses revealed minimal or no significant relationships between the selected variables (e.g., bike station metrics and business ratings). This prompted the need to expand the dataset by including additional categories and variables to identify meaningful patterns.

## Future Goals
What to Do Next?
Add More Features: Include features like business category, number of reviews, ratings from Yelp/Foursquare, and interaction terms to improve the model's understanding of the target variable.
Try Advanced Models: Linear regression might not be the best for this data. Consider trying models like Random Forests, Decision Trees, or Gradient Boosting.