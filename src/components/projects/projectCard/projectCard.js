import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card, CardActionArea, CardActions, CardContent, CardMedia,
  Typography, Button,
} from '@material-ui/core';
import './projectCard.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '290px',
    width: '300px',
  },
  image: {
    height: '140px',
    objectFit: 'cover',
  },
  content: {
    height: '110px',
  },
  button: {
    height: '40px',
  },
}));

const ProjectCard = ({
  name, image, description, link,
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
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
          <Typography variant="body2" color="secondaryDark" component="p">
            {description}
          </Typography>
        </CardContent>
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
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ProjectCard;
