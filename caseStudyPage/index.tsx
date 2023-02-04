import React, { useState } from 'react'
import Slider from 'react-slick'
import { Image } from 'antd'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {
  WilProjectConatiner,
  ProjectWrapper,
  ProjectDetail,
  ProjectNameWrapper,
  ProjectName,
  ProjectTechnology,
  ProjectDescription,
  ImagesWrapper,
  Images,
  HomepageImages,
} from 'styles/views/wilProjects'
import EnlargeImage from 'assets/images/Enlarge.png'
import Projects from 'views/wilProjects/data'
import {  useParams } from 'react-router-dom'


const CaseStudy =() =>{
  const params = useParams();
  const projectID = Number(params.id)
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 2.7,
    slidesToScroll: 1,
    initialSlide: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1030,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  const [visible, setVisible] = useState(true)
  return(


<WilProjectConatiner>
{Projects.filter(project => project.id === projectID).map((projectDetails)=>{
  const [val, setVal] = useState()

  return(
    <ProjectWrapper color={projectDetails.color} key={projectDetails.id}>
      <WilProjectConatiner>
      CASE STUDY
      </WilProjectConatiner>
              <ProjectDetail>
                <ProjectNameWrapper>
                  {projectDetails?.icon}
                  <ProjectName>{projectDetails?.name}</ProjectName>
                </ProjectNameWrapper>
              </ProjectDetail>
              <ProjectTechnology>{projectDetails?.technology}</ProjectTechnology>
              <ProjectDescription>{projectDetails?.description}</ProjectDescription>
              <Image.PreviewGroup>
                <ImagesWrapper>
                  <Slider {...settings}>
                    {projectDetails?.images?.map((image: any) => {
                      return (
                        <div key={image.id}>
                          <Images>
                            <HomepageImages src={image.image} />
                            <Image
                              className="show"
                              width={26}
                              style={{ position: 'absolute', top: '-288px', right: '-190px', display: 'none' }}
                              src={EnlargeImage}
                              preview={{
                                visible,
                                src: image.image,
                                onVisibleChange: (value) => {
                                  setVisible(value)
                                },
                              }}
                            />
                          </Images>

                          <div>{image.name}</div>
                        </div>
                      )
                    })}
                  </Slider>
                </ImagesWrapper>
              </Image.PreviewGroup>
            </ProjectWrapper>


  )
})}
</WilProjectConatiner>

  )

}

export default CaseStudy