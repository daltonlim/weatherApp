import * as React from "react";
import Card from "@material-ui/core/Card/Card";
import CardContent from "@material-ui/core/CardContent/CardContent";
import Typography from "@material-ui/core/Typography/Typography";
import Button from "@material-ui/core/Button/Button";
import {withStyles} from "@material-ui/core";

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

class WeatherCard extends React.Component<{}> {
    public render() {
        return (
            <div>
                <Card className="Card">
                    <CardContent>
                        <Typography className="Title" color="textSecondary">
                            Auckland
                        </Typography>
                        <Typography variant="headline" component="h2">
                            34 C
                        </Typography>
                        <Typography className="pos" color="textSecondary">
                            Much rain
                        </Typography>
                        <Button size="small">Delete</Button>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default WeatherCard; withStyles(styles);