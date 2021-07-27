import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card, CardActionArea, CardActions, CardContent, CardMedia,
  Typography, Button, Link,
} from '@material-ui/core';
import { GitHub } from '@material-ui/icons';
import './blogCard.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '300px',
    width: '700px',
  },
  image: {
    height: '200px',
    objectFit: 'cover',
  },
  content: {
    height: '60px',
  },
  button: {
    height: '40px',
    direction: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const ProjectCard = ({
  name, image, link,
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Link href={link} color="textPrimary">
          <CardMedia
            component="img"
            alt={name}
            image={image}
            title={name}
            className={classes.image}
          />
          <CardContent className={classes.content}>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
      <CardActions className={classes.button}>
        <Button size="small" color="secondaryDark" href={link}>
          See More
        </Button>
      </CardActions>
    </Card>
  );
};

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ProjectCard;
