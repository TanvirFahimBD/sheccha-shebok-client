import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath:
      'https://i.ibb.co/vk060NL/sam-mann-41eo5e8j-W08-unsplash.jpg',
  },
  {
    imgPath:
      'https://i.ibb.co/0y3XPf7/larm-rmah-AEa-TUnvneik-unsplash.jpg',
  },
  {
    imgPath:
      'https://i.ibb.co/wdThKPD/ocg-saving-the-ocean-xch7j-XAaqqo-unsplash.jpg',
  },
  {
    imgPath:
      'https://i.ibb.co/8gpXR6S/eric-masur-Hkw1er-Brzwc-unsplash.jpg',
  },
];

const Banner = () => {
    const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: 4) => {
    setActiveStep(step);
  };
    return (
        <div>
          <Box sx={{ minWidth: "100%", flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 1,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 600,
                  display: 'block',
                  minWidth: 349,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </Box>  
        </div>
    );
};

export default Banner;