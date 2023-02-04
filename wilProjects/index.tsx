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
  ExploreButton,
  StyledExploreButton,
  ProjectTechnology,
  ProjectDescription,
  ImagesWrapper,
  Images,
  HomepageImages,
} from 'styles/views/wilProjects'
import EnlargeImage from 'assets/images/Enlarge.png'
import Projects from './data'
import { useNavigate } from 'react-router-dom'

const WilProjects = () => {
  const navigate = useNavigate()
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
  return (
    <WilProjectConatiner>
      {Projects?.map((project: any) => {
        return (
          <ProjectWrapper color={project.color} key={project.id}>
            <ProjectDetail>
              <ProjectNameWrapper>
                {project?.icon}
                <ProjectName>{project?.name}</ProjectName>
              </ProjectNameWrapper>
              <ExploreButton>
                <StyledExploreButton
                  onClick={() => {
                    navigate(`${project?.id}`)
                  }}
                  type="button"
                  label="Explore"
                />
              </ExploreButton>
            </ProjectDetail>
            <ProjectTechnology>{project?.technology}</ProjectTechnology>
            <ProjectDescription>{project?.description}</ProjectDescription>
            <Image.PreviewGroup>
              <ImagesWrapper>
                <Slider {...settings}>
                  {project?.images?.map((image: any) => {
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

export default WilProjects
