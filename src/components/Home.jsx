import React from 'react';
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'; 
import '../App.css'; 

const Home = () => {
    return (
        <Container className="text-center">
            <Carousel className='mb-5'>
                <Carousel.Item>
                    <div className="carousel-image-wrapper">
                        <img
                            className="d-block w-100 carousel-img"
                            src="https://plus.unsplash.com/premium_photo-1723507303239-14b6f6c0a58e?q=80&w=2114&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                            alt="First slide"
                        />
                        <div className="carousel-caption-overlay">
                            <Carousel.Caption>
                                <h3>Get Nutrition Information</h3>
                                <p>Analyze the nutritional content of your meals.</p>
                            </Carousel.Caption>
                        </div>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <div className="carousel-image-wrapper">
                        <img
                            className="d-block w-100 carousel-img"
                            src="https://plus.unsplash.com/premium_photo-1700760416236-1bcf6fe857bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Second slide"
                        />
                        <div className="carousel-caption-overlay">
                            <Carousel.Caption>
                                <h3>Search for recipes</h3>
                                <p>Review the calorie count of the recipes, and choose a healthier option.</p>
                            </Carousel.Caption>
                        </div>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <div className="carousel-image-wrapper">
                        <img
                            className="d-block w-100 carousel-img"
                            src="https://images.unsplash.com/photo-1526127230111-0197afe94d72?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Third slide"
                        />
                        <div className="carousel-caption-overlay">
                            <Carousel.Caption>
                                <h3>Stay Healthy</h3>
                                <p>Monitor your daily calorie intake.</p>
                            </Carousel.Caption>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
            <div className="row mb-5">
            <div className="col-md-6">
                    <div className="card" style={{ width: '100%' }}>
                        <div className="card-body">
                            <h2 className="card-title">Nutrition Tracker</h2>
                            <h6 className="card-text">You can easily track the calorie counts of foods<br/> and the nutrient content of meals.<br/> You can easily retrieve nutritional information one ingredient at a time.</h6>
                            <a href="/food-log" className="btn btn-primary">Go to Food Log</a>
                            <img className="card-img-bottom mt-4" src="https://images.pexels.com/photos/8844387/pexels-photo-8844387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Card image cap" />
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card" style={{ width: '100%' }}>
                        <div className="card-body">
                            <h2 className="card-title">Recipe Search</h2>
                            <h6 className="card-text">
                            You can search for recipes by ingredient,<br/> and the results will show the calories per serving,<br/>  making it easier to monitor the energy intake of your meals.</h6>
                            <a href="/recipe-search" className="btn btn-primary">Go to Recipe Search</a>
                            <img className="card-img-bottom mt-4" src="https://images.pexels.com/photos/8844888/pexels-photo-8844888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Card image cap" />
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Home;
