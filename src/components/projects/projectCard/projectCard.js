import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setCurrentLink } from 'myRedux/actions';
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
  link: {
    '&:hover': {
      textDecoration: 'none',
      color: '#2b7a78',
    },
  },
  button: {
    height: '40px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));

const ProjectCard = ({
  name, image, description, link, seeMore, github,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Link
          href={link}
          hover="none"
          color="textPrimary"
          className={classes.link}
          onClick={() => {
            dispatch(setCurrentLink(link));
          }}
        >
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
            <Typography variant="body2" component="p">
              {description}
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
      <CardActions className={classes.button}>
        <Button
          size="small"
          href={seeMore.text === '' ? link : seeMore.link}
          className={classes.link}
          target={seeMore.text === '' ? '' : '_blank'}
          rel="noopener"
        >
          {seeMore.text === '' ? 'See More' : seeMore.text}
        </Button>
        <Link
          href={github}
          target="_blank"
          rel="noopener"
          color="textPrimary"
          className={classes.link}
          onClick={() => {
            dispatch(setCurrentLink(link));
          }}
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
  seeMore: PropTypes.shape({
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }),
  github: PropTypes.string.isRequired,
};

export default ProjectCard;
