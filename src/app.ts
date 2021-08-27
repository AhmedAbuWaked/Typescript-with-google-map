import axios from 'axios';

const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

type GoogleGeocodingResponse = {results: {geometry: {location: {lat: number, lng: number}}}[]}

function searchAddressHandler(event: Event) {
    event.preventDefault();
    const enteredAddress = addressInput.value;

    // Send This To Google's API!
    axios.get<GoogleGeocodingResponse>(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(enteredAddress)}&key=${GOOGLE_API_KEY}`)
    .then(res => console.log(res)
    )
    .catch(err => console.log(err)
    )
}

form.addEventListener('submit', searchAddressHandler)