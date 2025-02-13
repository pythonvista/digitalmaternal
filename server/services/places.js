import dotenv from 'dotenv';
import axios from 'axios';
dotenv.config();




function GoogleLocation() {
    this.apiKey = process.env.GOOGLE_API_KEY
    this.url = 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?'
    this.SearchPlaces = async (query) => {
        try {
          
            const res = await axios.get(`${this.url}fields=formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry&input=${query}&inputtype=textquery&key=${this.apiKey}`)
          
            const data = res.data;
            let predictions = data.candidates || [];
            return predictions
        } catch (err) {
            return err
        }
    }
    this.GeoCodeLocation = async (latlng) => {
        try {
            let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latlng}&key=${this.apiKey}`
            const res = await axios.get(url)
            const data = res.data;
            let results =
                data.results.length > 0
                    ? data.results[0]
                    : { formatted_address: "" };
            return results
        } catch (err) {
            return err
        }
    }
}



const LocationServices = new GoogleLocation()

export { LocationServices }