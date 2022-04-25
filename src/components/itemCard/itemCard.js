import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setCurrentLink } from 'myRedux/actions';
import makeStyles from '@mui/styles/makeStyles';
import {
  Card, CardActionArea, CardContent, CardMedia,
  Typography, Link,
} from '@mui/material';
import './itemCard.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '260px',
    width: '300px',
  },
  image: {
    height: '160px',
    objectFit: 'cover',
  },
  content: {
    height: '100px',
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
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const ItemCard = ({
  name, image, description, link,
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
          onClick={() => {
            dispatch(setCurrentLink(link));
          }}
          className={classes.link}
          underline="hover">
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
    </Card>
  );
};

ItemCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ItemCard;
