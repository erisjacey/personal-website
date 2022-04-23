import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentLink } from 'myRedux/actions';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card, CardActionArea, CardContent, CardMedia,
  Typography, Link,
} from '@material-ui/core';
import './blogCard.scss';

const BlogCard = ({
  name, image, link,
}) => {
  const { isDesktopView } = useSelector((state) => state.isDesktopView);

  const useStyles = makeStyles((theme) => ({
    root: {
      height: '210px',
      width: isDesktopView ? '700px' : '300px',
    },
    link: {
      '&:hover': {
        color: '#2b7a78',
      },
    },
    image: {
      height: '150px',
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
    </Card>
  );
};

BlogCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default BlogCard;
