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
import './blogCard.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '300px',
    width: '700px',
  },
  link: {
    '&:hover': {
      color: '#2b7a78',
    },
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
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const BlogCard = ({
  name, image, link,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Link
          href={link}
          underline="none"
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
          </CardContent>
        </Link>
      </CardActionArea>
      <CardActions className={classes.button}>
        <Button
          size="small"
          color="textPrimary"
          href={link}
          className={classes.link}
          onClick={() => {
            dispatch(setCurrentLink(link));
          }}
        >
          See More
        </Button>
      </CardActions>
    </Card>
  );
};

BlogCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default BlogCard;
