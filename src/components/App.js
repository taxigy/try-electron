import React from 'react';
import styles from '../styles';

const { classes } = styles.createStyleSheet({
  root: {
    'display': 'flex',
    'flex-flow': 'column nowrap',
    'height': '100vh',
    'width': '100vw',
    'background-image': 'linear-gradient(0deg, rgb(5, 5, 5) 0%, rgb(40, 40, 40) 100%)',
  },
  statusBar: {
    'height': '22px',
    '-webkit-app-region': 'drag',
  },
  children: {
    'display': 'flex',
    'justify-content': 'center',
    'align-items': 'center',
    'height': 'calc(100% - 44px)',
    'font-family': 'Montserrat',
    'font-size': '5rem',
    'font-weight': '700',
    'line-height': '1',
    'letter-spacing': '-0.5px',
    'color': 'rgb(220, 220, 220)',
  },
}).attach();

export default function App(props = {}) {
  return (
    <div className={classes.root}>
      <div className={classes.statusBar} />
      <div className={classes.children}>
        JUST WHY
      </div>
      {props.children}
    </div>
  );
}
