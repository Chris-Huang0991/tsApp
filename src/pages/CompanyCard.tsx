import React from 'react';
import { graphql } from 'babel-plugin-relay/macro';
import { QueryRenderer } from 'react-relay';
import environment from '../providers/Relay/environment';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    minWidth: 300,
    maxWidth: 300,
    margin: 20
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
});

const query = graphql`
    query CompanyCardQuery {getAllCompany {
      id
      name
      description    
      website
      address
      users {
        id
        firstName
      }
    }}`


const CompanyCard: any = () => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <QueryRenderer
      fetchPolicy='store-and-network'
      environment={environment}
      variables={{}}
      query={query}
      render={({ error, props }: { error: any, props: any }) => {
        console.log(props)
        return (
          <div className={classes.root}>
            {props ? props.getAllCompany.map((e:any) => (
              <Card className={classes.card} variant="outlined">
                <CardContent>
                  <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {e.address}
              </Typography>
                  <Typography variant="h5" component="h2">
                    {e.name}
              </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    {e.website}
              </Typography>
                  <Typography variant="body2" component="p">
                    {e.description}
                <br />
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            )) : null}
          </div>
        );
      }}
    />
  );
};

export default CompanyCard;