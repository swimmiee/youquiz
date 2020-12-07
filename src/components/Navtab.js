import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const TabPanel = ({ children, value, index, ...other }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export const Navtab = ({tabnames, children, tabIdx, tabController}) => {
  const classes = useStyles();
  let [value, setValue] = useState(0);
  (tabIdx && tabController) && ([value, setValue] = [tabIdx, tabController]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant={ tabnames.length > 3 ? "scrollable" : "fullWidth" }
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
            {
                tabnames.map( (t, idx) => (
                    <Tab key={idx} label={t} {...a11yProps(idx)} />
                ))
            }
        </Tabs>
      </AppBar>
      {
          children.map( (ch, idx) => (
            <TabPanel key={idx} value={value} index={idx}>
                {ch}
            </TabPanel>
          ))
      }
    </div>
  );
}
Navtab.propTypes={
    tabnames: PropTypes.arrayOf(PropTypes.string).isRequired,
    children: PropTypes.node.isRequired
}

export default Navtab;