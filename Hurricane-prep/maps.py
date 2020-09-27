import pprint
import ipinfo
import json
import googlemaps
import requests
from googlemaps import places
from key import API_KEY

api_key = API_KEY

gmaps = googlemaps.Client(key = api_key)

nearby_url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?"

handler = ipinfo.getHandler(access_token="a4f2f29aaca35d")
details = handler.getDetails()
lon = details.longitude
lat = details.latitude

def results():
    places_result = gmaps.places_nearby(location='{},{}'.format(lat,lon),radius = 40000,keyword='hurricane shelter')
    pprint.pprint(places_result)

if __name__ =="__main__":
    print(results())
