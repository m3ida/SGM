/** @format */

import { Backdrop, Box, Button, Modal, Typography } from "@mui/material";
import Slider from "react-slick";
import { useSpring, animated } from "react-spring";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




const Fade = (props) => {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div style={style} {...other}>
      {children}
    </animated.div>
  );
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function CustomModal({ open, setOpen, modalInfo }) {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2
  };

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="spring-modal-title" variant="h4" component="h1">
              {modalInfo.title}
            </Typography>
            <Typography id="spring-modal-description" sx={{ mt: 2 }}>
              <div style={{height:'600px'}}>
                <Slider {...settings}>
                  {modalInfo.img?.map(((elem, index) => {
                    return (<div width={'600px'} style={{overflow:'hidden'}}><img width={'600px'} style={{margin:'auto', overflow:'hidden'}} src={elem} /> </div>)
                  }))}
                </Slider>
              </div>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}