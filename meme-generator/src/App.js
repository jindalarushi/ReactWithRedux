import React, {Component} from 'react';
import { connect } from 'react-redux';
import './styles/index.css';
import MemeItem from './components/MemeItem';
import MyMeme from './components/MyMeme';
import {Form, FormGroup, FormControl} from 'react-bootstrap';

class App extends Component{
    constructor()
    {
        super();
        this.state ={
            memeLimit: 10,
            text0: '',
            text1: ''
        }
        
    }
    
    render()
    {
        return(
            <div>
                <h2><u>Welcome to Meme Generator</u></h2>
                <MyMeme />
                <h4><i>Write some text</i></h4>
                <Form inline>
                    <FormGroup>
                        Top
                        {' '}
                        <FormControl type ='text' onChange={event =>{this.setState({text0:event.target.value})}}></FormControl>
                    </FormGroup>
                    {' '}
                    <FormGroup>
                        Bottom
                        {' '}
                        <FormControl type ='text' onChange={event =>{this.setState({text1:event.target.value})}}></FormControl>
                    </FormGroup>

                </Form>
                {
                    this.props.memes.slice(0,this.state.memeLimit).map((meme, index) =>{
                        return(
                            <MemeItem 
                                key={index} 
                                meme={meme}
                                text0={this.state.text0}
                                text1={this.state.text1}>  
                            </MemeItem>
                        )
                    })
                }
                <div className='meme-button' onClick={() => this.setState({memeLimit: this.state.memeLimit+10})}>Load 10 more memes....</div>
            </div>

        )
    }
}


function mapStateToProps(state)
{
    return state;
}
export default connect(mapStateToProps, null)(App);