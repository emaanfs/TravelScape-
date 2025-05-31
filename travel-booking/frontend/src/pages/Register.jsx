import { Container, Row, Col, Form,  FormGroup, Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import "../styles/login.css";
import registerImg from "../assets/images/tour-bolivia.jpg";
import { useState, useContext } from "react";
import { AuthContext } from "./../context/AuthContext";
import { BASE_URL } from "./../utils/config";

const Register = () => {
    const [credentials, setCredentials] =  useState({
        userName: undefined,
        email: undefined,
        password: undefined,
    });

    const {dispatch} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleChange = e => {
        setCredentials( prev => ({ ... prev, [e.target.id]: e.target.value }));
    };

    const handleClick = async e => { 
        e.preventDefault();

        try {
            const res = await fetch(`${BASE_URL}/auth/register`, {
                method: "post",
                headers: {
                    "content-type":"application/json",
                },
                body: JSON.stringify(credentials),
            });

            const result = await res.json();
            
            if(!res.ok) alert(result.message);

            dispatch({type: "REGISTER_SUCCESS"});
            navigate("/login");
        } catch (err) {
            alert(err.message);
        }
    };

    return (
        <section className="auth-section"> 
            <Container fluid className="h-100">
                <Row className="h-100 justify-content-center align-items-center">
                    <Col lg="10" md="10" className="px-0"> 
                        <div className="auth__container"> 

                            <div className="auth__img-panel" style={{ backgroundImage: `url(${registerImg})` }}>
                                <div className="auth__img-overlay-content">
                                    <h1>Join Our Community of Explorers.</h1>
                                    <p>Sign up to unlock exclusive deals and start your adventure.</p>
                                </div>
                            </div>

                            <div className="auth__form-panel">
                                <div className="form__content-wrapper">
                                    <h3>Create Your Account</h3>
                                    <Form onSubmit={handleClick}>
                                        <FormGroup>
                                            <input 
                                                type="text" 
                                                placeholder="Username" 
                                                required 
                                                id="username" 
                                                onChange={handleChange} 
                                                value={credentials.username || ""}
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <input 
                                                type="email" 
                                                placeholder="Email address" 
                                                required 
                                                id="email" 
                                                onChange={handleChange} 
                                                value={credentials.email || ""} 
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <input 
                                                type="password" 
                                                placeholder="Password" 
                                                required 
                                                id="password" 
                                                onChange={handleChange} 
                                                value={credentials.password || ""}
                                            />
                                        </FormGroup>
                                        
                                        <Button 
                                            className="btn auth__btn" 
                                            type="submit">
                                            Register
                                        </Button>
                                    </Form>
                                    <div className="alternative-action">
                                        <p>Already have an account? <Link to="/login">Login</Link></p>
                                    </div>

                                    <div className="social-login mt-3">
                                        <p className="text-center or-divider"><span>OR</span></p>
                                        <Button outline block className="mb-2 social-btn social-google"><i className="ri-google-fill me-2"></i>Login with Google</Button>
                                        <Button outline block className="social-btn social-facebook"><i className="ri-facebook-fill me-2"></i>Login with Facebook</Button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Register;  


