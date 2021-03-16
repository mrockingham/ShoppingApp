import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import{Form, Button, Row, Col} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import {register} from '../action/userActions'

 
const RegisterPage = ({location, history}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)

    const dispatch = useDispatch()

    const userRegister = useSelector(state => state.userRegister)
    const {loading, error, userInfo} = userRegister

    const redirect = location.search? location.search.split('=')[1]: '/'


    useEffect(()=>{
        if(userInfo) {
            history.push(redirect)
        }
    },[history, userInfo, redirect])


    const submitHandler = (e) => {
        e.preventDefault()
        if(password != confirmPassword){
            setMessage('Passwords Do Not Match')
        }
        dispatch(register(name, email, password))
    }

    console.log(typeof error)

    return (
        
        <FormContainer>
            
            {message && <h1>{message}</h1>}
            {error && <h1>{error}</h1>}
            {loading && <Loader />}
            <h1>Sign Up</h1>
            <Form onSubmit ={submitHandler}>
                <Form.Group controlId='name'>
                    <Form.Label>User Name</Form.Label>
                    <Form.Control
                    type='name'
                    placeholder='Enter Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}>

                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                    type='email'
                    placeholder='Enter Email'
                    value={email.toLowerCase()}
                    onChange={(e) => setEmail(e.target.value)}>

                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                    type='password'
                    placeholder='Enter Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}>

                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='confirmPassword'>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                    type='password'
                    placeholder='Confirm Password'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}>

                    </Form.Control>
                </Form.Group>

                <Button type='submit'>
                    Register
                </Button>
                </Form>        

                <Row ClassName='py-3'>
                    <Col>
                        Have an Account?{' '}
                         <Link to={redirect ? `/login?redirect=${redirect}`: '/login'}>
                            Sign up
                        </Link>
                    </Col>
                </Row>
        </FormContainer>

    )
}

export default RegisterPage;
