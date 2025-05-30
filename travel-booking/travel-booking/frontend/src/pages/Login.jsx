import { Container, Row, Col, Form,  FormGroup, Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import "../styles/login.css";
import loginPageBgImage from "../assets/images/tour-bolivia.jpg"; 
import { useState, useContext } from "react";
import { AuthContext } from "./../context/AuthContext";
import { BASE_URL } from "./../utils/config";

const Login = () => {

    const [credentials, setCredentials] =  useState({
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

        dispatch({type: "LOGIN_START"});

        try {

            const res = await fetch(`${BASE_URL}/auth/login`,{
                method: "post",
                headers: {
                    "content-type":"application/json",
                },
                credentials: "include",
                body: JSON.stringify(credentials),
            });

            const result = await res.json();
            if(!res.ok) alert(result.message);

            console.log(result.data);

            dispatch({type: "LOGIN_SUCCESS", payload:result.data});
            navigate("/");
            
        } catch (err) {
            dispatch({type: "LOGIN_FAILURE", payload:err.message});  
        }
    };

return (
        <section className="auth-section"> 
            <Container fluid className="h-100">
                <Row className="h-100 justify-content-center align-items-center">
                    <Col lg="10" md="10" className="px-0"> 
                        <div className="auth__container"> 
                            
                            <div className="auth__img-panel" style={{ backgroundImage: `url(${loginPageBgImage})` }}>
                                <div className="auth__img-overlay-content">
                                    <h1>Find your next adventure.</h1>
                                    <p>Discover amazing places at exclusive deals.</p>
                                </div>
                            </div>

                            <div className="auth__form-panel">
                                <div className="form__content-wrapper">
                                    <h3>Hi, good to have you back.</h3>
                                    <Form onSubmit={handleClick}>
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
                                        <FormGroup className="password-group">
                                            <input 
                                                type="password" 
                                                placeholder="Password" 
                                                required 
                                                id="password" 
                                                onChange={handleChange} 
                                                value={credentials.password || ""}
                                            />
                                            {/* <Link to="/forgot-password"className="forgot-password-link">Forgot password?</Link> */}
                                        </FormGroup>
                                        
                                        
                                        <Button 
                                            className="btn auth__btn" 
                                            type="submit">
                                            Login 
                                        </Button>
                                    </Form>
                                    <div className="alternative-action">
                                        <p>Don't have an account? <Link to="/register">Create account</Link></p>
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

export default Login;  
