#
# import numpy as np
#
# from pandas import read_csv
# path=r"Data.csv"
# headernames=['App Name','App Id','Category','Rating','Rating Count','Installs','Minimum Installs','Maximum Installs','Free','Price','Currency','Size','Minimum Android','Developer Id','Developer Website','Developer Email','Released','Last Updated','Content Rating','Privacy Policy','Ad Supported','In App Purchases','Editors Choice'
# ,'Outcome']
# data=read_csv(path,names=headernames)
# print(data.head(50))

import numpy as np
import pandas as pd

playstore_data = pd.read_csv("details.csv")
np.random.seed(0)
playstore_reviewData= pd.read_csv("reviews.csv")
np.random.seed(0)

selectiveTitle=['app Title','Actual Downloads','Rating','appDeveloper','1 star','2 star','3 star','4 star','5 star','price']
playstore_data.drop(selectiveTitle, axis=1, inplace=True)
print(playstore_data.head())

missing_vales=playstore_data.isnull().sum()
print(missing_vales[0:10])

print(playstore_data.head(5))
print(playstore_data.sort_values(by=['Downloads']))

playstore_data['android Version'] = np.where(playstore_data['android Version'] == 'VARY', 1, 0)
print(playstore_data['android Version'])

playstore_data['Rounded Rating'] = np.where(playstore_data['Rounded Rating'] > 3.0, 1, 0)
print(playstore_data['Rounded Rating'])

playstore_data['Summative Rating'] = np.where(playstore_data['Summation of 4star+5star'] > playstore_data['Summation of 1star+2star+3star'], 1, 0)
print(playstore_data['Summative Rating'])



# a=50000
# if ( playstore_data['No. of ratings'] > 500000 ):
#     print('5')
# else:
#     print('4')
# print(playstore_data['Summative Rating'])

playstore_data['size'] = np.where(playstore_data['size'].isnull(), 0, 1)
playstore_data['Summation of 1star+2star+3star'] = np.where(playstore_data['Summation of 1star+2star+3star'].isnull(), 0, 1)
playstore_data['Summation of 4star+5star'] = np.where(playstore_data['Summation of 4star+5star'].isnull(), 0, 1)

playstore_data["Downloads"]['50,000,000+'] = 1
# playstore_data["points"][1:2] =
print(playstore_data.head(5))




# Value= [3.99, 4.99]
# App_price = {0: 0, 3.99: 1}
# playstore_data['price']= playstore_data['price'].map(App_price)















