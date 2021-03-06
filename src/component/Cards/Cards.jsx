import React from 'react'
import { CardContent, Card, Typography, Grid, StylesProvider } from '@material-ui/core';
import styles from './Cards.module.css'
import CountUp from 'react-countup'
import cx from 'classnames'

function Cards(props) {
    console.log(props)
    console.log(props.statewise)
    console.log(props.selectedstate)
    if(props.statewise===undefined){
        return null;
    }
    if(props.statewis.confirmed===undefined){
        return null
      }
    

    return (
        <div className={styles.container}>
            <Grid container spacing={4} style={{backgroundColor: "#37474f"}} justify="center">
                <Grid style={{borderRadius:"20px",backgroundColor: "#ede7f6"}} item component={Card} xs={12} md={2} className={cx(styles.card,styles.confirmed)}>
                    <CardContent >
                        <Typography  gutterBottom>Confirmed</Typography>
                        <Typography variant="h5">
                            <CountUp style={{color: 'slateblue'}}
                                start={0}
                                end={parseInt(props.statewise[0].confirmed)}
                                duration={2.5}
                                seperator=","
                            />
                        </Typography>
                        <Typography >{new Date().toGMTString().slice(5,17)}</Typography>
                        <Typography  gutterBottom>Confirmed Today</Typography>
                        <Typography variant="body2">
                            <CountUp style={{color: 'slateblue'}}
                                start={0}
                                end={parseInt(props.statewise[0].deltaconfirmed)}
                                duration={2.5}
                                seperator=","
                            />

                        </Typography>
                    </CardContent>
                </Grid>
                <Grid style={{borderRadius:"20px",backgroundColor:"#e3f2fd"}} item component={Card} xs={12} md={2} className={cx(styles.card,styles.active)}>
                    <CardContent>
                        <Typography  gutterBottom>Active</Typography>
                        <Typography variant="h5">
                            <CountUp style={{color: '#42a5f5'}}
                                start={0}
                                end={parseInt(props.statewise[0].active)}
                                duration={2.5}
                                seperator=","
                            />
                        </Typography>
                        <Typography >{new Date().toGMTString().slice(5,17)}</Typography>
                    </CardContent>
                </Grid>
                <Grid style={{borderRadius:"20px", backgroundColor:"#e8f5e9"}} item component={Card} xs={12} md={2} className={cx(styles.card,styles.recovered)}>
                    <CardContent>
                        <Typography  gutterBottom>
                            Recovered
                        </Typography>
                        <Typography variant="h5">
                            <CountUp style={{color: '#00e658'}}
                                start={0}
                                end={parseInt(props.statewise[0].recovered)}
                                duration={2.5}
                                seperator=","
                            />
                        </Typography>
                        <Typography >{new Date().toGMTString().slice(5,17)}</Typography>
                        <Typography  gutterBottom>Recovered Today</Typography>
                        <Typography variant="body2">
                        <CountUp    style={{color: '#00e658'}}
                                start={0}
                                end={parseInt(props.statewise[0].deltarecovered)}
                                duration={2.5}
                                seperator=","
                            />
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid style={{borderRadius:"20px", backgroundColor:"#ffebee"}} item component={Card} xs={12} md={2} className={cx(styles.card,styles.deaths)}>
                    <CardContent>
                        <Typography  gutterBottom>
                            Deaths
                        </Typography>
                        <Typography variant="h5">
                            <CountUp style={{color: '#f44336'}}
                                start={0}
                                end={parseInt(props.statewise[0].deaths)}
                                duration={2.5}
                                seperator=","
                            />
                        </Typography>
                        <Typography >{new Date().toGMTString().slice(5,17)}</Typography>
                        <Typography  gutterBottom>Died Today</Typography>
                        <Typography variant="body2">
                        <CountUp style={{color: '#f44336'}}
                                start={0}
                                end={parseInt(props.statewise[0].deltadeaths)}
                                duration={2.5}
                                seperator=","
                            />
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )

}


export default Cards
