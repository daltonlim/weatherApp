import './App.css';
import * as React from 'react';
import Button from "@material-ui/core/Button";
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Card from "@material-ui/core/Card/Card";
import CardContent from "@material-ui/core/CardContent/CardContent";
import Typography from "@material-ui/core/Typography/Typography";
// @ts-ignore
import WeatherIcon from 'react-icons-weather';

const API = 'http://api.openweathermap.org/data/2.5/weather?q=';
const APPIDPREFIX = '&appid=';
const APPID = 'ece0d8b1e9f26bc9f8b45549d4585e47';

interface IState {
    jsonData: any,
    value: string
}

export default class App extends React.Component<{}, IState> {
    constructor(props: any) {
        super(props);
        this.state = {value: 'Auckland', jsonData: ''};//TODO remove auckland

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event: any) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event: any) {
        event.preventDefault();
        this.updateApi();
    }

    updateApi() {
        fetch(API + this.state.value + APPIDPREFIX + APPID)
            .then(response => response.json())
            .then(data => this.setState({jsonData: data}));
    }

    getData() {
        const data = this.state.jsonData;
        if (typeof data.main != 'undefined') {
            var celcius = Math.round((data.main.temp - 273.15) * 10) / 10;
            return (
                <p>In {data.name},{data.sys.country} it is {celcius}°C with expected {data.weather[0].description}</p>
            )
        } else {
            return (
                <p>Invalid name specified</p>
            )
        }
    }

    WeatherCard() {
        const data = this.state.jsonData;
        if (typeof data.main != 'undefined') {
            var celcius = Math.round((data.main.temp - 273.15) * 10) / 10;
            return (
                <div>
                    <Card className="Card">
                        <CardContent>
                            <Typography className="Title" color="textSecondary">
                                {data.name},{data.sys.country}
                            </Typography>
                            <Typography variant="headline" component="h2">
                                {celcius}°C
                            </Typography>
                            <WeatherIcon name="owm" iconId={data.weather[0].id} flip="horizontal" rotate="90" />

                            <Typography className="pos" color="textSecondary">
                                {data.weather[0].description}
                            </Typography>

                        </CardContent>
                    </Card>
                </div>
            )
        } else {
            return (
                <p>Invalid city specified</p>
            )
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <FormControl className="formControl">
                        <InputLabel htmlFor="name-simple">City</InputLabel>
                        <Input id="name-simple" type="text" value={this.state.value} onChange={this.handleChange}/>
                    </FormControl>
                    <Button type="submit" value="Submit" aria-label="Submit" color="default"/>
                </form>

                {this.WeatherCard()}

            </div>
        );
    }
}
