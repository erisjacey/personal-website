import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card, CardActionArea, CardActions, CardContent, CardMedia,
  Typography, Button, Link,
} from '@material-ui/core';
import { GitHub } from '@material-ui/icons';
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
    direction: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    left: {
      justifySelf: 'flex-start',
    },
    right: {
      justifySelf: 'flex-end',
    },
  },
}));

const ProjectCard = ({
  name, image, description, link, github,
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
            <Typography variant="body2" color="secondaryDark" component="p">
              {description}
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
      <CardActions className={classes.button}>
        <Button size="small" color="secondaryDark" href={link} className={classes.button.left}>
          See More
        </Button>
        <Link
          href={github}
          target="_blank"
          rel="noopener"
          color="textPrimary"
          className={classes.button.right}
        >
          <GitHub fontSize="small" />
        </Link>
      </CardActions>
    </Card>
  );
};

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
};

export default ProjectCard;
