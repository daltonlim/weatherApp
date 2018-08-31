import * as React from "react";
import Card from "@material-ui/core/Card/Card";
import CardContent from "@material-ui/core/CardContent/CardContent";
import Typography from "@material-ui/core/Typography/Typography";
// @ts-ignore
import WeatherIcon from 'react-icons-weather';
import {withStyles} from "@material-ui/core";

const API = 'http://api.openweathermap.org/data/2.5/weather?q=';
const APPIDPREFIX = '&appid=';
const APPID = 'ece0d8b1e9f26bc9f8b45549d4585e47';

interface IState {
    jsonData: any,
    value: string
}


const styles = {
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
};

class WeatherCardApp extends React.Component<{ value: string }, IState> {
    constructor(props: any) {
        super(props);
    }

    shouldComponentUpdate(nextProps:any) {
         if (this.props.value === nextProps.value) {
             this.updateApi();
             return false;
        } else {
             return true;
        }
    }

    updateApi() {
        fetch(API + this.props.value + APPIDPREFIX + APPID)
            .then(response => response.json())
            .then(data => this.setState({jsonData: data}));
        this.render();
    }

    public render() {
        if (this.state == null) {
            return (
                <p>Invalid city specified</p>
            )
        }
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
                            <WeatherIcon name="owm" iconId={data.weather[0].id} flip="horizontal" rotate="90"/>

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
}

export default WeatherCardApp;
withStyles(styles);