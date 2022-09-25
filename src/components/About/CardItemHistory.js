import React from 'react';
import { Link } from 'react-router-dom';
import images from 'src/static/images/images';


const CardItemHistory = (props) => {
  const {title} = props
  return (
    <div className={`col-about-us1`}>
              <div className="box-title">
                <h3>
                  <Link
                    to="/why-choose-us--pde,1121"
                    title={title}
                  >
                    {title}
                  </Link>
                </h3>
                <div className="about-us-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque quis eros lobortis, vestibulum turpis ac,
                  pulvinar odio. Praesent vulputate a elit ac mollis. In sit
                  amet ipsum turpis. Pellentesque venenatis, libero vel euismod
                  lobortis, mi metus luctus augue, eget dapibus elit nisi eu
                  massa.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque quis eros lobortis, vestibulum turpis ac,
                  pulvinar odio. Praesent vulputate a elit ac mollis. In sit
                  amet ipsum turpis. Pellentesque venenatis, libero vel euismod
                  lobortis, mi metus luctus augue, eget dapibus elit nisi{" "}
                </div>
              </div>
              <div className="box-content">
                <Link
                  to="/why-choose-us--pde,1121"
                  title="Chúng tôi là ai"
                >
                  <img
                    src={images.imgaboutsp}
                    alt="Chúng tôi là ai"
                  />
                </Link>
              </div>
            </div>
  )
}

export default CardItemHistory