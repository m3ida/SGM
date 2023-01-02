/** @format */

import { Backdrop, Box, Button, Modal, Typography } from "@mui/material";
import Slider from "react-slick";
import styled from "styled-components";
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
  width: 700,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: "column",
};


const CustomSlider = styled(Slider)`
  & .slick-prev::before, & .slick-next::before {
    font-size: 30px;
    color: #000;
  }
  & .slick-prev, & .slick-next {
    height: 40px;
    width: 40px;
  }
`

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
    initialSlide: 0
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
            <Typography id="spring-modal-title" style={{fontFamily:"Helvectica", }}  variant="h4" component="h1">
              {modalInfo.title}
            </Typography>
            <Typography id="spring-modal-description" sx={{ mt: 2 }}>
              <CustomSlider {...settings}>
                {modalInfo.videos?.map(((elem, index) => {
                  return (
                    <center>
                      <div key={index} width={'600px'} style={{ overflow: 'hidden', display: 'flex', alignItems: "center", justifyContent: "center" }}>
                        <video controls width="600" style={{ margin: "0 auto" }}>
                          <source src={elem} type="video/mp4" />

                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </center>
                  )
                }))}
                {modalInfo.iframes?.map(((elem, index) => {
                  return (
                    <center>
                      <div key={index} width={'600px'} style={{ overflow: 'hidden', display: 'flex', alignItems: "center", justifyContent: "center" }}>
                        <iframe
                          frameborder="0" scrolling="no" marginheight="0"
                          marginwidth="0" width="580" height="326" allowfullscreen>
                        </iframe>
                      </div>
                    </center>
                  )
                }))}
                {modalInfo.img?.map(((elem, index) => {
                  return (
                    <div key={index} width={'600px'} style={{
                      overflow: 'hidden', display: 'flex', alignItems: "center", justifyContent: "center"
                    }}>
                      < img alt="place" width={'600px'} style={{ margin: '0 auto', height: '500px', width: '500px', objectFit: 'cover' }} src={elem} />

                    </div>
                  )
                }))}
              </CustomSlider>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div >
  );
}
